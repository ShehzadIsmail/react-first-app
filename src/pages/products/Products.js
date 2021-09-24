import React from 'react'
import { useParams } from 'react-router'
import Card from '../../components/card/Card'
import { products } from '../../data'

function Products() {
    const{ category} = useParams()
    const filteredProds= products.filter((product) => product.category === category)
    return (
        <div className='row'>
            {filteredProds.map((p,i)=><Card key ={i} product={p}/>)}
        </div>
    )
}
export default Products