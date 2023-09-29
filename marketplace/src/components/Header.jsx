
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
                <span className='add'>ADD</span>
                <span className='kart'>KART</span>
              </div>
          </section>
    )

}