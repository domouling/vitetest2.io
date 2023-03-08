import { Modal } from 'bootstrap'
import React from 'react'

//TODO

export const ModalRecipet = (id, ingredientes, pasos) => {
  return (
    <Modal>
        <Modal.Header>

        </Modal.Header>
            <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" 
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Salmon en salsa Ciboulette</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <strong>Ingredientes:</strong>
                    {
                        ingredientes.map( (ingrediente, i) => (
                            <ul key={i}>{ ingrediente }</ul>
                        ))
                    }

                    <strong>Preparación:</strong>
                    {
                        pasos.map( (paso, i) => (
                            <ul key={i}>{ paso }</ul>
                        ))
                    }

                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
                </div>
            </div>

    </Modal>
  )
}
