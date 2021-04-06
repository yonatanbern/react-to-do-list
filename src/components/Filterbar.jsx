import React from 'react'
import styled from 'styled-components'

const Filterbar = ({ originList, hasCompletedTodos, displayFilter, setDisplayFilter, filterOptions, removeCompletedTodos }) => {

    const numOfActiveTasks = (originList) => {
        let num = 0;
        for (const task of originList) {
            if (!task.isCompleted) {
                num++;
            }
        }
        return num;
    }

    return (
        <Hbox>
            <span>
                {numOfActiveTasks(originList)} items left
            </span>

            <Hbox>
                <Button
                    // name={filterOptions.ALL}
                    onClick={() => setDisplayFilter(filterOptions.ALL)}
                    selected={displayFilter === filterOptions.ALL}>
                    All
                </Button>

                <Button
                    // name={filterOptions.UNCOMPLETED} 
                    onClick={() => setDisplayFilter(filterOptions.UNCOMPLETED)}
                    selected={displayFilter === filterOptions.UNCOMPLETED}>
                    Active
                </Button>

                <Button
                    // name={filterOptions.COMPLETED} 
                    onClick={() => setDisplayFilter(filterOptions.COMPLETED)}
                    selected={displayFilter === filterOptions.COMPLETED}>
                    Completed
                </Button>
            </Hbox>

            <TempButton show={hasCompletedTodos} onClick={removeCompletedTodos}>Clear completed</TempButton>
        </Hbox>
    )
}

export default Filterbar

export const Hbox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;
`

export const BaseButton = styled.button`
  margin: 0.2rem;
  padding: 0.4rem;
  font-size: 1rem;
  outline: none;
  border-radius: 0.3rem;
  border-width: 0.1rem;
  background: transparent;
  border-color: transparent;
`;

export const Button = styled(BaseButton)`
  border-color: ${({ selected }) => (selected ? "deeppink" : "transparent")};
  :hover {
    border-color: ${({ selected }) => (selected ? "deeppink" : "cyan")};
  }
`;

export const TempButton = styled(BaseButton)`
  display: ${({ show }) => (show ? "block" : "none")};
`;

