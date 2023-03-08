import React from 'react'

import packs from '../data/packs'

export const Packs = () => {
  return (
    <div
        className='container mt-4'
    >
        <div className="row">
            {
                packs.map( pack => (
                    <div className="col-md text-start" key={ pack.id }>
                        <div className="card box-scss">
                            <img src={`../src/assets/img/${pack.img}`} className="card-img-top" alt={pack.name} />
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">{ pack.name }</h5>
                                    Incluye:
                                    <ul>
                                        {
                                            pack.includes.map( (include, i) => (
                                                <li key={i}>{ include }</li>
                                            ))
                                        }
                                    </ul>
                                <h4>Precio: ${ (pack.price).toLocaleString("DE-de") }</h4>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
