import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Context from '../Context/Context'
const { API_ENDPOINT } = require('../config')

class AddEntry extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            strain: '',
            farm: '',
            rating: '1',
            note: ''
        }
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
        const entry = {
            strain: this.state.strain,
            farm: this.state.farm,
            rating: this.state.rating,
            note: this.state.note
        }
        this.addEntry(entry, this.context.addEntry)
    }

    // post request to api
    addEntry(entry, cb) {
        fetch(`${API_ENDPOINT}`, {
            method: 'POST',
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
                return res.json()
            })
            .then(data => {
                this.props.routeProps.history.push('/entries')
                cb(data)
            })
            .catch(error => {
                console.error(error)
        })
    }

    render() {
        return (
            <div className="sections">
                <form className="addEntry" onSubmit={e => this.handleSubmit(e)}>
                    <h3>New Entry</h3>
                    <div className="form-group">
                        <label htmlFor="strain">Strain</label>
                        <input required type="text" name="strain" id="strain" onChange={e => this.updateStrain(e.target.value)}/>
                        <label htmlFor="farm">Farm</label>
                        <input required type="text" name="farm" id="farm" onChange={e => this.updateFarm(e.target.value)}/>
                        <label htmlFor="rating">Rating</label>
                        <select name="rating" id="rating" onChange={e => this.updateRating(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <label htmlFor="note">Note</label>
                        <textarea rows="4" cols="20" name="note" id="note" onChange={e => this.updateNote(e.target.value)}>
                        </textarea>
                        <div className="buttons">
                            <button type="submit">
                                Add
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

export default AddEntry;