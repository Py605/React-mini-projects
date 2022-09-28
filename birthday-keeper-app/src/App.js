import React,{useState} from 'react';
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
// import notes from "./notes.js"
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

function App() {

 const [notes, setNotes] = useState([
  {
    key:1,
    img:"https://imgs.search.brave.com/xjj8NvGSmt5IqmrxfoU1H7iJvGk6vQzBAh3xYs9ws4A/rs:fit:900:750:1/g:ce/aHR0cHM6Ly93d3cu/dGhlZmFtb3VzcGVv/cGxlLmNvbS9wcm9m/aWxlcy9pbWFnZXMv/amFjay1zY2hsb3Nz/YmVyZy00LmpwZw",
    name:"Jack",
    age:"46 years"
  },
  {
    key:2,
    img:"https://imgs.search.brave.com/FPmqxTlBVU6U8B3ZBSSuIVD-6rZqmC4rdAQjPRjqvyE/rs:fit:1080:721:1/g:ce/aHR0cHM6Ly93YW5k/ZXJsdXN0LWludHJv/dmVydC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDIv/c3VzYW4tY2Fpbi1i/aW9ncmFmaWUtMTA4/MHg3MjEuanBn",
    name:"Susain",
    age:"39 years"
  },
  {
    key:3,
    img:"https://imgs.search.brave.com/GnVaiDOdTznppaQzQeM4c5KTqB_KtvVFRgpsqXscU_k/rs:fit:900:750:1/g:ce/aHR0cHM6Ly93d3cu/dGhlZmFtb3VzcGVv/cGxlLmNvbS9wcm9m/aWxlcy9pbWFnZXMv/bHluZGEtbG9wZXot/MS5qcGc",
    name:"Lyndia",
    age:"35 years"
  },
  {
    key:4,
    img:"https://imgs.search.brave.com/L8PIPA4XON7XDIWXeAZKdaEfB6cSO0FMu6Jz2TImfYg/rs:fit:320:351:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZGVzaW1hcnRp/bmkuY29tL21lZGlh/L3VwbG9hZHMvMjAx/OC01L3ZhcnVuX0NC/c1l4aVIuanBn",
    name:"Kunal",
    age:"28 years"
  }
])
  function showNote(note){
    return <Note key={note.id} img={note.img} title={note.name} content={note.age}/>
  }

  function deleteAll(){
    setNotes([])
  }
  return (
  <>
    <Header />
    <div className="outer-div">
        <Card className='card' variant="outlined">
          <h1>Today's Birthdays </h1>
          
          <div className='cards-container'>
            {
              notes.map(showNote)
            }
          </div>
          <div className='button-div'>
              <Button 
              onClick={deleteAll} variant="contained">Delete All</Button>
          </div>
        </Card>
    </div>
    <Footer />
  </>
  );
}

export default App;
