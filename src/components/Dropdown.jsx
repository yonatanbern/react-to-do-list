import React, {useState} from 'react'
import Geust from './Geust'

const Dropdown = ({title, list})=> {

    const [is_drop_open, set_drop_open] = useState(false);
    // const [guests_title, set_guests_title] = useState(title);
    const [counters, set_scounters] = useState({adults: 0, children:0, infants:0});

    const getTitleGuests = ()=> {

        console.log('in dropsown:',counters);
        let num_of_guests = counters.adults + counters.children;
        let num_of_infants = counters.infants;

        if (num_of_guests > 0 && num_of_infants >0){
            return `Guests ${num_of_guests}, Infants ${num_of_infants}`;
        } else if (num_of_guests > 0){
            return `Guests ${num_of_guests}`;
        } else if(num_of_infants > 0){
            return `Infants ${num_of_infants}`;
        } else {
            return 'Guests..'
        }
    }

    const handleClickOpen = ()=>{
       is_drop_open ? set_drop_open(false) : set_drop_open(true);
    }

    return (
        <div className="dropdown" >
            {/* {console.log('new render->', counters)} */}
            <div className="dropdown-top">
                <label>{getTitleGuests()}</label>
                <button onClick={handleClickOpen}>{'>'}</button>
            </div>
            {is_drop_open? <div className="dropdown-list">
                {list?.map(itm=> <li>{itm}</li>)}
            
                <Geust className="guest-tag" label="Adults"  set_counters={set_scounters} main_counters={counters}/>
                <Geust className="guest-tag" label="Children" set_counters={set_scounters} main_counters={counters}/>
                <Geust className="guest-tag" label="Infants" set_counters={set_scounters} main_counters={counters}/>
                
            </div>: undefined}
        </div>
    )
}

export default Dropdown
