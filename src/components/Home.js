import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <section className='section home-container'>
      <div className='container'>
        <div className='nasaLogo'></div>
        <h1 className='title is-1'>🛰 🚀 🛸</h1>
        <h2 className='subtitle is-3 has-text-white has-text-weight-bold'>Please choose your interstellar adventure!</h2>
        <div className='columns is-centered is-multiline'>
          <div className='column is-5'>
            <Link className='button is-dark is-large' to='/marsrover'>Mars Rover Images</Link>
          </div>
          <div className='column is-5'>
            <Link className='button is-dark is-large' to='/apodindex'>Astronomy Pictures</Link>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Home
