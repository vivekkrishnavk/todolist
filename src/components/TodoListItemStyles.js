import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 500px;
    height: 60px; 
    border: 2px solid white; 
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    font-size: 1.6rem; 
    margin: 10px 0;
`

export const CompleteButton = styled.button`
    border-radius: 4px; 
    font-size: 1rem; 
    letter-spacing: 1px; 
    border: 0; 
    background: #db3547; 
    color: white; 
    height: 35px;
` 

export const CompletedButton = styled.button`
    border-radius: 4px; 
    font-size: 1rem; 
    letter-spacing: 1px; 
    border: 0; 
    background: green; 
    color: white; 
    height: 35px;
` 