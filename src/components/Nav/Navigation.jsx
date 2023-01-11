import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navigation.css'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
    // eslint-disable-next-line
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMobileMenu = () => setMenuOpen(false)
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth)
    closeMobileMenu()
  }

  return (
    <Navbar sticky='top' expand='lg' bg='dark' variant='dark'>
      <Container fluid='lg'>
        <Link
          to='/'
          onClick={closeMobileMenu}
          className='d-flex align-items-center'
        >
          <h2
            className='text-danger nav nav-brand'
            style={{ cursor: 'pointer' }}
          >
            IFLIX
          </h2>
        </Link>
        <div className='d-flex justify-content-end align-items-center'>
          {menuOpen ? (
            <FaTimes className='menu-btn' onClick={toggleMenu} />
          ) : (
            <FaBars className='menu-btn' onClick={toggleMenu} />
          )}
          {menuOpen || screenWidth >= 992 ? (
            <Nav className='nav-menu'>
              <NavLink
                to='/'
                className='nav nav-link'
                onClick={closeMobileMenu}
              >
                Trendings
              </NavLink>
              <NavLink
                to='/movies'
                className='nav nav-link'
                onClick={closeMobileMenu}
              >
                Movies
              </NavLink>
              <NavLink
                to='/tvseries'
                className='nav nav-link'
                onClick={closeMobileMenu}
              >
                TV Series
              </NavLink>
            </Nav>
          ) : null}
        </div>
      </Container>
    </Navbar>
  )
}

export default Navigation
