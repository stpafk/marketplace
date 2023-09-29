import { useState } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";

export default function Album() {
    
    const search = useParams();

    return(
        <>
            <Header />
            {
                
            }
            <Link to="/">Back</Link>
        </>
    )

}