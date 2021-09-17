import './App.css'
import { useState } from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  const products = [
    {
    id : 1,
    title : "Kruch Burger",
    slug : "krunch-burger",
    image: "/images/card2.png",
    description: "Enjoy a crispy chicken fillet in a soft burger",
    price: 195,
    stock: 10,
    category: "everyday-value"
    }
  ]
  const [val, setVal] = useState(10)
  return (
    <div className='container'>
      <Header />
      <Home data = {val} />

      <div>1</div>
      <button></button>
    </div>
  );
}

export default App;
