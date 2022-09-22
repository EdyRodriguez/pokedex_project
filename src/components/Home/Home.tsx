import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

function Home () {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/pokemon/1')
  }, [])
  return (
        <>
            <div className="Home">
                <h1 className="title">Hello!</h1>
                <p className='home-para'>
                    Welcome to my Pokedex! Here you can find all the information you need about your favorite Pokemon.
                </p>
                <p> Press the button to open the pokedex!</p>
                <Link className='Button' to={{ pathname: '/pokemon/1' }}> Open Pokedex </Link>

            </div>
        </>
  )
}

export default Home
