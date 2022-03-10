import Header from './components/Header'
import Input from './components/Input'
import ListItem from './components/ListItem'
import './App.css';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([])
  const [count, setCount] = useState(0)

  const deleteItem = (id) => {
    let update = list.filter(item => {
      return (
        item.id !== id
      )
    })
    setList(update)
  }

  const addTask = (input, date) => {
    setCount(count + 1)
    let newItem = {
      id : count,
      task : input,
      dueDate : date
    }
    let update = list
    update = [...update, newItem]
    setList(update)
  }

  return (
    <div>
      <Header /> 
      <Input addTask = {addTask}/>
      <div className='list'>
        <ul>
          {list.map(item => {
            return (
              <li><ListItem item = {item}
                            deleteItem = {deleteItem}/></li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
