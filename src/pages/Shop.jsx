import React from 'react'
import Filter from '../components/Filter/Filter'
import MainItems from '../components/MainItems/MainItems'
import './style/PagesStyle.scss'

const Shop = () => {



  return (
    <div className='shop'>
      <Filter/>
      <MainItems/>
    </div>
  )
}

export default Shop