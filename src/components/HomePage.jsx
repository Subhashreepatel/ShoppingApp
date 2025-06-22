import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cards from './cards';

const HomePage = () => {
    const [products, setProducts] =useState([]);

    useEffect(()=>{
        async function getProductDetails(){
            const response = await axios.get(`https://fakestoreapi.com/products`)
            setProducts(response.data);
        }
        getProductDetails();
        
    },[])

    useEffect(()=>{
        console.log(products);
    },[products])
  return (
    <div className="flex items-center w-full flex-col overflow-x-hidden">
     
        <div className="w-11/12 grid grid-cols-3 gap-3 overflow-x-hidden">
        {
        products.map((product, index)=>(
            <Cards key={index} product={product} />
        ))

     }
    </div>
</div>
  )
}

export default HomePage
