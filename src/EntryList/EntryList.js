import React, {Component} from 'react'
import { Link } from 'react-router-dom';
// import Entry from '../Entry/Entry'
import Context from '../Context/Context'
const { API_ENDPOINT } = require('../config')

class EntryList extends Component {
    static contextType = Context;
    constructor(props) {
        super(props)
        this.state = {
            currentSort: 'default',
            search: '',
            entries: []
        }
    }
    
    updateSearch(search) {
        this.setState({search: search});
    }

    handleSubmit(e) {
        e.preventDefault();
        const searchTerm = this.state.search.toLowerCase()
        if (searchTerm === ''){
            this.resetSearch()
        } else {
            const searchEntries = this.state.entries.filter(entry => entry.strain.toLowerCase().includes(searchTerm) || entry.farm.toLowerCase().includes(searchTerm))
            this.setState({
                entries: searchEntries
            })
        }
    }

    resetSearch = () => {
        this.setState({
            entries: this.context.entries,
            search: ''
        })
    }

    onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;
		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';
		this.setState({
			currentSort: nextSort
		});
    };
    
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
                this.setState({
                    entries: this.context.entries
                })                
            })
            .catch(error => {
                console.error(error)
        })
    }

    componentDidMount() {
        this.setState({
            entries: this.context.entries
        })
    }

    render() {
        // const entriesList = this.context.entries.map(entry => (
        //     <Entry key={entry.id} entry={entry}/>
        // ))
        const sortTypes = {
            up: {
                class: 'sort-up',
                fn: (a, b) => a.rating - b.rating
            },
            down: {
                class: 'sort-down',
                fn: (a, b) => b.rating - a.rating
            },
            default: {
                class: 'sort',
                fn: (a, b) => a
            }
        };
        const data = this.state.entries
        const { currentSort } = this.state

        let button
        if (this.state.entries.length < this.context.entries.length) {
            button = <button onClick={this.resetSearch}>Clear</button>
        }
        console.log('state', this.state.entries)
        console.log('context', this.context.entries)
        return (
            <>
                <div>
                    <form className="addEntry" onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="search">Search </label>
                            <input value={this.state.search} type="text" name="search" id="search" onChange={e => this.updateSearch(e.target.value)}/>
                            <button type="submit">Search</button> 
                            {button}
                        </div>
                    </form>
                    
                </div>
                <table className='text-left'>
                <thead>
                    <tr>
                        <th>Strain</th>
                        <th>Farm</th>
                        <th>
                            <button onClick={this.onSortChange}>Rating</button>
                        </th>
                        <th><div className="buttons">
                            <Link to='/addNew'>
                                <button>New</button>
                            </Link>
                        </div></th>
                    </tr>
                </thead>
                <tbody>
                    {[...data].sort(sortTypes[currentSort].fn).map(p => (
                        <tr key={p.id}>
                            <td>
                                <Link to={`/entries/${p.id}`} style={{ textDecoration: 'none' }}>
                                    {p.strain}
                                </Link>
                            </td>
                            <td>{p.farm}</td>
                            <td>{p.rating}</td>
                            <td>
                                <div className="buttons">
                                    <button onClick={() => {
                                        this.deleteEntry(
                                            p.id,
                                            this.context.deleteEntry
                                        )}}>
                                        Delete
                                    </button>
                                    <Link to={`/update/${p.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
        // <>
        //     <h1>Entries</h1>
        //     <div className="entry">
        //     <h2>Strain</h2>
        //     <h3>Farm</h3>
        //     <h3>Rating</h3>
        //     <button onClick={e => this.handleSubmit(e)}>
        //     </button>
        //     <div className="buttons">
        //         <Link to='/addNew'>
        //             <button>New</button>
        //         </Link>
        //     </div>
        // </div>
        //     {entriesList}
        // </>

        );
    }
}

export default EntryList;