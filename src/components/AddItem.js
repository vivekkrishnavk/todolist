import React, { useState } from 'react';
import { StyledInput } from './AddItemStyles'

const AddItem = ({createTask}) => {
    const [ content, setContent ] = useState('')
    return (
        <div style={{ display: 'flex', marginBottom: '2rem' }}>
            <StyledInput type='text' placeholder={'What do you want to do today?'} value={content} onChange={(event) => setContent(event.target.value) } />
            <button style={{ fontSize: '1.6rem', color: 'white', background: '#027bfc', border: '3px solid #7ac0ff' , borderRadius: '4px', width: '80px' }} onClick={() => createTask(content)}>Add</button>
        </div>
    )
}

export default AddItem;