import './App.css'
import { useState } from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import {products} from './data.js';
import { } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NotFound from './pages/notfound/NotFound';
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
      <Router> 
      <Header />
        <Switch>
          <Route exact path="/account/login"><Login /></Route>
          <Route exact path="/account/register"><Register /></Route>
          <Route exact path="/"><Home products={products}/></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
        </Router>
      

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