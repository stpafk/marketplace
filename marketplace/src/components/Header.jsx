import { Link } from "react-router-dom";

export default function Header() {

    return(
        <section className="header">
              <img src="" alt="A" />
              <div className="header__right">
                  <h1>The Dark Store</h1>
                  <p>Your metal albums marketplace.</p>
              </div>

              <div className="header__search">
                <label htmlFor="search">Search Album</label>
                <input type="text" />
              </div>

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
    )

}