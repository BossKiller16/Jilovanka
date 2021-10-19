import React, { useState, useEffect } from 'react'
import './galerie.css'
import styles from './galerie.module.css'

import Nastenka from './nastenka'
import Aos from 'aos'
import Resizer from "react-image-file-resizer";

function Galerie() {
   const [click, setClicked] = useState(false)
   const [foto, setFoto] = useState('')
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])
   const cache = {}
   const cache2 = {}
   function Interier(r) {
      r.keys().forEach((key) => (cache[key] = r(key)))
   }

   Interier(
      require.context(
         '../album/interier/pokoj',
         false,
         /\.(png|jpe?g|svg|JPG)$/
      )
   )
  function Exterier(r) {
      r.keys().forEach((key) => (cache2[key] = r(key)))
   }
 
   Exterier(
      require.context(
         '../album/exterier/lowQuality',
         false,
         /\.(png|jpe?g|svg|JPG)$/
      )
   )
   
   const imagesInterier = Object.entries(cache).map((module) => module[1].default)
   const imagesExterier = Object.entries(cache2).map((module) => module[1].default)

   const clicked = (e) => {
      var target = e.target.src

      setClicked(!click)

      setFoto(target)
   }

   return (
      <div className={styles.galerie}>
         <Nastenka />
         <div className={styles.fotky}>
    
         </div>
         <div className={styles.block} data-aos="fade-up">
         <h2 className={styles.nadpis}>
               <span className={styles.first}>Inte</span>rier
            </h2>
            <div className={styles.containerImg}>
                     
                     {imagesInterier.map((image) => (
                        <img alt="a" src={image} onClick={clicked} />
                     ))}
                  </div>

       
            <div>
            
               <div>
               <h1 className={styles.nadpis1}>
               <span className={styles.first}>Exte</span>rier
            </h1>
                  <div className={styles.containerImg}>
                     
                     {imagesExterier.map((image) => (
                        <img alt="a" src={image} onClick={clicked} />
                     ))}
                  </div>

               </div>
            </div>
         </div>

         <div className={click ? 'modular open' : 'modular'} onClick={clicked}>
            <img
               src={foto}
               className={click ? 'fullImg open ' : 'fullImg'}
               alt=""
            />
         </div>
         
      </div>
   )
}

export default Galerie
