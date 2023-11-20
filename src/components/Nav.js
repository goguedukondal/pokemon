import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav-container'>
        <Link to='/' style={{textDecoration:'none'}}><p style={{color:"white"}}>Search</p></Link>
        <Link to='/list' style={{textDecoration:'none'}}><p style={{color:"white"}}>List</p></Link>
        <Link to='/bookmark' style={{textDecoration:'none'}}><p style={{color:"white"}}>Bookmark</p></Link>
    </div>
  )
}

export default Nav