import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context'
const { API_ENDPOINT } = require('../config')

class EntryDetail extends Component {
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
                this.props.routeProps.history.push('/entries')
            })
            .catch(error => {
                console.error(error)
        })
    }

    render() {
        console.log(this.context.entries, "context")
        const defaultEntry = {id:1,strain:'',farm:'',rating:1}
        const urlId = parseInt(this.props.routeProps.match.params.entry_id)
        const entry = this.context.entries.length === 0 ? defaultEntry : this.context.entries.filter(entry => ( entry.id === urlId )).pop()
        const updateUrl = '/update/' + entry.id 
        return (
            <div>
                {/* <h2>Strain: { entry.strain }</h2>
                <h2>Farm: { entry.farm }</h2>
                <h2>Rating: { entry.rating }</h2>
                <h2>Date: { entry.date_created }</h2>
                <h4>Note: { entry.note }</h4> */}
                <table align="right">
                    <tbody>
                        <tr>
                            <th>Strain:</th>
                            <td>{ entry.strain }</td>
                        </tr>
                        <tr>
                            <th>Farm:</th>
                            <td>{ entry.farm }</td>
                        </tr>
                        <tr>
                            <th>Rating:</th>
                            <td>{ entry.rating }</td>
                        </tr>
                        <tr>
                            <th>Note:</th>
                            <td>{ entry.note }</td>
                        </tr>
                        <tr>
                            <th>Entry Date:</th>
                            <td>{ entry.date_created }</td>
                        </tr>
                    </tbody>
                </table>

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