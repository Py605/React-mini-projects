import React from 'react' 
import "./App.css" 
import { AppBar, Toolbar } from '@mui/material'; 
import Utility from './components/Utility'; 
 
function App() { 
  return ( 
    <>  
    <div className='App'> 
      <AppBar position='static' sx={{marginBottom:"30px"}}> 
        <Toolbar> 
          <h2 sx={{textAlign: 'center'}}>Text Utils</h2> 
        </Toolbar> 
        </AppBar> 
        <Utility/> 
      </div> 
    </> 
  ) 
} 
 
export default App