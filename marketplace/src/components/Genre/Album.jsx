import { Link, useOutletContext, useParams } from "react-router-dom";
import Loader from "./Loader";

export default function Album() {
    
    const search = useParams();
    const [cartAdd] = useOutletContext();

    return(
        <section className="grid">
            {
                <Loader type={search.type} cartAdd={cartAdd}/>
            }
            <Link to="/">Back</Link>
        </section>
    )

}