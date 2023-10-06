import { useEffect, useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import Header from "../header/Header";
import cleanUpData from "../../utils/cleanUpData";
import { priceHandlers } from "../../utils/priceHandler";

function Fetch() {
    
    const { state } = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${state}&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=25`)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("error");
            };

            return response.json();
        })
        .then((meta) => setData(cleanUpData(meta.results.albummatches.album)))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [state])

    return {data, loading, error, state}
}

export default function Search() {

    const {data, error, loading, state } = Fetch();
    const [cartAdd, object] = useOutletContext();

    if (state === null) return <><div className="error"><p className="search__error">Search for an album.</p></div></>
    if (loading) return <div className="loading"><span className="loader"></span></div>
    if (error) return <div className="error"><p className="search__error">Error</p><Link to="/">Back</Link></div>

    return (
        <section className="grid">
            <h1>Showing results for "{state}"</h1>
            <ul className="load__search">
                { data.length === 0 ? <p>Album not found.</p>
                :
                data.map((album, index) => {

                    let obj = {
                        name: album.name,
                        artist: album.artist,
                        price: priceHandlers.getPrice(album),
                        img: album.image[3]['#text'],
                        quantity: 1,
                    }
                    
                    return <li key={index} className="load__album">
                        <img src={album.image[3]['#text']} alt={album.name + " cover"} />
                        <div className="album__info">
                            <h3>{album.name}</h3>
                            <p>{album.artist}</p>
                            <span className="price">
                                <p>{priceHandlers.getPrice(album)}$</p>
                                <label htmlFor="quantity">Quantity</label>
                                <input type="number" name="quantity" id="qtt"
                                min={1} onChange={() => obj.quantity++} />
                                <button onClick={() => cartAdd(obj)}>Add to Cart</button>
                            </span>
                        </div>
                    </li>
                })}
            </ul>
            <Link to="/">Back</Link>
        </section>
    )
}