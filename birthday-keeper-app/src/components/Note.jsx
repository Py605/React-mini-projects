import React from 'react'

function Note(props) {
  return (
    <div className='note'>
      <div className='image-div'>
        <img src={props.img} alt='pic' />
      </div>
      <div className='person-div'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      
    </div>
  )
}

export default Note