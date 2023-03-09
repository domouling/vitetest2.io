import React from 'react'
import { Link, useParams } from 'react-router-dom'

import products from '../data/products';

export const ItemPage = () => {

  const { id } = useParams();

  const item = products.find( product => product.id === parseInt(id));

  return (
      (Object.keys(item).length > 0) &&
        <div className='container mt-4'>
          <h3 className='text-start'>
            <>
              <Link to='/item'> Productos </Link> / 
              <Link to={`/item/category/${item.category}`}> Categoria: { item.category }</Link> /
              id: { id }
              {/*  <Link to=`/category/'> Categoria: { item.category } / id: { item.id } </Link> */}
            </>
          </h3>
          <div className="row">
            <div className="col-md-4">
              <img src={ `img/${item.img}` } className="card-img-top" alt={ item.name } />
            </div>
            <div className="col-md d-flex flex-column justify-content-center align-items-start">
              <h5 className="card-title fw-bolder mb-4">{ item.name }</h5>
              <p className="card-text text-start">{ item.description }</p>
            </div>
          </div>
        </div>
  )
}
