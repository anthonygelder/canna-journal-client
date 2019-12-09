import React, {Component} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Context from '../Context/Context'
import './Entry.css'
const { API_ENDPOINT } = require('../config')

class Entry extends Component {
    static contextType = Context;

    deleteEntry(entryId, cb) {
        fetch(`${API_ENDPOINT}/${entryId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            })
            .then(data => {
                cb(entryId)
            })
            .catch(error => {
                console.error(error)
        })
    }

    render() {
        const { entry } = this.props
        const idUrl = '/entries/' + entry.id 
        const updateUrl = '/update/' + entry.id 
        return (
            <div className="entry">
                <h2>{entry.strain}</h2>
                <h3>{entry.farm}</h3>
                <h3>{entry.rating}</h3>
                <div className="buttons">
                    <button onClick={() => {
                        this.deleteEntry(
                            entry.id,
                            this.context.deleteEntry
                        )
                    }}>
                        Delete
                    </button>
                    <Link to={updateUrl}>
                        <button>Edit</button>
                    </Link>
                    <Link to={idUrl}>
                        <button>Details</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Entry;