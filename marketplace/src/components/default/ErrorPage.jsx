import Header from "../header/Header"
import { Link } from "react-router-dom";

export default function ErrorPage() {

    return(
        <>
            <Header />
            <p className="Error msg"> Error in displaying page.</p>
            <Link to="/">Back</Link>
        </>
    )

}