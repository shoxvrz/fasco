import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGetData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])
    
    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');

        if(response.status === 200){
            setData(response.data)
        }
    }
    console.log(data);

    return{
        data
    }
}

export default useGetData