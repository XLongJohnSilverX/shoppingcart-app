import { Link, json } from "react-router-dom";
import ItemCard from "./ItemCard";
import React, { useEffect, useState } from "react"
function ItemGrid({addToCartApp, cart}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  function addToCart(item){
    
    addToCartApp(item);
 }





  return (
    <>
 
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data.map((item) => (
              // here we are using the already generated id as the key.
              <div key={item.id}>
               
                <ItemCard  item={item} addToCartApp={addToCart} cart={cart}></ItemCard>
              

                </div>
              
            ))}

          </div>
        </div>
      </div>

    </>
  )
}
export default ItemGrid;