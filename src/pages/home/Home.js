import React, {useState} from 'react'
import Card from '../../components/card/Card'
import Slider from '../../components/slider/Slider'

function Home(props) {
    const [products, setProducts] = useState(props.products)
    return (
        <div>
            <Slider />
            <div className="home-wrapper" style={{paddingTop: "30px", paddingBottom:"10px"}}>
            <div className="row">
            {
                products.map((p,i)=> <Card key={i} product={p}/>)
            }
            </div>
            </div>
        </div>
    )
}

export default Home

// import React, {useState} from 'react'
// import Footer from '../components/footer/Footer'
// import Header from '../components/header/Header'
// //how to render dynamic content inside a reaact
// //Template literal for string ``& 
// function Home() {

//     return (
//         <div>
//            <Header />
//             {/* <h1>{`sum of a with self ${val}`}</h1>
//             <button onClick={handleClick}>+</button>
//             <br />
//             <button onClick={handleClicksub}>-</button>
//             <br />
//             <button onClick={handleClickmul}>*</button>
//             <br />
//             <button onClick={handleClickdiv}>/</button> */}
//            <Footer />
//         </div>
//     )
// }

// export default Home