import { Link, useOutletContext, useParams } from "react-router-dom";
import Loader from "./Loader";

export default function Album() {
    
    const search = useParams();
    const [cartAdd] = useOutletContext();

    return(
        <section className="grid">
            <Link to="/">Back</Link>
            {
                <Loader type={search.type} cartAdd={cartAdd}/>
            }
        </section>
    )

}