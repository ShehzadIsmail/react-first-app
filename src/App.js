import './App.css'
import { useState } from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import {products} from './data.js';
function App() {

  // const [product, setProduct]= useState({
  //   title: 'Mouse',
  //   price: 200,
  //   stock: 10
  // })

  // const updateVal=()=>{
  //   setProduct({...product,price: product.price+20,stock: product.stock+1})
  // }
  //For updating single value
  // const [val, setVal] = useState(10)
  // const updateCount=() =>{
  //   setVal(val+1)
  // }

  return (
    <div className='container'>
      <Header />
      <Home products={products} />

      <div>
      {/* {product.title}
      {product.price}
      {product.stock} */}
      </div>
      {/* <button onClick={updateVal}>update</button> */}
    </div>
  );
}

export default App;