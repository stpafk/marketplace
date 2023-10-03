import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";


export default function Cart() {

    const [add, cartItems, deleteItem] = useOutletContext();

    if (cartItems.length === 0) return <><p>Nothing yet.</p><Link to="/">Back</Link></>

    return (<>
        <ul>
            {cartItems.map((item, key) => {
                return <li key={key}>
                    <img src={item.img} alt={item.name + "   cover"} />
                        <h3>{item.name}</h3>
                        <p>{item.artist}</p>
                        <span className="price">
                            <p>U${item.price}</p>
                            <button onClick={() => deleteItem(item.name)}>Remove</button>
                        </span>
                    </li>
            })}
        </ul>
        <Link to="/">Back</Link>
        </>
    )

}