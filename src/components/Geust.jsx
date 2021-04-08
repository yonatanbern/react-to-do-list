import React, {useState} from 'react'

const Geust = ({label, setGuests, main_counters, set_counters})=> {
    const [counter, set_counetr] = useState(0);

    const counterAdd = ()=> {
        let c = counter + 1;
        set_counetr(c);
        setGuests(label + ' ' + c)
        
    }

    const counterSub = ()=> {
        let c = counter - 1;
        if(c >= 0) {
            set_counetr(c);
            setGuests(label + ' ' + c)
        } 
        // set_scounters();
    }


    return (
        <div className="guest">
            <label>{label}</label>
            {/* <input type="number" id="quantity" name="quantity" min="1" max="5"></input> */}
            <button onClick={counterSub}>{'-'}</button>
            <div>{counter}</div>
            <button onClick={counterAdd}>{'+'}</button>
        </div>
    )
}

export default Geust
