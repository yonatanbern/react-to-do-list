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

    



    return (
        <div>
            Filterbar

            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            <h5>{numOfActiveTasks(originList)} items left</h5>

        </div>
    )
}

export default Filterbar
