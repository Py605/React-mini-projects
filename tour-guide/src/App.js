import { Button } from '@mui/material';
import React,{useState} from 'react';
import Header from "./components/Header";
import Note from "./components/Note";
import newNotes from "./notes"
function App() {

 const [notes, setNotes] = useState([
  {
    id:0,
    price:"$2345",
    img:"https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?b=1&k=20&m=1185953092&s=612x612&w=0&h=EjODoinh9XDE10iZhviFcL00c_q6K-MZTpoYH7haSiI=",
    name:"Want a Room in Paris",
    age:"Paris is a picturesque dream destination. Spread over the banks of Seine River in Northern France, it stands out for being one of those glitzy metropolises of the world. Its cityscape sparkles with iconic architecture of historical monuments and vintage palaces, art museums, cathedrals, expansive landscaped gardens, and stylish shopping hubs. The fascinating points of interests, defining the timeless beauty of Paris, dazzle a frequent visitor as much as they amaze a first-timer. "
  },
  {
    id:1,
    price:"$2345",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lAMx-dmM2YYOWksO4zqKoQRgvZYJg4zCrg&usqp=CAU",
    name:"Want a Room in England",
    age:"London city is a memoir of cobbled streets and hidden gems, and you’re bound to unravel a new side of it every time you’re over here. It is located in the Southeastern area of Great Britain and has something for everyone, from history and culture to fine food and good times. London is packed with conventional tourist spots, and the best way to explore the city is to discover the lesser-known nooks and crannies. The capital is known for its world-class cuisines, fashion statement, and superb shopping. "
  },
  {
    id:2,
    price:"$2345",
    img:"https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Places-To-Visit-In-Tokyo-6_dec.jpg",
    name:"Want a Room in Tokyo",
    age:"When it comes to the greatest cities in the world, you cannot do better than Tokyo. A juxtaposition of deep tradition and fast-paced, modern energy, Tokyo, the capital city of Japan, is one of the best places to visit in Asia. It is home to the Imperial Palace and the seat of Government and Parliament, as well as luxury hotels, Michelin-starred restaurants, and fantastic shopping. Located in East-Central Honshu, the largest of Japan's main islands"
  },
  {
    id:3,
    price:"$2345",
    img:"https://content.jdmagicbox.com/comp/chennai/a3/044pxx44.xx44.170315150519.j8a3/catalogue/mgr-memorial-triplicane-chennai-tourist-attraction-jmdi93.jpg",
    name:"Want a Room in Anna",
    age:"Anna Salai, which is more than 400 years old, is acknowledged as the most important road in Chennai city. The head offices of many commercial enterprises and public buildings are located along Anna Salai. It is the second longest road in Chennai, after EVR Periyar Salai."
  }
])

  
  function deleteThis(index){
    setNotes((prev)=>{
      return prev.filter((note,id)=>{
        return id !== index
      })
    })
  }
  function updateNotes(){
    setNotes(newNotes)
  }
  function refreshButton(){
    var heading = document.getElementById('heading').innerText="No Tours Left"
    return <>
      <Button onClick={updateNotes} variant="contained">Refresh</Button> 
        </>
  }
  return (
  <><Header />

    <div className="outer-div">
      <h2 id='heading'>Our Tours</h2>
      <hr></hr>
    
     { 
      (notes.length === 0) && refreshButton()      
     }
    
      <div className='cards-container'>
        {
          notes.map((note,index)=>{
            return (
               <Note delete={deleteThis} key={index} id={index} img={note.img} price={note.price} title={note.name} content={note.age} />
            )
          })
        }
      </div>
      
    </div>
  </>
  );
}

export default App;
