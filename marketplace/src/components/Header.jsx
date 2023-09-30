import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

    const [value, setValue] = useState("");
    const navigate = useNavigate()

    function handleSearch(event) {
        event.preventDefault();
        if (value) {
            navigate("/search", {type: value, replace: true })
        };
    };
    
    return(
        <section className="header">
              <img src="" alt="A" />
              <div className="header__right">
                  <h1>The Dark Store</h1>
                  <p>Your metal albums marketplace.</p>
              </div>

              <form className="header__search" onSubmit={handleSearch}>
                <label htmlFor="search">Search Album/Artist</label>
                <input type="text" placeholder="Search" onChange={(e) => setValue(e.target.value)}/>
                <button type="submit">submit</button>
              </form>

              <div className="header__shop">
                <span className='add'>
                    <Link to="">
                        <i className="bi bi-plus-circle"></i>
                    </Link>
                </span>
                <span className='kart'>
                    <Link to="cart">
                        <i className="bi bi-cart"></i>
                    </Link>
                </span>
              </div>
          </section>
    );
};