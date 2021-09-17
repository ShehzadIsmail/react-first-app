import React from 'react'
// import xs from '/images/xs.png'
// import card2 from '/images/card2.png'

function Card() {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src='/images/xs.png' className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
                
            </div>
        </div>
    )
}

export default Card