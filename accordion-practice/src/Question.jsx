import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [showInfo , setShowInfo] = useState(true)
  function changeState(){
    setShowInfo((showInfo)=>{
      return !showInfo;
    })
  }
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button onClick={changeState} className='btn'>
          {showInfo  ? (<AiOutlinePlus />): (<AiOutlineMinus />) }
        </button>
      </header>
      <p>{!showInfo && info}</p>
    </article>
  );
};

export default Question;