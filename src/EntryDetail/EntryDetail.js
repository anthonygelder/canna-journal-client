import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import entries from '../store'



class EntryDetail extends Component {
    render() {
        const urlId = parseInt(this.props.entryId.match.params.entry_id)
        const entry = entries.filter(entry => ( entry.id === urlId )).pop()
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
                    <Link to='/update'>
                            <button>Edit</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default EntryDetail;