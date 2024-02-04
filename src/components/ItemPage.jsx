import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../ProductPage.css';
import NavBar from "./NavBar";
function ItemPage({ addToCartApp, cart }) {
    const [isInCart, setIsInCart] = useState(false);
    const [itemQty, setItemQty] = useState(0);
    const [qtyInCart, setQtyInCart] = useState(0);
    const [cartQtyEqualsFormQty, setCartQtyEqualsFormQty] = useState(true);
    let { id } = useParams();
    const [data, setData] = useState("");
    useEffect(() => {
        
        if (data){
            setIsInCart(containsObject(data.id, cart));
        }
        
        console.log(isInCart);
        console.log("UPDATE")
        if (qtyInCart != itemQty){
            setCartQtyEqualsFormQty(false);
        }
        else {
            setCartQtyEqualsFormQty(true);
        }
        
        const url = "https://fakestoreapi.com/products/" + id;

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

    function addToCart() {
        
        addToCartApp(data);
        setIsInCart(true);
        setItemQty(itemQty + 1);    
        setQtyInCart(1);
        
    }

    function increaseQty(){
        setItemQty(itemQty + 1); 
        addToCartApp(data);   
    }
    function decreaseQty(){
        if (itemQty > 0){
            setItemQty(itemQty - 1);
        }
         
    }

    function containsObject(obj, list) {
        
            var i;
            for (i = 0; i < list.length; i++) {
               
                if (list[i].id === obj.id) {
                    return true;
                }
            }
        
        
        

        return false;
    }


    return (
        <>

            <div className="wrapper">
                {/* left image */}
                <div className="card shadow-md">
                    <img className="bd-placeholder-img card-img-top" src={data.image} />
                </div>
                {/* right product info */}
                <div className="rightColumn">
                    <h1>
                        {data.title}
                    </h1>
                    <p>
                        ${data.price}
                    </p>
                    <p>
                        {data.category}
                    </p>
                    <p>
                        {data.description}
                    </p>

                    {isInCart ? <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decreaseQty}>-</button>
                      
                        <span class="btn btn-primary">{itemQty}</span>
                        <button type="button" className="btn btn-primary" onClick={increaseQty}>+</button>
                    </div> : <button onClick={addToCart} className="btn btn-outline-primary">
                        Add to Cart
                    </button>}
                    {!cartQtyEqualsFormQty ? <button type="button" className="btn btn-primary">Update Cart</button> : '' }



                </div>
            </div>


        </>
    )
}
export default ItemPage;