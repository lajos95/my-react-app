function Header () {
    return (
        <>
            <div className="row" id="home">
            <div className="container-fluid text-end bg-black text-light py-2">
                <span title="Facebook" className="pointer"><i className="bi bi-facebook fs-3 me-3"></i></span>
                <span title="Instagram" className="pointer"><i className="bi bi-instagram fs-3 me-3"></i></span>
                <span title="Twitter" className="pointer"><i className="bi bi-twitter-x fs-3 me-3"></i></span>
                <span title="TikTok" className="pointer"><i className="bi bi-tiktok fs-3 me-3"></i></span>

                <a href="belep.html" title="Belépés" className="text-white text-decoration-none">
                    <i className="bi bi-person fs-3"></i>
                </a>

                <span className="fs-3 text-white opacity-75">/</span>

                <a href="reg.html" title="Regisztráció" className="text-white text-decoration-none me-3">
                    <i className="bi bi-person-add fs-3"></i>
                </a>
            </div>
        </div>
        <div className="row align-items-center container-color">
            <div className="col-md-3 align-items-center text-center">
                <a href="index.html"><img src="img/fanshop_logo.png" alt="Webshop logó" id="logo" className="img-fluid"></img></a>
            </div>
            <div className="col-md-7">
                <form className="d-flex w-100 p-5 align-items-center text-center" role="search" id="form">
                    <input className="form-control me-2  bg-white" type="search"
                        placeholder="Kereséshez írj be egy szöveget" aria-label="Search" id="search-input" />
                    <button className="btn btn-dark" type="submit" id="searchBtn">Keresés</button>
                </form>
            </div>
            <div className="col-md-2 align-items-center text-center text-light">
                <abrr title="Kosár"><i className="bi bi-cart fs-1 pointer" id="kosar-icon"></i></abrr>
                <span className="fs-3" id="kosar_szamlalo">0</span>
            </div>
        </div>
        <div className="row navbar_sticky mb-5">
            <nav className="navbar navbar-expand-lg container-color border-top d-flex justify-content-center">
                <div className="container-fluid mx-auto">
                    <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fw-bold fs-3" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item m-2">
                                <a className="nav-link active text-light" aria-current="page" href="#">Főoldal<i
                                        className="bi bi-chevron-double-right"></i></a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link active text-light" aria-current="page" href="webshop.html">Webshop <i
                                        className="bi bi-chevron-double-right"></i></a>

                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link active text-light" aria-current="page" href="gyik.html">GYIK <i
                                        className="bi bi-chevron-double-right"></i></a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link active text-light" aria-current="page"
                                    href="kapcsolat.html">Kapcsolat <i className="bi bi-chevron-double-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
        </>
    )
}

export default Header;