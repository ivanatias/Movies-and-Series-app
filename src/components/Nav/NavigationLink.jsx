import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationLink = ({ children, to, onClick }) => (
  <NavLink to={to} onClick={onClick} className='nav nav-link'>
    {children}
  </NavLink>
)

export default NavigationLink
