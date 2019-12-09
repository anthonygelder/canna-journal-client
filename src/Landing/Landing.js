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
                <p>Click button above to try out Canna Journal.</p>
                <p><b>Not optimized for large screens.</b></p>
                <p>Viewed best on phones.</p>
            </section>
            <section>
                <h2>Keep Track</h2>
                <p>Canna Journal helps you keep track or all the different kinds of cannabis you consume and the effects they had.</p>
            </section>
            <section>
                <h2>Recall</h2>
                <p>Recall past entries to help you make dicisions on future purchases.</p>
            </section>
        </>
    )
}

export default Landing;