import React from 'react'

const Filterbar = ({originList})=> {

    const numOfActiveTasks = (originList)=> {
        let num = 0;
        for (const task of originList) {
            if(!task.isCompleted){
                num++;
            }
        }
        return num;
    }

    const changeDisplayStatus = (status)=> {
        console.log('inside filterbar:', status);
        

    }

    return (
        <div>
            Filterbar:
            <button onClick={()=>changeDisplayStatus('all')}>All</button>
            <button onClick={()=>changeDisplayStatus('active')}>Active</button>
            <button onClick={()=>changeDisplayStatus('completed')}>Completed</button>
            <h5>{numOfActiveTasks(originList)} items left</h5>

        </div>
    )
}

export default Filterbar
