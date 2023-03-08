import React, { useEffect, useState } from 'react'

import { Products } from '../components/Products'

import products from '../data/products';
//import axios from 'axios';

export const ItemListContainer = () => {

  const [ elements, setElements ] = useState([]);

  const getProducts= async () => {
      //const res = await axios.get('https://fakestoreapi.com/products/');
      const res = products;
      //setElements(res.data)
      setElements(res);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
        <Products products={ elements }/>
        <div className="container text-center mt-5">
          <div className="row">
           <div className="col-md p-3 border m-1 box-scss">
              <h5 className="fw-bolder fw-bolder">LLEVAR UNTANUTS A TU MESA</h5>
              <p className="text-lg-start">Nuestra inspiración es crear alimentos complejos y funcionales nutricionalmente. Nuestro esfuerzo es tecnológico para poder integrar la gran variedad de Tree Nuts que existen en recetas que puedan penetrar en el mercado y encuentre su lugar en la mesa diaria de las personas.
                UNTANUTS quiere diversificar y llenar tu día a día con la variedad de productos que la tierra tiene para ofrecernos.</p>
            </div>
            <div className="col-md p-3 border m-1 box-scss">
              <h5 className="fw-bolder fw-bolder">DESTERRAR LA MAYOR CANTIDAD DE PRODUCTOS</h5>
              <p className="text-lg-start">Nuestra misión es generar un cambio cultural en lo que comemos, sustituir los productos altamente procesados como embutidos y azúcar refinada.
                En UNTANUTS encontrarás la textura y el sabor que estás acostumbrado, pero con un alimento Nuts Based, ¡funcional, natural y nutritivo!</p>
            </div>

          </div>
        </div>
    </>
    
  )
}
