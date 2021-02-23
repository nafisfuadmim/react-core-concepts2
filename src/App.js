import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      
      <Counter></Counter>
      <Users></Users>
      
      </header></div>);}


function Counter() {
  const [count, setCount] = useState(10000)
  const handleIncrease = () => setCount(count +1)
  return(
    <div>
      <h1>Counter:{count}</h1>
      <button onMouseMove ={() => setCount(count -1)}>Decrease</button>
      <button onMouseMove ={() => setCount(count +1)}>Increase</button>
    </div>
  )
  
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users{users.length}</h3>
      <ul>
        {
          users.map(man => <li>{man.email}</li>)
          
        }


      </ul>
    </div>
  )
}
export default App;
