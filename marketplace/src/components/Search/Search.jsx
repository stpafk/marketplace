import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header";

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
        .then((meta) => setData(meta))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [state])

    return {data, loading, error}
}

export default function Search() {

    const {data, error, loading } = Fetch();

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    return (
        <>
            <Header />
            <ul className="load__search">
                {data.results.albummatches.album.map((album, index) => {

                    return <li key={index} className="load__album">
                        <h3>{album.name}</h3>
                        <p>{album.artist}</p>
                        <img src={album.image[3]['#text']} alt={album.name + "cover"} />
                    </li>
                })}
            </ul>
            <Link to="/">Back</Link>
        </>
    )
}