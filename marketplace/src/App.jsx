import { useState } from 'react'

import './App.css'

export default function App() {
    
    return(
      <>
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
          </section>
      </>
    )
}