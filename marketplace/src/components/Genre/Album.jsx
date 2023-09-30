import Header from "../Header";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

export default function Album() {
    
    const search = useParams();

    return(
        <>
            <Header />
            {
                <Loader type={search.type}/>
            }
            <Link to="/">Back</Link>
        </>
    )

}