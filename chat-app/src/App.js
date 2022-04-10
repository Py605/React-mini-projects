import React, {useState, useEffect} from 'react';
import './App.css';
import Message from './Message';
import db from './firebase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
function App() {
  const [input, setInput] = useState('');
  const [message,setMessage] = useState([
    {username: "Priyanshu",
      message: "Yo"
    }
  ]);
  const messageRef = collection(db,"message");
  const sendMessage = (e)=>{
    e.preventDefault();
    addDoc(messageRef,{
      username:username,message:input
    })
    setMessage([...message,{username:username,message:input}]);
    setInput('')
  }
  const [username, setUsername] = useState();
  useEffect(()=>{
    setUsername(prompt("Enter your name here: "));
  },[]);
  useEffect(()=>{
    onSnapshot(messageRef)
  },[])
  return (
    <div className="App">
    <h1> Welcome {username}</h1>
      <form>
        <input value={input} onChange={(e)=> setInput(e.target.value)}></input>
        <button onClick={sendMessage} disabled={!input} type="submit">Send Message</button>
      </form>
      {
        message.map((message) => (
          <Message username= {message.username} message = {message.message}/>
        ))
      }
    </div>
  );
}

export default App;
