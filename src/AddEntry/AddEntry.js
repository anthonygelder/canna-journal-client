import React, {Component} from 'react'
import { Link } from 'react-router-dom';


class AddEntry extends Component {
    render() {
        return (
            <form>
                <h3>New Entry</h3>
                <p>Strain</p>
                <input type="text" />
                <p>Farm</p>
                <input type="text" />
                <p>Rating</p>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p>Notes</p>
                <textarea rows="4" cols="20">
                </textarea>
                <div className="buttons">
                    <Link to='/entries'>
                        <button>Add</button>
                    </Link>
                    <Link to='/entries'>
                        <button>Back</button>
                    </Link>
                </div>
            </form>
        );
    }
}

export default AddEntry;