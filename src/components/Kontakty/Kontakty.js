import React, { useEffect } from 'react'
import Nastenka from './KontaktyNastenka'
import styles from './kontakty.module.css'
import Mapa from './Mapa'
import Aos from 'aos'
function Kontakty() {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])


   return (
      <div>
         <Nastenka />

         <div className={styles.info} data-aos="fade-up">
            <ul >
              

    <h3>Kontakt na Nás</h3>
               <li >  <a class={styles.mailto} href="tel:775112341">Telefon: (+420)775 112 341</a></li>
               <li><a class={styles.mailto} href="mailto:info@penzionjilovanka.cz">info@penzionjilovanka.cz</a>


</li>

            </ul>
            <ul>
               <h3>Adresa</h3>
               <li>Chata JÍLOVANKA</li>
               <li>Zdobnice 5</li>
               <li>516 01 Rychnov nad Kněžnou</li>
            </ul>
            <ul>
               <h3>Majitelé a provozovatelé</h3>
               <li>Hana a Vladimír Stýblovi</li>
               <li>IČ: 10855408</li>

            </ul>
         </div>
         <div className={styles.mapa}>
            <Mapa />
         </div>
      </div>
   )
}

export default Kontakty
