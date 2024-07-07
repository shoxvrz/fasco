import React from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { addToCart } from '../toolkit/slice/cartSlice';

const useAddToCart = () => {
    const dispatch = useDispatch()

    const addToCartHandler = (pro) => {
        dispatch(addToCart(pro))
      }


      return{
        addToCartHandler
      }
}

export default useAddToCart