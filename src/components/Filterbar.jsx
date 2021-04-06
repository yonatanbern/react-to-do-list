import React from 'react'

const Filterbar = ({originList, setDisplayFilter, filterOptions, removeCompletedTodos })=> {

    const numOfActiveTasks = (originList)=> {
        let num = 0;
        for (const task of originList) {
            if(!task.isCompleted){
                num++;
            }
        }
        return num;
    }

    return (
        <div>
            Filterbar:
            <button onClick={()=>setDisplayFilter(filterOptions.ALL)}>All</button>
            <button onClick={()=>setDisplayFilter(filterOptions.UNCOMPLETED)}>Active</button>
            <button onClick={()=>setDisplayFilter(filterOptions.COMPLETED)}>Completed</button>
            
            <br/>
            <button onClick={()=>removeCompletedTodos()}>Clear completed</button>
            <h5>{numOfActiveTasks(originList)} items left</h5>
        </div>
    )
}

export default Filterbar
