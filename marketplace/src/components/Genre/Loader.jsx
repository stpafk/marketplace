import { useEffect, useState } from "react";
import setRequest from "../../utils/setRequest";
import cleanUpData from "../../utils/cleanUpData";
import { priceHandlers } from "../../utils/priceHandler";
import PropTypes from 'prop-types'

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
    }, [props.type])

    return {data, error, loading}
}

export default function Loader(props) {

    const { data, error, loading } = Fetch(props)
    const cartAdd = props.cartAdd;

    if (error) return <div className="error"><p>Error in fetching resource.</p></div>
    if (loading) return <div className="loading"><span className="loader"></span></div>

    return(
        <>
            <h1>TOP {props.type.toUpperCase()} ALBUMS</h1>
            <ul className="load__genre">
                {data.length === 0 ? <p>Album not found. </p> : 
                data.map((album, index) => {
                    return <li key={index} className="load__album">
                        <img src={album.image[3]['#text']} alt={album.name + "cover"} />
                        <div className="album__info">
                            <div className="info">
                                <h3>{album.name}</h3>
                                <p>{album.artist.name}</p>
                                <p>{priceHandlers.getPrice(album) * album.quantity}$</p>
                            </div>
                            <div className="price">
                                <label htmlFor="qtt">Quantity:</label>
                                <input type="number" placeholder="1" name="nmb" onChange={(e) => album.quantity = e.target.value} min={1} max={10} />
                                <button onClick={() => cartAdd(album)}>Add to Cart 
                                <i className="bi bi-cart"></i></button>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}

Loader.propTypes = {
    cartAdd: PropTypes.object,
    type: PropTypes.string,
    'type.toUpperCase': PropTypes.string,
}