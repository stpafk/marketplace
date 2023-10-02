import Header from "./Header";
import { Link } from "react-router-dom";

export default function ErrorPage() {

    return(
        <>
            <Header />
            <p> Error in displaying page.</p>
            <Link to="/">Back</Link>
        </>
    )

}