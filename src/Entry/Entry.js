import React, {Component} from 'react'
// import { Link } from 'react-router-dom';
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
        // const { entry } = this.props
        // const idUrl = '/entries/' + entry.id 
        // const updateUrl = '/update/' + entry.id 
        return (
            <div>
                
            </div>
        );
    }
}

export default Entry;