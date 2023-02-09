import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
  <div className='container-fluid'>
  < Link to="/Home" className='nav-link' >Company</Link>
    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarNavDropdown'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
         < Link to="/home" className='nav-link' aria-current='page'>Home</Link>

        </li>
        <li className='nav-item'>
        
          < Link to="/policy" className='nav-link' >Policy</Link>
        </li>
        <li className='nav-item'>
        
          < Link to="/auth" className='nav-link' >Login</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar