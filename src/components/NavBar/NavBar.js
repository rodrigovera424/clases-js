import CartWidget from "../CartWidget/CarWidget"
import "./NavBar.css"

const NavBar = () => {
    return (


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       <li className="nav-item">
          <a className="nav-link" href="#">Tienda ceroM  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
         
        <li className="nav-item">
          <a className="nav-link" href="#">Nuestros trabajos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Precios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
   <CartWidget/>

</nav>


    
 )
}


   


export default NavBar