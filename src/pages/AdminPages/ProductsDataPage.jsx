import React from 'react'
import useGetData from '../../hooks/useGetData'

const ProductsDataPage = () => {
const {itemData} = useGetData()

  return (
    <div>
        {
            itemData.map((item) => (
                <div className="itemCard" key={item.id}>
                    <h1>{item.title}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default ProductsDataPage