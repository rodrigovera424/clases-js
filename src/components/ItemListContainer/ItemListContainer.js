import React from 'react'
import { getProducts } from "../../asyncmock.js"
import { useState, useEffect } from 'react'
import "./ItemListContainer.css"






const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response =>{
            setProducts(response)
        })
    }, [])

    console.log(products)
    return(
        <div>
            <h1>{greeting}</h1>
            <ul>
                {products.map(product => <li key={product.id}>{product.name}</li>)}
            </ul>
        </div>

    )
}

export default ItemListContainer