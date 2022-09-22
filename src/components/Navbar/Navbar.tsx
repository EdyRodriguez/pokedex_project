import React from 'react'
import AutoComplete from '../AutoComplete/AutoComplete'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
// @ts-expect-error
import LogoEdy from '../../assets/images/LogoEdy.png'
import { TbPokeball } from 'react-icons/Tb'

function Navbar () {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    console.log('Logo Clicked')
    navigate('/')
  }
  return (
    <>
    <div className='Navbar' >
      <div className='Navbar-logo' onClick={() => handleLogoClick() }>
        <TbPokeball className='logo-pokeball'/>
        <img className='logo-edy' src={LogoEdy}/>
      </div>
      <div className='Navbar-search'>
        <AutoComplete />
      </div>
    </div>
    </>
  )
} 


export default Navbar
