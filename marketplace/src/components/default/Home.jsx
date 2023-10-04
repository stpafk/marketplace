import { Link } from "react-router-dom" 
import './default.css'

export default function Home() {

    return(
        <section className='main'>
            <div className='main__info'>
                  <h1>The Dark Store... is not a real store</h1>
                  <p>Although it displays albums, prices and shopping carts, 
                  this is not a real shop. It’s just a project that uses this pattern of web-pages.
                  You can, tough, check out my github account and give some comments on the matter!</p>
            </div>

            <div className='genre__search'>
              <h1>Search by Genre</h1>
              <Link to="album/heavy">Heavy Metal</Link>
              <Link to="album/rock">Rock</Link>
              <Link to="album/hardcore">Hardcore</Link>
              <Link to="album/punk">Punk Rock</Link>
              <Link to="album/death">Death Metal</Link>
              <Link to="album/black">Black Metal</Link>
              <Link to="album/thrash">Thrash Metal</Link>
              
            </div>
          </section>
    )
}