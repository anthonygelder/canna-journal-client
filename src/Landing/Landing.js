import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

function Landing() {
    return (
        <div class="sections">
            <section>
                <h2>Canna Journal</h2>
                <p>Welcome to your personal cannabis journal.</p>
                <Link to='/entries'>
                    <button>
                        View Entries
                    </button>
                </Link>
            </section>
            <section>
                <h2>Keep Track</h2>
                <p>Canna Journal helps you keep track or all the different kinds of cannabis you consume and the effects they had.</p>
            </section>
            <section>
                <h2>Recall</h2>
                <p>Recall past entries to help you make decisions on future purchases.</p>
            </section>
        </div>
    )
}

export default Landing;