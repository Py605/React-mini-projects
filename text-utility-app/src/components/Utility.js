import React, { useState } from 'react'
import {Box, Button} from '@mui/material';


function Utility() {
    const [input,setInput] = useState('')
    const upper = ()=>{
        setInput(input.toUpperCase())
    }
    const lower = ()=>{
        setInput(input.toLowerCase())
    }
    const clear = ()=>{
        setInput('')
    }
  return (
    <Box >
        {/* <textarea  rows="10" cols="100" /> */}
        
        <textarea rows="10" cols="100" value={input} onChange={e=>setInput(e.target.value)}/>
        
    <Box sx={{display:"flex",justifyContent:"space-around",margin:"10px"}}>
        <Button onClick={upper} variant="contained">Upper Case</Button>
        <Button onClick={lower} variant="contained">Lower Case</Button>
        <Button onClick={clear} variant="contained" >Clear</Button>
    </Box>
        <h1 className="heading">Preview</h1>
        <p>{input}</p>
        <h2 className="heading">Word Count</h2>
        <h3>{input.split(" ").length}</h3>
        <h2 className="heading">Character Count</h2>
        <h3>{input.length}</h3>
    </Box>
  )
}

export default Utility