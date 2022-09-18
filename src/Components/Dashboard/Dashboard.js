import React from 'react';
import useProducts from '../../Hook/useProducts';
import ProductDetails from './ProductDetails';

const Dashboard = () => {
const [products, setProducts] = useProducts();
console.log(products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto w-full'>
            { products?.map(product => <ProductDetails key={product?._id} product={product} setProducts={setProducts} />)
            }
        </div>
    );
};

export default Dashboard;