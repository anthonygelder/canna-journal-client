import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context'
import './EntryDetail.css'
const { API_ENDPOINT } = require('../config')

class EntryDetail extends Component {
    static contextType = Context;

    // delete request to api
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
        const defaultEntry = {id:1,strain:'',farm:'',rating:1}
        const urlId = parseInt(this.props.routeProps.match.params.entry_id)
        const entry = this.context.entries.length === 0 ? defaultEntry : this.context.entries.filter(entry => ( entry.id === urlId )).pop()
        const updateUrl = '/update/' + entry.id 
        return (
            <div className="sections">
                <h2>Entry</h2>
                <table className="detail-table">
                    <tbody>
                        <tr>
                            <th align="right">Strain:</th>
                            <td align="left">{ entry.strain }</td>
                        </tr>
                        <tr>
                            <th align="right">Farm:</th>
                            <td align="left">{ entry.farm }</td>
                        </tr>
                        <tr>
                            <th align="right">Rating:</th>
                            <td align="left">{ entry.rating }</td>
                        </tr>
                        <tr>
                            <th align="right">Note:</th>
                            <td align="left">{ entry.note }</td>
                        </tr>
                        {/* <tr>
                            <th>Entry Date:</th>
                            <td>{ entry.date_created }</td>
                        </tr> */}
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