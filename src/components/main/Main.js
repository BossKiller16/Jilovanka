import React from 'react'
import styles from './penzion.module.css'
import zima from '../album/exterier/zima.jpg'
import leto from '../album/exterier/4k2.jpg'
function Main() {
   return (
      <div className={styles.main}>
         <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-ride="carousel"
         >
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img src={leto} className="d-block w-100 img" alt="..." />
               </div>
               <div className="carousel-item">
                  <img src={zima} className="d-block w-100 img" alt="..." />
               </div>
            </div>
            <a
               className="carousel-control-prev"
               href="#carouselExampleFade"
               role="button"
               data-slide="prev"
            >
               <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
               ></span>
               <span className="sr-only">Previous</span>
            </a>
            <a
               className="carousel-control-next"
               href="#carouselExampleFade"
               role="button"
               data-slide="next"
            >
               <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
               ></span>
               <span className="sr-only">Next</span>
            </a>
         </div>
      </div>
   )
}

export default Main
