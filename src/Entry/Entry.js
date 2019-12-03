import React, {Component} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Entry.css'

class Entry extends Component {
    render() {
        const { entry } = this.props
        const idUrl = '/entries/' + entry.id 
        return (
            // <Router>
                <div className="entry">
                    <h2>{entry.strain}</h2>
                    <h3>{entry.farm}</h3>
                    <h3>{entry.rating}</h3>
                    <div className="buttons">
                        <button>Delete</button>
                        <Link to='/update'>
                            <button>Edit</button>
                        </Link>
                        <Link to={idUrl}>
                            <button>Details</button>
                        </Link>
                    </div>
                </div>
            // </Router>
        );
    }
}

export default Entry;