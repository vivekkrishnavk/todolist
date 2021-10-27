import React from 'react';
import { Wrapper, CompleteButton, CompletedButton } from './TodoListItemStyles'

const TodoListItem = ({ task, toggleCompleted }) => {
    const { id, content, completed } = task
    return (
        <Wrapper>
            <label>{content}</label>
            {completed ? <CompletedButton onClick={() => toggleCompleted(id)}>Completed</CompletedButton> 
            : <CompleteButton onClick={() => toggleCompleted(id)}>Complete</CompleteButton> }
        </Wrapper>
    )
}

export default TodoListItem;