import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { priceHandlers } from "../utils/priceHandler";


export default function Cart() {

    const [add, cartItems, deleteItem] = useOutletContext();

    if (cartItems.length === 0) return <><p>Nothing yet.</p><Link to="/">Back</Link></>

    return (<>
        <section className="cart">
            <ul className="cart__items">
            {cartItems.map((item, key) => {
                    return <li key={key}>
                        <img src={item.img} alt={item.name + "   cover"} />
                        <h3>{item.name}</h3>
                        <p>{item.artist}</p>
                        <span className="price">
                            <p>Quantity: {item.quantity}</p>
                            <p>U${item.price}</p>
                            <button onClick={() => deleteItem(item.name)}>Remove</button>
                        </span>
                    </li>
                })}
            </ul>
            <div className="cart__display">
                <h1>Your Cart</h1>
                <h1>Items: {cartItems.length}</h1>
                <h1>Total: {priceHandlers.totalPrice(cartItems)}$</h1>
            </div>
        </section>
        <Link to="/">Back</Link>
        </>
    )

}