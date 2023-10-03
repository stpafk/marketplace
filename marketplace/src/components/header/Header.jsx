import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css'
import hand from '../../assets/hand.svg'

export default function Header() {

    const [value, setValue] = useState("");
    const navigate = useNavigate()

    function handleSearch(event) {
        event.preventDefault();
        if (value) {
            navigate("/search", {state: value, replace: true })
        };
    };
    
    return(
        <section className="header">
              <img src={hand} alt="rock symbol" />
              <div className="header__left">
                  <h1>The Dark Store</h1>
                  <p>Your metal albums marketplace.</p>
              </div>

              <form className="header__search" onSubmit={handleSearch}>
                <label htmlFor="search">Search Album/Artist</label>
                <span>
                    <input type="text" placeholder="" onChange={(e) => setValue(e.target.value)}/>
                    <button type="submit"><i class="bi bi-search"></i></button>
                </span>
              </form>
              <div className="header__shop">
                {/*
                <span className='add'>
                    <Link to="">
                        <i className="bi bi-plus-circle"></i>
                    </Link>
                </span>*/}
                <span className='cart'>
                    <Link to="/cart">
                        <i className="bi bi-cart"></i>
                    </Link>
                </span>
              </div>
          </section>
    );
};