import React, {useState} from 'react'
import Geust from './Geust'

const Dropdown = ({title, list})=> {

    const [is_drop_open, set_drop_open] = useState(false);
    const [guests_title, set_guests_title] = useState(title);
    // console.log('in drop',list);



    const handleClickOpen = ()=>{
       is_drop_open ? set_drop_open(false) : set_drop_open(true);
    }

    return (
        <div className="dropdown" >
            <div className="dropdown-top">
                <label>{guests_title}</label>
                <button onClick={handleClickOpen}>{'>'}</button>
            </div>
            {is_drop_open? <ul className="dropdown-list">
                {list?.map(itm=> <li>{itm}</li>)}
                <li>
                    <Geust label="Adults" setGuests={set_guests_title}/>
                </li>
                <li>
                    <Geust label="Children" setGuests={set_guests_title}/>
                </li>
                <li>
                    <Geust label="Infants" setGuests={set_guests_title}/>
                </li>
            </ul>: undefined}
        </div>
    )
}

export default Dropdown