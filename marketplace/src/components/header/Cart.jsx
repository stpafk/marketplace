import { Link, useOutletContext } from "react-router-dom";
import { priceHandlers } from "../../utils/priceHandler";


export default function Cart() {

    const [add, cartItems, deleteItem] = useOutletContext();

    if (cartItems.length === 0) return <><p className="nothing">Nothing yet.</p><Link to="/album/heavy">Start Buying.</Link></>

    return (<>
        {console.log(cartItems)}
        <section className="cart">
            <ul className="cart__items">
            {cartItems.map((item, key) => {
                    return <li className="cart_li" key={key}>
                        <img src={item.image[1]['#text']} alt={item.name + "   cover"} />
                        <div className="wrapper">
                            <h3>{item.name}</h3>
                            {item.artist.name ? <h4>{item.artist.name}</h4> : <h4>{item.artist}</h4>}
                        </div>
                        <span className="price__cart">
                            <p>Quantity: {item.quantity}</p>
                            <p>U${item.price * item.quantity}</p>
                            <button onClick={() => deleteItem(item.name)}>Remove</button>
                        </span>
                    </li>
                })}
            </ul>
            <div className="cart__display">
                <div className="img">
                    <i className="bi bi-cart"></i>
                    <h3>Your Cart</h3>
                </div>
                <h3>Albums: {cartItems.length}</h3>
                <h3>Total: {priceHandlers.totalPrice(cartItems)}$</h3>
                <button className="">Checkout Buy</button>
            </div>
        </section>
        <Link to="/">Back</Link>
        </>
    )

}