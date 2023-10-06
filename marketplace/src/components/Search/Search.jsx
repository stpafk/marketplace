import { useEffect, useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
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
        .then((data) => setData(cleanUpData(data.results.albummatches.album)))
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
                    return <li key={index} className="load__album">
                        <img src={album.image[3]['#text']} alt={album.name + " cover"} />
                        <div className="album__info">
                            <div className="info">
                                <h3>{album.name}</h3>
                                <p>{album.artist}</p>
                                <p>{priceHandlers.getPrice(album) * album.quantity}$</p>
                            </div>
                            <div className="price">
                                <label htmlFor="qtt">Quantity:</label>
                                <input type="number" placeholder="1" name="nmb" onChange={(e) => album.quantity = e.target.value} min={1} max={10} />
                                <button onClick={() => cartAdd(album)}>Add to Cart 
                                <i class="bi bi-cart"></i></button>
                            </div>
                            {console.log(album)}
                        </div>
                    </li>
                })}
            </ul>
            <Link to="/">Back</Link>
        </section>
    )
}