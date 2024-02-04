import { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function ItemCard({ item, addToCartApp, cart }) {
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);


  function addToCart() {

    addToCartApp(item);
    setIsInCart(true);
  }
  



  return (
    <>


      <div className="col" style={{ textDecoration: "none" }}>
        <div className="card shadow-sm">
          {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>{item.title}</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">{item.title}</text></svg> */}
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={item.image} />
          <div className="card-body">
            <p className="card-text text-decoration-none">{item.title}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                
              <p className="card-subtitle mb-2 text-body-secondary">${item.price}</p>
                <Link to={'/products/' + item.id} className="text-decoration-none">
                  <button type="button" className="btn btn-sm btn-outline-primary" >View</button>
                </Link>
              </div>
              <small className="text-body-secondary">{item.rating.rate} stars</small>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ItemCard;