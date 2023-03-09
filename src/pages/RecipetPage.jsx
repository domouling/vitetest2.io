import React, { useState } from 'react'
import recetas from '../data/recetas'
import { ModalRecipet } from '../components/ModalRecipet'
import { Modal } from 'react-bootstrap';

export const RecipetPage = () => {

    const [ modal, setModal ] = useState({});
    const [ show, setShow ] = useState(false);
    
    const handleClose = () => setShow(false);

    return (
        <div className='container'>
            <legend className='text-lg-start mt-3'>Recetas</legend>
            <div className="row">
                {
                    recetas.map( receta => (
                        <div className="col-md text-start" key={ receta.id }>
                            <div className="card box-scss" style={{width: "18rem"}}>
                            <img src={`img/${receta.img}`} className="card-img-top" alt={ receta.name } />
                            <div className="card-body">
                                <h5 className="card-title"><strong>{ receta.name }</strong></h5>
                                <p className="card-text">{ receta.description }</p>
                                <button
                                    className='btn btn-primary'
                                    onClick={ () => {
                                        setModal({
                                            id: receta.id,
                                            name: receta.name,
                                            ingredients: receta.recipet.ingredients,
                                            steps: receta.recipet.steps
                                        })
                                        setShow(true);
                                    } }
                                >
                                    Ir a Receta
                                </button>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                (Object.keys(modal).length > 0) && 
                <Modal
                    show={ show }
                    onHide={ handleClose }
                >
                    <Modal.Header closeButton>
                        <Modal.Title
                            className='modal-title'
                        >
                            { modal.name }
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <strong>Ingredientes:</strong>
                        {
                            modal.ingredients.map( (ingredient, i) => (
                                <li key={ i }>{ ingredient }</li>
                            ))
                        }
                        <div className='mt-3'>
                            <strong>Pasos:</strong>
                            {
                                modal.steps.map( (step, i) => (
                                    <p key={ i }>{ step }</p>
                                ))
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            className='btn btn-secondary'
                            onClick={ handleClose }
                        >
                            Cerrar
                        </button>
                    </Modal.Footer>
                </Modal>
            }
        </div>
    )
}
