import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Link } from 'react-router-dom'

export default function App() {
    
    return(
      <>
          <Header />
          <section className='main'>
              <div className='main__info'>
                  <h1>The Dark Store... is not a real store</h1>
                  <p>Although it displays albums, prices and shopping carts, 
                  this is not a real shop. It’s just a project that uses this pattern of web-pages.
                  You can, tough, check out my github account and give some comments on the matter!</p>
              </div>

              <div className='main__search'>
                <h1>Navigation</h1>
                <Link to="album/top">Top</Link>
              </div>
          </section>
      </>
    )
}