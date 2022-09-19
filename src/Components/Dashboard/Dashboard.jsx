import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../Hook/useProducts';
import Loader from '../Others/Loader';
import ProductDetails from './ProductDetails';

const Dashboard = () => {
    const [products] = useProducts();
    const [user, loading] = useAuthState(auth);
    const [sizefilter, setSizeFilter] = useState([]);
    const [pdnameFilter, setPdNamefilter] = useState([]);
    const [search, setSearch] = useState([]);
    const [prc, setPrc] = useState([]);


    if (loading) {
        return <Loader />
    }

    const handleSignOut = () => {
        signOut(auth);
        //Token Remove
        localStorage.removeItem("accessToken");
    };


    // Filter by Price
    const filterByPrice = (e) => {
        const price = e.target.value;
        if (price === "0-50") {
            setPrc(products.filter(product => product.price > 0 && product.price <= 50));
        } else if (price === "50-100") {
            setPrc(products.filter(product => product.price > 50 && product.price <= 100));
        } else if (price === "100-200") {
            setPrc(products.filter(product => product.price > 100 && product.price <= 200));
        } else if (price === "200-300") {
            setPrc(products.filter(product => product.price > 200 && product.price <= 300));
        } else if (price === "300-400") {
            setPrc(products.filter(product => product.price > 300 && product.price <= 400));
        } else if (price === "400-500") {
            setPrc(products.filter(product => product.price > 400 && product.price <= 500));
        } else {
            setPrc(products.filter(product => product.price > 500));
        }
        setSizeFilter(prc)
        setPdNamefilter(0)
    }

    // Filter By Product Category

    const filterByCategory = (e) => {
        const Category = e.target.value;
        const result = products.filter(product => product.category === Category)
        setPdNamefilter(result)
        setSizeFilter(0)
    }

    // Filter by search
    const searchResult = (e) => {
        const searchText = e.target.value;
        const result = products.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearch(result);
    }

    let loadProducts;

    if (sizefilter.length > 0) {
        loadProducts = sizefilter
    }
    else if (pdnameFilter.length > 0) {
        loadProducts = pdnameFilter
    }
    else if (search.length > 0) {
        loadProducts = search
    }
    else {
        loadProducts = products
    }



    // console.log(products);
    return (
        <div className="">
            <div className="head bg-violet-800 py-3 items-center px-10 flex flex-col lg:flex-row gap-4 gap">
                <div className="searchbar grow ">
                    <div className="form-control data-svelte-search">
                        <input
                            onChange={searchResult}
                            type="text"
                            placeholder="Type to Search..."
                            className="input px-7 py-2 placeholder-slate-300 text-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-md"
                        />
                    </div>
                </div>
                <div className="filteringBy-A-to-Z">
                    <select onChange={filterByPrice} className="select w-full max-w-xs input px-3 placeholder-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-white text-sm">
                        <option disabled selected>
                            Sort by: Price
                        </option>
                        <option>0-50</option>
                        <option>50-100</option>
                        <option>100-200</option>
                        <option>200-300</option>
                        <option>300-400</option>
                        <option>400-500</option>
                    </select>
                </div>
                <div className="allStatus">
                    <select onChange={filterByCategory} className="select w-full max-w-xs px-3 placeholder-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-white text-md">
                        <option disabled selected> All Category </option>
                        <option>Bag</option>
                        <option>Cap</option>
                        <option>Earphones</option>
                        <option>Bottle</option>
                        <option>Men's Sneaker</option>
                        <option>Men's Pants</option>
                        <option>Men's Boot</option>
                        <option>Men's Sneaker</option>
                    </select>
                </div>
                <div className="recipients">

                    {user && (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" alt='' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a href="" onClick={handleSignOut}><NavLink to="/signin">Sign Out</NavLink></a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 mx-auto w-full'>
                {loadProducts?.map(product => <ProductDetails key={product?._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Dashboard;