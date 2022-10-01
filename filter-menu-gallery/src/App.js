import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './index.css';

function App() {
  const [menuItem,setMenuItem] = useState(items)
  const categories=['all', ...new Set(items.map((item)=> item.category))]
  function filterItems(category){
    if(category === "all")             
      return setMenuItem(items) 
    const newItems = items.filter((item)=> (item.category === category)
    )
    return  setMenuItem(newItems)
  }
  return (
    <main>
      <section className='section menu'>
      <div className='title'>
        <h2>Our Menu</h2>
        <h2 className='underline'></h2>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItem}/>
      </section>
    </main>
  );
}

export default App;