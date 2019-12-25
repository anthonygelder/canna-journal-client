import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service'
import './Nav.css'

export default class Header extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }
    
    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
            <Link
                onClick={this.handleLogoutClick}
                to='/'>
                Logout
            </Link>
            </div>
        )
    }
    
    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
            <Link
                to='/login'>
                Log in
            </Link>
            <Link
                to='/register'>
                Register
            </Link>
            </div>
        )
    }

    render() {
        return <>
            <header>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1>Canna Journal</h1>
                </Link>
                <div className="buttons">
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </div>
            </header>
        </>
    }
}