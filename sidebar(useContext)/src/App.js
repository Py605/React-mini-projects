import React,{createContext, useContext} from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
  const showModal = createContext();
  return (
    <>
    
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default App