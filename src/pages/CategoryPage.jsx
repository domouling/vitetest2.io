import React from 'react'

import products from '../data/products';
import { Link, useParams } from 'react-router-dom';

export const CategoryPage = () => {
    const { id } = useParams();

    const items = products.filter(item => item.category === id);
  
    return (
        <div className='container mt-4'>
            <h3 className='text-start'>
                <Link to='/item'> Productos </Link> / Categoria: { id }
            </h3>
            
            <div className="row">
            {
                items.map( product => (
                    <div className="col-md" key={ product.id }>
                        <Link to={`/item/${product.id}`}>
                            <div className="card box-scss">
                                <img src={ `../../src/assets/img/${product.img}` } className="card-img-top" alt={ product.name } />
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
