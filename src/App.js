import React, { Component, useState, useEffect } from 'react'
import Web3 from 'web3'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'
import { AppWrapper, Heading, SubHeading } from './AppStyles'
import Spinner from './Spinner.svg'
import TodoListItem from './components/TodoListItem'
import AddItem from './components/AddItem'

const App = (props) => {
  const [ account, setAccount ] = useState('')
  const [ taskCount, setTaskCount ] = useState(0)
  const [ tasks, setTasks ] = useState([])
  const [ todoList, setTodoList ] = useState({})
  const [ loading, setLoading ] = useState(false)

  const createTask = (content) => {
    setLoading(true)
    todoList.methods.createTask(content).send({ from: account })
    .once('receipt', (receipt) => { 
      setLoading(false) 
      loadDataFromBlockchain()
    }) 
  }

  const toggleCompleted = (taskId) => {
    setLoading(true)
    todoList.methods.toggleCompleted(taskId).send({ from: account })
    .once('receipt', (receipt) => { 
      setLoading(false) 
      loadDataFromBlockchain()
    })
  }

  const loadDataFromBlockchain = async () => {
    const web3 = new Web3("http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    setTodoList(todoList)
    const taskCount = await todoList.methods.taskCount().call()
    setTaskCount(taskCount)
    let updatedTasks = []
    for (var i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call()
      console.log('task: ',task)
      updatedTasks.push(task)
    }
    setTasks(updatedTasks)
  }

  useEffect(() => loadDataFromBlockchain(), [])

  return (
    <AppWrapper>
      <Heading>Blockchain Todo List</Heading>
    {loading ? <img src={Spinner} alt={'loading...'} /> : 
    <div>
      <AddItem createTask={createTask} />
      {tasks.map((task) => <TodoListItem task={task} toggleCompleted={toggleCompleted} />)}
    </div>
    }
    <SubHeading>This App uses Ganache blockchain to store list items and it uses truffle based smart contracts for migrating/completing list items</SubHeading>
  </AppWrapper>
  )
}

export default App;
