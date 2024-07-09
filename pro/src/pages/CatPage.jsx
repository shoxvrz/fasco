import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../App.css';

const CatPage = () => {
    const { type } = useParams();
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [type]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${type}`);
            if (response.status === 200) {
                setCategoryData(response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); 
        }
    }

    console.log(type);
    return (
        <div className='page'>
            {loading ? ( 
                <div className="loading-spinner">Loading...</div>
            ) : (
                <div className="products">
                    {categoryData && categoryData.map((pro) => (
                        <div className="card" key={pro.id}>
                            <img src={pro.image} alt="" />
                            <h1>{pro.title}</h1>
                            <p>{pro.price}</p>
                            <span>{pro.category}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CatPage;
