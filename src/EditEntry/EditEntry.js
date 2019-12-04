import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class EditEntry extends Component {
    render() {
        return (
            <form>
                <h3>Update Entry</h3>
                <p>Strain</p>
                <input type="text" value="Strain"/>
                <p>Farm</p>
                <input type="text" value="Farm"/>
                <p>Rating</p>
                <select value="3">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p>Notes</p>
                <textarea rows="4" cols="20" value="Guatemalan purple haze grown outdoors by ganja shaman.">
                </textarea>
                <div className="buttons">
                    <Link to='/entries'>
                        <button>Update</button>
                    </Link>
                    <Link to='/entries'>
                        <button>Back</button>
                    </Link>
                </div>
            </form>
        );
    }
}

export default EditEntry;