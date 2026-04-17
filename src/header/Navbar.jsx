import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        <div className='container-fluid'>
            <div className='headerItems'>
            <div className='row'>
                <div className='Logo'>
                    <div className='col-lg-2'>
                        <img src={logo} alt='logo'/>
                    </div>
                </div>
                <div className='navbarLists'>
                <div className='col-lg-6'>
                <ul>
                <li className='listItems'><Link className='navLink' to="/">Home</Link></li>
                <li className='listItems'><Link className='navLink dropdown' to='/Pages'>Pages</Link>
                        <Link className="navlink dropdown-toggle" to="/" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Pages
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Destination Details</a></li>
                            <li><a className="dropdown-item" href="#">Elements</a></li>
                        </ul>
                    </li>
                <li className='listItems'><Link className='navLink' to='/About'>About</Link></li>
                <li className='listItems'><Link className='navLink' to="/Gallery">Gallery</Link></li>
                <li className='listItems'><Link className='navLink' to='/Blog'>Blog</Link></li>
                <li className='listItems'><Link className='navLink' to='/Contact'>Contact</Link></li>
                </ul>
                </div>
                </div>
                <div className='searchArea'>
                    <div className='col-lg-2'>
                        <form className="search-area d-flex">
                            <input className=" form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                
            </div>

        </div>
        </div>
    </div>
  )
}

export default Navbar