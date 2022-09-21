import React from 'react'
import AutoComplete from '../AutoComplete/AutoComplete'
import './Navbar.css'
import LogoEdy from '../../assets/images/LogoEdy.png'
import { TbPokeball }from 'react-icons/Tb'

const Navbar = () => (
  <div className='Navbar'>
    <div className='Navbar-logo'>
      <TbPokeball className='logo-pokeball'/>
      <img className='logo-edy' src={LogoEdy}/>
    </div>
      <AutoComplete />
  </div>
)

export default Navbar
