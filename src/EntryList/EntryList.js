import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Entry from '../Entry/Entry'
import entries from '../store'

class EntryList extends Component {
    render() {
        const entriesList = entries.map(entry => (
            <Entry key={entry.id} entry={entry}/>
        ))
        return (
        <>
            <h1>Entries</h1>
            <div className="entry">
            <h2>Strain</h2>
            <h3>Farm</h3>
            <h3>Rating</h3>
            <div className="buttons">
                <Link to='/addNew'>
                    <button>New</button>
                </Link>
            </div>
        </div>
            {entriesList}
        </>
        );
    }
}

export default EntryList;