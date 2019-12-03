import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

function Landing() {
    return (
        <>
            <section>
                <h1>Canna Journal</h1>
                <Link to='/entries'>
                    <button>
                        View Entires
                    </button>
                </Link>
            </section>
            <section>
                <h2>Keep Track</h2>
            </section>
            <section>
                <h2>Recall</h2>
            </section>
        </>
    )
}

export default Landing;