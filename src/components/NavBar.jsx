import "../NavBar.css"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import CartPage from "./CartPage";

function NavBar({cartCount}) {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }
  function handleClickCart() {
    navigate("/cart/");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
  <Link to={'/'} className="text-decoration-none">
    <a className="navbar-brand" href="#">Shopper</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to={'/products'} className="text-decoration-none">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Products</a>
        </li>
        </Link>
        <Link to={'/cart'} className="text-decoration-none">
        <li className="nav-item">
        <a className="nav-link" aria-current="page">Cart</a>
        </li>
        </Link>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   

    </>
  )

}
export default NavBar;