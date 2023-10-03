import { useEffect, useState } from "react";
import setRequest from "../../utils/setRequest";
import cleanUpData from "../../utils/cleanUpData";
import { priceHandlers } from "../../utils/priceHandler";

function Fetch(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(setRequest(props.type))
        .then((request) => {
            if (request.status >= 400) {
                throw new Error("ERROR");
            }
            return request.json()
        })
        .then((meta) => setData(cleanUpData(meta.albums.album)))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [])

    return {data, error, loading}
}

export default function Loader(props) {

    const { data, error, loading } = Fetch(props)
    const cartAdd = props.cartAdd;

    if (error) return <p>network error while fetching resource</p>
    if (loading) return <p>Fetching...</p>

    return(
        <>
            <h1>TOP {props.type.toUpperCase()} ALBUMS</h1>
            <ul className="load__genre">
                {data.length === 0 ? <p>Album not found. </p> : 
                data.map((album, index) => {

                    let obj = {
                        name: album.name,
                        artist: album.artist.name,
                        price: priceHandlers.getPrice(album),
                        img: album.image[3]['#text'],
                        quantity: 1,
                    }

                    return <li key={index} className="load__album">
                        <img src={album.image[3]['#text']} alt={album.name + "cover"} />
                        <h3>{album.name}</h3>
                        <p>{album.artist.name}</p>
                        <span className="price">
                            <p>{priceHandlers.getPrice(album)}$</p>
                            <button onClick={() => cartAdd(obj)}>Add to Cart</button>
                        </span>
                    </li>
                })}
            </ul>
        </>
    )
}