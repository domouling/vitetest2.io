import React from 'react'

export const FaqsPage = () => {
  return (
    <div className="container accordion mt-5 text-start" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>¿SON UN QUESO CREMA?</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <h5>Sí y no, Untanuts están hechos <strong> 100% a base de nueces de árbol</strong>, no utilizamos leche de vaca, pero tenemos una textura inigualable que podrás disfrutar de la misma manera que un queso crema, pero más untable, más saludable y bueno para ti y para el planeta.
                Además, tenemos una deliciosa gama de texturas: Cremosos, Dyps, Paté y Mousse</h5>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>¿POR QUÉ SUS PRODUCTOS SE BASAN EN PLANTAS?</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <h5>
                Creemos que el futuro está en las plantas, vegetales y sobre todo vemos en los <strong>frutos secos</strong> un potencial único, una densidad nutricional que lo hace el alimento del futuro.
                Estamos orgullosos de decir que estamos completamente libres de productos cárnicos y siempre lo será.
                </h5>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>¿ES KETO?</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <h5>
                Un producto Keto se basan en un plan alimenticio bajo en carbohidratos y rico en grasas y proteínas.<br />
                <strong>Productos keto son:</strong> 
                    <ul>
                        <li>Inmunonuts Ciboulette E</li>
                        <li>Shitaki Z</li>
                        <li>Ahumado kids</li>
                        <li>Mediterraneo</li>
                        <li>Caju Mex</li>
                        <li>Del sur</li>
                    </ul>
                </h5>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <strong>¿SON PRODUCTOS FRESCOS?</strong>
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h5>
                    Si, todos nuestros Untanuts son <strong>raw-food</strong>, por lo que sus propiedades nutritivas se conservan un 100%.
                  </h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
