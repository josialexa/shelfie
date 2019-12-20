import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../shelfie_icon.png'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt='Shelfie Logo' />
                    <span>SHELFIE</span>
                </div>
                <div className='nav-buttons'>
                    <Link to='/'><button>Dashboard</button></Link>
                    <Link to='/add'><button>Add Inventory</button></Link>
                </div>
            </div>
        )
    }
}
