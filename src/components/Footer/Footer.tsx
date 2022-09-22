import React from 'react'
import { TbCopyrightOff } from 'react-icons/tb'
import './Footer.css'
function Footer () {
  return (
    <>
      <footer className="Footer">
        <div className="footer-content">
          <p className='footer-paragraph'> This app uses the: <a href="https://pokeapi.co/">PokeApi</a> </p>
          <p className='footer-paragraph'> Made by: <a href="https://edyrodriguez.dev">@EdyRodriguez</a> </p>
        </div>
        <div className='no-copy'>
          <TbCopyrightOff className='no-copy-icon' />
          <p>COPYRIGHT FREE! </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
