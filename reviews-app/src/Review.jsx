import React, { useState } from 'react';
import review from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [people, setPeople] = useState(review)
  var [count,setCount] = useState(1)

  function increase(){
    if(count === people.length-1){
      setCount(0)
    }
    else{
      setCount(count+1)
    }
  }
  function decrease(){
    if(count === 0){
      setCount(people.length-1)
    }
    else{
      setCount(count-1)
    }
  }
  function randomBtn(){
    const randomNo = Math.floor(Math.random() * (people.length-1 + 1));
    setCount(randomNo === count ? count+1 : randomNo)
  }
  return (
    <>

      <div className='review'>
        <div className="img-container">
          <img className='person-img' src={people[count].image} alt='nothing' />
<span className='quote-icon'><FaQuoteRight /></span>
        </div>
        <h4 className="author">
          {people[count].name}
        </h4>
        <p className="job">
          {people[count].job}
        </p>
        <p className="info">
          {people[count].text}
        </p>

        <div className="button-container">
          <span className="prev-btn" onClick={increase}><FaChevronLeft /></span>
          <span onClick={decrease} className="next-btn"><FaChevronRight /></span>
          <div>
            <button onClick={randomBtn} className="random-btn">Surprise Me</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Review;