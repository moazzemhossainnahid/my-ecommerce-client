import React from 'react';

const ProductDetails = ({ product }) => {
    const {category, price, img, name} = product;
    return (
        <div className="card w-5/6 group bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-gray-500 rounded-xl mx-auto">
            <figure><img className='w-4/5 mx-auto rounded-full group-hover:shadow p-3 m-5 group-hover:scale-105 group-hover:rotate-45 hover:border border-red-700 duration-200' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-start ml-5">Name: {name}</h2>
                <div className="flex flex-col justify-start w-full text-start mx-5 py-2">
                <p>Price: {price}</p>
                <p>Category: {category}</p>
                </div>
                <div className="card-actions flex mx-5 my-3 justify-end">
                    <button className="bg-rose-500 text-white px-5 py-2 rounded">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;