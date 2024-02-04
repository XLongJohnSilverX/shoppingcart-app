function CartItem({item}){
    return(
        <>
        <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">{item.title}</h6>
                                        <small className="text-body-secondary">{item.category}n</small>
                                    </div>
                                    <span className="text-body-secondary">${item.price}</span>
                                </li>
        </>
    )
}
export default CartItem;