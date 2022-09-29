// import React from 'react';
import React, {Component} from 'react';
import ProductList from './ProductList';
class Navbar extends React.Component {
   productList = [
    {
      name: "IPhone X",
      price: 100000,
      quantity: 0
    },
    {
      name: "IPhone X",
      price: 100000,
      quantity: 0
    }
  ];
  render() { 

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Py Cart</a>
      </div>

    </nav>
    <ProductList productList/>
    </>
  );
  }
}
 
export default Navbar;