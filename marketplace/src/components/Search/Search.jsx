import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function Search() {

    const search = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=3f26f648032bcdf951aa7395619343a3&format=json`)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("error");
            };

            return response.json();
        })
        .then((meta) => setData(meta))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>a2ee2</p>
    if (error) return <p>Error</p>

    return (
        <>
            {console.log(data)}
        </>
    )
}