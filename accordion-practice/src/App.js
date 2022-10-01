import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions] = useState(data)
  return (
  <main>
    
    <section className='container'>
        <h3>Question and Answer about Login</h3>
        <section className='info'>
          {
            questions.map((question)=>{
              return <SingleQuestion key={question.id} {...question}/>
            })
          }
        </section>    
    </section>

    
  </main>
  
  )
}

export default App;