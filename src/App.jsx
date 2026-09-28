import { useState, useEffect } from 'react'
import './App.css'

function Header ( { todos } ) {
  return (
    <div>
      <h1>Napi feladataim</h1>
      <h3>Összesen: {todos.length} feladat</h3>
      {todos.filter(t => !t.completed).length === 0 && (<span className="warning">Minden feladattal végeztél!</span>)}
    </div>
  )
}

function AddToForm( { onAddTodos } ) {
  const [ newTodos, setNewTodos ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newTodos.trim() === "") return;

    onAddTodos(newTodos);
    setNewTodos("");

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newTodos} onChange={(e) => setNewTodos(e.target.value)} placeholder="Írj be egy hozzáadni kívánt feladatot!">
        </input>
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  )
}

function TodoList( { todos, onDeleteTodos, handleToggleTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}
          <button onClick={(e) => {e.stopPropagation(); onDeleteTodos(todo.id)}}>Törlés</button>
          </li>
        ))}
        
      </ul>
    </div>
  )
}

function TodoApp() {
  const [ todos, addTodos ] = useState([
    { id: 1, text: "Bevásárlás", completed: false },
    { id: 2, text: "Porszívózás", completed: false },
    { id: 3, text: "Mosás", completed: false }
  ]);

  useEffect(() => {
    const activeCount = todos.filter(t => !t.completed).length
    document.title = `A hátralévő feladatok száma: ${activeCount} feladat.`
  }, [todos]);

  const handleAddTodo = (newTodoText) => {
    addTodos([ ...todos, {
      id: Date.now(),
      text: newTodoText,
      completed: false
    }]);
  };

  const handleDeleteTodo = (idToDelete) => {
    addTodos(todos.filter((todo) => todo.id !=idToDelete))
  };

  const handleToggleTodoComplete = (idToToggle) => {
    addTodos(todos.map(todo => {
      if(todo.id === idToToggle) {
        return { ...todo, completed: !todo.completed}
      }
      return todo;
    }))
  }

  return (
    <div>
      <Header todos={todos}/>
      <AddToForm onAddTodos={handleAddTodo}/>
      <TodoList todos={todos} onDeleteTodos={handleDeleteTodo} handleToggleTodo={handleToggleTodoComplete}/>
    </div>
  )
}

function App() {
  return (
    <TodoApp />
  );
}

export default App

/*function Header( {items}) {
  return (
    <header>
      <h1>Bevásárlólista</h1>
      <p>Összesen: {items.length} termék</p>
      {items.length >= 6 && (<span className="warning">A kosár tele van!</span>)}
    </header>
  )
}

function AddItemForm({ onAddItem }) {
  const [ newItem, setNewitem ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() ==="") return;

    onAddItem(newItem);
    setNewitem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={newItem} onChange={(e) => setNewitem(e.target.value)} placeholder="Termék hozzáadása...">
      </input>
      <button type="submit">Hozzáadás</button>
    </form>
  )
};

function ItemList({ items, onDeleteItem, handleToggle }) {
  return(
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => handleToggle(item.id)} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}
        <button onClick={(e) => { e.stopPropagation();
           onDeleteItem(item.id)}}>Törlés</button>
        </li>
      ))}
    </ul>
  )
}

function ShoppingList() {
  const [ items, setItems ] = useState([
    { id: 1, text: "Tej", completed: false },
    { id: 2, text: "Kenyér", completed: false },
    { id: 3, text:"Tojás", completed: false }
  ]);
  
  useEffect(() => {
    document.title = `Termékek száma: ${items.length}`
  }, [items]);

  const handleAddItem = (newItemText) => {
    setItems([...items, { 
      id: Date.now(),
      text: newItemText,
      completed: false
    }]);
  };

  const handleDeleteItem = (idToDelete) => {
    setItems(items.filter((item) => item.id != idToDelete));
  };

  const handleToggleComplete = (idToToggle) => {
    setItems(items.map(item => {
      if(item.id === idToToggle) {
        return {...item, completed: !item.completed}
      }
      return item;
  }));
};

  return (
    <div>
      <Header items={items}/>
      <AddItemForm onAddItem={handleAddItem}/>
      <ItemList items={items} onDeleteItem={handleDeleteItem} handleToggle={handleToggleComplete}/>
    </div>
  )
}*/