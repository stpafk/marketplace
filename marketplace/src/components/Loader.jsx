import { useEffect, useState } from "react";
import setRequest from "../utils/setRequest";

export default function Loader(props) {

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
        .then((meta) => setData(meta))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [])

    if (error) return <p>network error while fetching resource</p>
    if (loading) return <p>Fetching...</p>

    return(
        <>
            <ul>
                {data.albums.album.map((album, index) => {
                    return <li key={index}>{album.name}</li>
                })}
            </ul>
        </>
    )

}