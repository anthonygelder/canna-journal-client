import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context'
const { DB_URL } = require('../config')

class EntryDetail extends Component {
    static contextType = Context;
    static defaultProps = {
        entry: {}
      };

    deleteEntry(entryId, cb) {
        fetch(`${DB_URL}/${entryId}`, {
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
                this.props.routeProps.history.push('/entries')
                cb(entryId)
            })
            .catch(error => {
                console.error(error)
        })
    }

    render() {
        const urlId = parseInt(this.props.routeProps.match.params.entry_id)
        const entry = this.context.entries.filter(entry => ( entry.id === urlId )).pop()
        const updateUrl = '/update/' + entry.id 
        return (
            <div>
                <h1>{ entry.strain }</h1>
                <h2>{ entry.farm }</h2>
                <h2>{ entry.rating }</h2>
                <h4>{ entry.note }</h4>
                <div className="buttons">
                    <Link to='/entries'>
                        <button>Back</button>
                    </Link>
                    <Link to={updateUrl}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => {
                        this.deleteEntry(
                            entry.id,
                            this.context.deleteEntry
                        )
                    }}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default EntryDetail;