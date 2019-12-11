import React, {Component} from 'react'
import { Link } from 'react-router-dom';
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
        // const updateUrl = '/update/' + entry.id 
        return (
            <tr>
                <td>
                    <Link to={idUrl}>
                        <h2>{entry.strain}</h2>
                    </Link>
                </td>
                <td>{entry.farm}</td>
                <td>{entry.rating}</td>
                <td>
                    <button onClick={() => {
                        this.deleteEntry(
                            entry.id,
                            this.context.deleteEntry
                        )
                    }}>
                        Delete
                    </button>
                </td>
            </tr>
            // <div className="entry">
            //     <Link to={idUrl}>
            //         <h2>{entry.strain}</h2>
            //     </Link>
            //     <h3>{entry.farm}</h3>
            //     <h3>{entry.rating}</h3>
            //     <div className="buttons">
            //         <button onClick={() => {
            //             this.deleteEntry(
            //                 entry.id,
            //                 this.context.deleteEntry
            //             )
            //         }}>
            //             Delete
            //         </button>
            //         <Link to={updateUrl}>
            //             <button>Edit</button>
            //         </Link>
            //     </div>
            // </div>

        );
    }
}

export default Entry;