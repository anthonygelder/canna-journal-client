import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Context from '../Context/Context'
import { FaSortAmountUp, FaSortAmountDown, FaAlignJustify, FaPlus } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import './EntryList.css'
const { API_ENDPOINT } = require('../config')

class EntryList extends Component {
    static contextType = Context;
    constructor(props) {
        super(props)
        this.state = {
            currentSort: 'default',
            search: '',
            searched: false,
            entries: [] || this.context.entries
        }
    }

    // controlled search form state update
    updateSearch(search) {
        this.setState({search: search});
    }

    // handling search submit
    handleSubmit(e) {
        e.preventDefault();
        const searchTerm = this.state.search.toLowerCase()
        if (searchTerm === ''){
            this.resetSearch()
        } else {
            const searchEntries = this.context.entries.filter(entry => entry.strain.toLowerCase().includes(searchTerm) || entry.farm.toLowerCase().includes(searchTerm))
            this.setState({
                entries: searchEntries,
                searched: true
            })
        }
    }

    // setting state to reset search
    resetSearch = () => {
        this.setState({
            entries: this.context.entries,
            search: '',
            searched: false
        })
    }

    // changing sort
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

    // delete request to api
    deleteEntry(entryId, cb) {
        // window.confirm("sometext");
        fetch(`${API_ENDPOINT}${entryId}`, {
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

    //setting state to entries from context
    componentDidMount() {
        this.setState({
            entries: this.context.entries
        })
    }

    render() {
        const sortTypes = {
            up: {
                class: <FaSortAmountDown className="sort" />,
                fn: (a, b) => a.rating - b.rating
            },
            down: {
                class: <FaSortAmountUp className="sort" />,
                fn: (a, b) => b.rating - a.rating
            },
            default: {
                class: <FaAlignJustify className="sort" />,
                fn: (a, b) => a
            }
        };
        const data = this.state.entries.length === 0 ? this.context.entries : this.state.entries
        const { currentSort } = this.state
        const clearButton = this.state.searched ? <IoMdClose className="clear" onClick={this.resetSearch} /> : <></>
        return (
            <div className="sections">
                <h2>Entries</h2>
                <div>
                    <form className="searchEntry" onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="search">
                                Search
                            </label>
                            <input value={this.state.search} type="text" name="search" id="search" onChange={e => this.updateSearch(e.target.value)}/>
                            <button type="submit">Go</button> 
                            {clearButton}
                        </div>
                    </form>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Strain</th>
                            <th>Farm</th>
                            <th>
                                <p onClick={this.onSortChange} className="rating">Rating {sortTypes[currentSort].class}</p>
                            </th>
                            <th><div className="buttons">
                                <Link to='/addNew'>
                                    <button>New <FaPlus className="sort" /></button>
                                </Link>
                            </div></th>
                        </tr>
                    </thead>
                    <tbody>
                    {[...data].sort(sortTypes[currentSort].fn).map(p => (
                        <tr key={p.id} className="entry" >
                            <td>
                                <Link to={`/entries/${p.id}`} className="strain" style={{ textDecoration: 'none' }}>
                                    {p.strain}
                                </Link>
                            </td>
                            <td>{p.farm}</td>
                            <td>{p.rating}</td>
                            <td>
                                <div className="buttons">
                                    <Link to={`/update/${p.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <IoMdClose className="clear" onClick={() => {
                                        this.deleteEntry(
                                            p.id,
                                            this.context.deleteEntry
                                        )}}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    }
}

export default EntryList;

