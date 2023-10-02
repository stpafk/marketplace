import Header from "../Header";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

export default function Album() {
    
    const search = useParams();

    return(
        <>
        <Header />
            <Link to="/">Back</Link>
            {
                <Loader type={search.type}/>
            }
        </>
    )

}