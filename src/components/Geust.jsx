import React from 'react'

const Geust = ({label, main_counters, set_counters})=> {
    // const [counter, set_counetr] = useState(0);
    // console.log('render in Guest !!!');
    const currCounter = main_counters[label.toLowerCase()];


    const updateCountersPlusBoth = (key1, key2)=> {
        
        console.log('up: ',key1,key2);
        let newCountersObj = {...main_counters};
        newCountersObj[key1] += 1;
        newCountersObj[key2] += 1;
        set_counters(newCountersObj)
    }

    const updateCountersPlus = (key)=> {
        
        let newCountersObj = {...main_counters};
        newCountersObj[key] += 1;
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
                // console.log('adults case');
                operator === '+' ? updateCountersPlus('adults'): operator === '-'? 
                updateCountersMinus('adults'): console.log('none switch-adults');
                break;

            case "Children":
                // console.log('children case');
                if(operator === '+' ){
                    if(main_counters.adults === 0 && main_counters.children === 0){
                        updateCountersPlusBoth('adults', 'children')
                    } else if(main_counters.adults > 0 ){
                        updateCountersPlus('children');
                    }
                } else if(operator === '-') {
                    updateCountersMinus('children');
                }
                break;

            case "Infants":
                // console.log('infants case');
                if(operator === '+') {
                    if(main_counters.adults === 0 && main_counters.infants === 0){
                        updateCountersPlusBoth('adults', 'infants')
                    } else if(main_counters.adults > 0 ){
                        updateCountersPlus('infants');
                    }
                } else if(operator === '-') {
                    updateCountersMinus('infants');
                }
                break;
                
            default:
                console.log('none case');
        }

    }

    const counterAdd = ()=> {
        updateCounters(label, '+');
    }

    const counterSub = ()=> {
        let c = currCounter - 1;
        if(c >= 0) {
            updateCounters(label, '-');
        } 
    }


    return (
        <div className="guest">
            <label>{label}</label>
            <div className="counters">
                <button onClick={counterSub}>{'-'}</button>
                <div>{currCounter}</div>
                <button onClick={counterAdd}>{'+'}</button>
            </div>
        </div>
    )
}

export default Geust
