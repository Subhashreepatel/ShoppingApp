import React from 'react'

const Cards = ({product}) => {
    const description = product.description.slice(0, 20);
  return (
    <div className="bg-amber-50 p-3 flex flex-col text-black">
        <div className="h-48 overflow-hidden">
            <img src={product.image} className="h-full w-full object-contain" />
        </div>
        <div>
            <h1 className="front bold text-lg">{product.title}</h1>
            <h2 className="text-sm text-gray-600">{description}...</h2>
        </div>
        <div className="sm-2 font-semibold text-green-600">
            ${product.price}
        </div>
    </div>
  )
}

export default Cards
