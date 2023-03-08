import React from 'react'
import { Link } from 'react-router-dom'

export const Products = ({ products }) => {
  return (
    <div className='container mt-4'>
        <div className="row">
            {
                products.map( product => (
                    <div className="col-md" key={ product.id }>
                        <Link to={`${product.id}`}>
                            <div className="card box-scss">
                                <img src={ `../src/assets/img/${product.img}` } className="card-img-top" alt={ product.name } />
                                <div className="card-body">
                                    <h5 className="card-title fw-bolder">{ product.name }</h5>
                                    <p className="card-text text-start">{ product.description }</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
          </div>
    </div>
  )
}
