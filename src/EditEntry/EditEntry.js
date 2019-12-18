import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Context from '../Context/Context'

const { API_ENDPOINT } = require('../config')

class EditEntry extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            strain: '',
            farm: '',
            rating: '1',
            note: '',
            id: ''
        }
    }
    
    // filtering entries and setting state
    componentDidMount() {
        const defaultEntry = {id:1,strain:'',farm:'',rating:1}
        const urlId = parseInt(this.props.routeProps.match.params.entry_id)
        const entry = this.context.entries.length === 0 ? defaultEntry : this.context.entries.filter(entry => ( entry.id === urlId )).pop()
        this.setState({
            strain: entry.strain,
            farm: entry.farm,
            rating: entry.rating,
            note: entry.note,
            id: entry.id
        })
    }

    // controlled component state updates 
    updateStrain(strain) {
        this.setState({strain: strain});
    }
    updateFarm(farm) {
        this.setState({farm: farm});
    }
    updateRating(rating) {
        this.setState({rating: rating});
    }
    updateNote(note) {
        this.setState({note: note});
    }
    
    // handling form submit
    handleSubmit(e) {
        e.preventDefault();
        const { id, strain, farm, rating, note } = this.state
        const editedBookmark = { id, strain, farm, rating, note }
        this.editEntry(editedBookmark, this.context.editEntry)
    }

    // patch request to api
    editEntry(entry, cb) {
        fetch(`${API_ENDPOINT}${this.state.id}`, {
            method: 'PATCH',
            body: JSON.stringify(entry),
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
            .then(() => {
                this.props.routeProps.history.push('/entries')
                cb(entry)
            })
            .catch(error => {
                console.error(error)
        })
    }

    render() {
        return (
            <div className="sections">
                <form className="updateEntry" onSubmit={e => this.handleSubmit(e)}>
                <h3>Edit Entry</h3>
                <div className="form-group">
                    <label htmlFor="strain">Strain </label>
                    <input required type="text" name="strain" id="strain" value={ this.state.strain } onChange={e => this.updateStrain(e.target.value)}/>
                    <label htmlFor="farm">Farm </label>
                    <input required type="text" name="farm" id="farm" value={ this.state.farm } onChange={e => this.updateFarm(e.target.value)}/>
                    <label htmlFor="rating">Rating </label>
                    <select name="rating" id="rating" value={ this.state.rating } onChange={e => this.updateRating(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label htmlFor="note">Note </label>
                    <textarea rows="4" cols="20" name="note" id="note" value={ this.state.note } onChange={e => this.updateNote(e.target.value)}>
                    </textarea>
                    <div className="buttons">
                        <button type="submit">
                            Update
                        </button>
                        <Link to='/entries'>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

export default EditEntry;