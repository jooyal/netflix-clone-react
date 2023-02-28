import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <img className='navbar-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        
          <p style={{marginLeft : '150px'}} className='navbar-links'>HOME</p>
          <p className='navbar-links'>TV&nbsp;SHOWS</p>
          <p className='navbar-links'>MOVIES</p>
          {/* <p className='navbar-links'>RECENTLY ADDED</p>
          <p className='navbar-links'>MY LIST</p> */}

          <p className='navbar-links'>KIDS</p>
          <p style={{marginRight : '150px'}} className='navbar-links'>DVD</p>

        <img className='navbar-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Nav Avatar" />
    </div>
  )
}

// export {NavBar}
export default NavBar