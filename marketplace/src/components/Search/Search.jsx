import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header";
import cleanUpData from "../../utils/cleanUpData";
import calcPrice from "../../utils/calcPrice";

function Fetch() {
    
    const { state } = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${state}&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=25`)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("error");
            };

            return response.json();
        })
        .then((meta) => setData(cleanUpData(meta.results.albummatches.album)))
        .catch((error) => setError(error))
        .then(() => console.log(data))
        .finally(() => setLoading(false))
    }, [state])

    return {data, loading, error, state}
}

export default function Search() {

    const {data, error, loading, state } = Fetch();

    if (state === null) return <><Header /><p className="search__error">Search for an album.</p></>
    if (loading) return <p className="search__error">Loading</p>
    if (error) return <p className="search__error">Error</p>

    return (
        <>
            <Header />
            <ul className="load__search">
                <h1>Showing results for "{state}"</h1>
                { data.length === 0 ? <p>Album not found.</p>
                :
                data.map((album, index) => {
                    return <li key={index} className="load__album">
                        <img src={album.image[3]['#text']} alt={album.name + "cover"} />
                        <h3>{album.name}</h3>
                        <p>{album.artist}</p>
                        <span className="price">
                            <p>U${calcPrice(album)}</p>
                            <button>Add to Cart</button>
                        </span>
                    </li>
                })}
            </ul>
            <Link to="/">Back</Link>
        </>
    )
}