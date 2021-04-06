import React from 'react'
import styled from 'styled-components'

const Filterbar = ({originList, hasCompletedTodos, setDisplayFilter, filterOptions, removeCompletedTodos })=> {

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
            <LinkButton show={hasCompletedTodos} onClick={removeCompletedTodos}>Clear completed</LinkButton>
            <h5>{numOfActiveTasks(originList)} items left</h5>
        </div>
    )
}

export default Filterbar

export const LinkButton = styled.button`
  padding: 0.2rem;
  /* margin-left: 0.2rem;
  font-size: 1rem; */
  display: ${({ show }) => (show ? "block" : "none")};
`;

