import { useState, useEffect } from 'react'
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import FeaturedProducts from './components/FeaturedProducts';
import InfoCards from './components/InfoCards';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './styles/style.css';
import './App.css'

function FerrariShopApp() {

  return (
    <div>
      <Header />
    </div>
  )
}

function App() {
  return (
    <FerrariShopApp />
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