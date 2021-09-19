import {useState,useEffect} from 'react';
import './App.css';
import uuid from 'react-uuid';

/* excercise. Clock using hooks

  function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("ajastin käynnistetty");
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return() => {
      clearInterval(id);
    };
  },[])

  return (
    <div style={{margin: '30px'}}>
      {time.toLocaleTimeString()}
    </div>
  );
}*/


// Excercise. List
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const names = ['Jouni', 'Reima', 'Meija', 'Jouni'];
    setItems(names);
  }, [])


return (
    <div style={{margin: '30px'}}>
      <h3>Names</h3>
      <ul>
        {items.map(item => (
          <li key={uuid()}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
