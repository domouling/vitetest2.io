import React from 'react'

export const ContactPage = () => {
  return (
    <div
        className='container mt-5 w-50'
    >
        <div className="row">
          <div className="col-md-12">
              <div className="well well-sm">
                  <form className="form-horizontal" method="post">
                      <fieldset>
                          <legend className="text-lg-start header">Contacto</legend>
                           <div className="form-group mb-2">
                              <div className="col-md">
                                  <input id="fname" name="name" type="text" placeholder="Nombres" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group mb-2">
                              <div className="col-md">
                                  <input id="lname" name="name" type="text" placeholder="Apellidos" className="form-control" />
                              </div>
                          </div>
  
                          <div className="form-group mb-2">
                              <div className="col-md">
                                  <input id="email" name="email" type="text" placeholder="Correo Electronico" className="form-control" />
                              </div>
                          </div>
  
                          <div className="form-group mb-2">
                              <div className="col-md">
                                  <input id="phone" name="phone" type="text" placeholder="Teléfono" className="form-control" />
                              </div>
                          </div>
  
                          <div className="form-group mb-2">
                              <div className="col-md">
                                  <textarea className="form-control" id="message" name="message" placeholder="Ingrese su mensaje" rows="7"></textarea>
                              </div>
                          </div>
  
                          <div className="form-group mb-2">
                              <div className="col-md text-lg-end">
                                  <button type="button" className="btn btn-scss mt-2">Enviar</button>
                              </div>
                          </div>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    </div>
  )
}
