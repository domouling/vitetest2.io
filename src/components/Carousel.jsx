import React from 'react'

/*IMAGES*/ 
import Banner_1 from '../assets/img/Banner_1.jpg'
import Banner_2 from '../assets/img/Banner_2.jpg'

export const Carousel = () => {
  return (
    <>
        <div className="container-fluid">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={ Banner_1 } className="d-flex w-100" alt="Banner_Home"/>
                </div>
                <div className="carousel-item">
                  <img src={ Banner_2 } className="d-block w-100" alt="armatupack"/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
        </div>
    </>
  )
}
