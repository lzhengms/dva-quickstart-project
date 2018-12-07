import React from 'react'
import { connect } from 'dva'
import ProductsList from '../components/ProductList'

const Products = ({dispatch, products}) => {
   function handleDelete (id) {
     dispatch({
       type: 'products/delete',
       payload: id
     })
   }

   return (
    <div>
      <h2> List Of Products</h2>
      <ProductsList onDelete={handleDelete} products={products}></ProductsList>
    </div>
   )
  }

export default connect(({products}) => ({products}))(Products)


