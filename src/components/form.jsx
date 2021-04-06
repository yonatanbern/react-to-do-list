import React, {useState} from 'react'

const Form = ({addTodo})=> {

    const [user_input, set_user_input] = useState("");

    const handleChange = (e)=> {
        set_user_input(e.target.value);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('submit', user_input);
        user_input.length > 0 ? console.log('add to list->', addTodo(user_input)) : console.log('nothing');
        set_user_input("");
    }
    return (
        <div className="container-form">
            <form className="main-form" onSubmit={handleSubmit}>
                <input type="text" value={user_input} placeholder="enter new task.." onChange={handleChange}/>
                <button type="submit" className="btn-submit">Add</button>
            </form>
        </div>
    )
}

export default Form
