import React, {useState} from 'react'
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Dropdown from './Dropdown'

const Form = ()=> {

    const [user_input, set_user_input] = useState("");

    const handleChange = (e)=> {
        console.log('change!' ,e.target.value );
        set_user_input(e.target.value);
        // console.log(user_input);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('submit', user_input);
        user_input.length > 0 ? console.log('add to list->', user_input) : console.log('nothing');
        set_user_input("");
    }
    return (
        <div>
            <form className="main-form" onSubmit={handleSubmit}>
                <select className="input-form" value={user_input} onChange={handleChange}>
                    <option value="" disabled selected hidden>Please Choose..</option>
                    <option></option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                </select>
                
                <button type="submit" className="btn-submit">Search</button>
            </form>
            <Dropdown title="Guests.." />
        </div>
    )
}

export default Form
