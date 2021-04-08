import React, {useState} from 'react'

const Geust = ({label, setGuests, main_counters, set_counters})=> {
    const [counter, set_counetr] = useState(0);


    const updateCountersPlusBoth = (key1, key2)=> {
        
        console.log('up: ',key1,key2);
        let newCountersObj = {...main_counters};
        newCountersObj[key1] += 1;
        newCountersObj[key2] += 1;
        console.log('up newCounters: ', newCountersObj);
        set_counters(newCountersObj)
    }

    const updateCountersPlus = (key)=> {
        
        console.log('up: ',key);
        let newCountersObj = {...main_counters};
        newCountersObj[key] += 1;
        console.log('up newCounters: ', newCountersObj);
        set_counters(newCountersObj)
    }

    const updateCountersMinus = (key)=> {
        
        let newCountersObj = {...main_counters};
        newCountersObj[key] -= 1;
        set_counters(newCountersObj)
    }

    const updateCounters = (label, operator)=> {

        switch(label) {
            case "Adults":
                console.log('adults case');
                operator === '+' ? updateCountersPlus('adults'): operator === '-'? 
                updateCountersMinus('adults'): console.log('none switch');
                break;
            case "Children":
                console.log('children case');
                if(operator === '+' ){
                    if(main_counters.adults === 0 && main_counters.children === 0){
                        console.log('both 0!');
                        updateCountersPlusBoth('adults', 'children')
                        // updateCountersPlus('adults');
                        // updateCountersPlus('children');
                    } else if(main_counters.adults > 0 ){
                        updateCountersPlus('children');
                    }
                }
                break;
            case "Infants":
                console.log('infants case');
                // operator === '+' ? updateCountersPlus('infants'): operator === '-'? 
                // updateCountersMinus('infants'): console.log('none switch');
                if(operator === '+') {
                    if(main_counters.adults === 0 && main_counters.infants === 0){
                        console.log('both 0!');
                        updateCountersPlusBoth('adults', 'infants')
                        // updateCountersPlus('adults');
                        // updateCountersPlus('infants');
                    } else if(main_counters.adults > 0 ){
                        updateCountersPlus('infants');
                    }
                }
                break;
                
            default:
                console.log('none case');
        }

    }

    const counterAdd = ()=> {
        let c = counter + 1;
        set_counetr(c);
        setGuests(label + ' ' + c);
        updateCounters(label, '+');
    }

    const counterSub = ()=> {
        let c = counter - 1;
        if(c >= 0) {
            set_counetr(c);
            setGuests(label + ' ' + c)
            updateCounters(label, '-');
        } 
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
