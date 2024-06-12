import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCartContext } from "../Context/CartContext";
import { Star } from "./Star";
import './Product.css';

export const Product = () => {
    const { setProducts, addToCart, productList, setDecrement, setIncrement, category, setCategory, prevCategory } = useCartContext();
    const uri = process.env.REACT_APP_BACKEND_PRODUCT_API;
    const [page, setPage] = useState(1);
    const [productsPerPage] = useState(15); // Number of product cards to display per page 
    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    // Get data from the server when component mounts.
    const fetchProducts = async (e) => {
        try {
            const response = await axios.get(uri, { params: { category } });
            setProducts(response.data.documents);

        } catch (error) {
            console.log("Error fetching products", error);
        }
    };

    useEffect(() => {
        setCategory();
        if (prevCategory !== category)
            fetchProducts();
    }, [category]);

    // Ensure productList is defined and is an array before slicing
    let currentProducts = Array.isArray(productList) ? productList.slice(indexOfFirstProduct, indexOfLastProduct) : [];

    // Pagination control functions
    const goToNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const goToPreviousPage = () => {
        setPage(prevPage => prevPage - 1);
    };

    return (
        <div className="Products">
            <div>
                {currentProducts.map((item) => (
                    <div key={item._id} className='card'>
                        <div className='image'>
                            <img className='image_tag' src={item.ImgUrl} alt={item.Brand} />
                        </div>
                        <div>
                            <div><span>{item.Brand}</span></div>
                            {item.Description !== 'NaN' && <div><span>Description</span>: {item.Description}</div>}
                            <div><span>Our Price</span>: {item.SellingPrice}</div>
                            {item.MRP !== 'NaN' && <div><span>M.R.P</span>: {item.MRP}</div>}
                            {item.Stars !== 'NaN' && <div className='stars'><Star stars={item.Stars.substring(0, 3)} />  <span id='star_count'>{item.Stars}</span></div>}
                            {item.NumberOfRating !== 'NaN' && <div><span>Number of Ratings</span>: {item.NumberOfRating}</div>}
                        </div>
                        <div>
                            <div className='count'>
                                {!item.quantity ? (
                                    <span className='add set' onClick={() => addToCart(item._id)}>Add</span>
                                ) : (
                                    <>
                                        <button className='add' onClick={() => setDecrement(item._id)}>-</button>
                                        <div className='add'>{item.quantity}</div>
                                        <button className='add' onClick={() => setIncrement(item._id)}>+</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className="pagination">
                    <button className='bttn' style={{ backgroundColor: 'white' }} onClick={goToPreviousPage} disabled={page === 1}>Previous</button>
                    <span style={{ color: 'white' }}>Page {page}</span>
                    <button className='bttn' style={{ backgroundColor: 'white' }} onClick={goToNextPage} disabled={indexOfLastProduct >= (productList ? productList.length : 0)}>Next</button>
                </div>
            </div>
        </div>
    );
};
