import './Card.css'
import React from 'react'
// import xs from '/images/xs.png'
// import card2 from '/images/card2.png'

function Card(props) {
    const product=props.product
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
                
            </div>
        </div>
    )
}

export default Card