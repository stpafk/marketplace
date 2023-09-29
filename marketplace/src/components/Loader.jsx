import { useEffect, useState } from "react";

function setRequest(type) {

    let request = ""

    switch(type) {
        case 'top': request = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=heavy+metal&api_key=3f26f648032bcdf951aa7395619343a3&format=json&limit=5";
        break;
    default:
        console.log('error')
    }

    return request

}

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
        console.log("i fire once")
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