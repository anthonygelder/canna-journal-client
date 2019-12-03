import React, {Component} from 'react'

class AddEntry extends Component {
    render() {
        return (
        <>
                <h3>New Entry</h3>
            <p>Strain</p>
            <input type="text">
            <p>Farm</p>
            <input type="text">
            <p>Rating</p>
            <select>
                <option value="Great">Great</option>
                <option value="Decent">Decent</option>
                <option value="Not Good">Not Good</option>
            </select>
            <p>Notes</p>
            <textarea rows="4" cols="20">
            </textarea>
            <br>
            <br>
            <button>Add</button>
            <button>Cancel</button>
        </section>
        </>
        );
    }
}

export default AddEntry;