import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

function Landing() {
    return (
        <div className="sections">
            <section className="section1">
                <h2>Canna Journal</h2>
                <p>Welcome to your personal cannabis journal.</p>
                <Link to='/entries'>
                    <button>
                        View Entries
                    </button>
                </Link>
            </section>
            <section className='section2'>
                <h2>Keep Track</h2>
                <p>Canna Journal helps you keep track of all of the different kinds of cannabis you consume and the experience you had with it.</p>
            </section>
            <section className="section1">
                <h2>Recall</h2>
                <p>You can easily recall past entries to help you make decisions about future purchases.</p>
            </section>
        </div>
    )
}

export default Landing;