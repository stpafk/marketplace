import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";


export default function Cart() {

    const [add, cartItems] = useOutletContext();

    if (cartItems.length === 0) return <p>nothing yet</p>

    return (<>
        <ul>
            {cartItems.map((item, key) => {
                return <li key={key}>{item.name}</li>
            })}
        </ul>
        <Link to="/">Back</Link>
        </>
    )

}