import React from 'react';
import useProducts from '../../Hook/useProducts';
import ProductDetails from './ProductDetails';

const Dashboard = () => {
    const [products, setProducts] = useProducts();

    console.log(products);
    return (
        <div className="">
            <div className="head bg-violet-800 py-3 items-center px-10 flex flex-col lg:flex-row gap-4 gap">
                <div className="searchbar grow ">
                    <div className="form-control data-svelte-search">
                        <input
                            type="text"
                            placeholder="Type to search..."
                            className="input px-7 py-2 placeholder-slate-300 text-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-md"
                        />
                    </div>
                </div>
                <div className="filteringBy-A-to-Z">
                    <select className="select w-full max-w-xs input px-3 placeholder-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-white text-sm">
                        <option disabled selected>
                            Sort by: Price
                        </option>
                        <option>Name</option>
                        <option>Date</option>
                        <option>Type</option>
                        <option>Lists</option>
                        <option>Size</option>
                    </select>
                </div>
                <div className="allStatus">
                    <select className="select w-full max-w-xs px-3 placeholder-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-white text-md">
                        <option disabled selected>
                            All Category
                        </option>
                        <option>Recently</option>
                        <option>Last day</option>
                        <option>Last week</option>
                        <option>Last month</option>
                        <option>Last year</option>
                    </select>
                </div>
                <div className="recipients">
                    <button className="input px-3 text-white placeholder-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-white-50 text-md">
                        <span className="font-bold text-md">
                            {/* <FontAwesomeIcon className="mr-4" icon={faPlus} /> */}
                        </span>
                        New Recipients
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 mx-auto w-full'>
                {products?.map(product => <ProductDetails key={product?._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Dashboard;