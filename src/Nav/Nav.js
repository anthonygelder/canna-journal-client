import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <header>
            <Link to='/'>
                <h1>Canna Journal</h1>
            </Link>
            <div className="buttons">
                {/* <Link to='/login'>
                    <button>
                        Login
                    </button>
                </Link>
                <Link to='/register'>
                    <button>
                        Register
                    </button>
                </Link> */}
            </div>
        </header>
    )
}

export default Nav;