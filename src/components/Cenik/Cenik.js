import React, { useEffect } from 'react'
import CenikNastenka from './CenikNastenka'
import style from "./Cenik.module.css"
import Aos from 'aos'
function Cenik() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
     }, [])
    return (
        <div>
            <CenikNastenka/>
            <div className={style.aktivity} data-aos="fade-up">
            <h1 className={style.nadpis}>
               <span className={style.first}>Léto</span> 2021
            </h1>
            <ul>

          <h3 className={style.h3}>Týden - 7 nocí  - vždy od něděle do něděle - pokud je jiny požadavek vždy potřeba individualně domluvit</h3>  
            <li>
            týden   59 500,-Kč

            </li>
            <li>
            2 noci 19 000,-Kč

            </li>
            <li>
            3 noci 27 500,-Kč

            </li>
            <li>
            4 noci 36 500,-Kč

            </li>

            </ul>


      <h1 className={style.nadpis}>
               <span className={style.first}>Zima</span> 2021/2022
            </h1>
            <ul>
            <li>
                              týden 64 000,-Kč
  
                    </li> <li>
                    2 noci 20 500,-Kč

                    </li> <li>
                    3 noci 29 500,-Kč

                    </li>
                    <li>4 noci 39 000,-Kč
</li>
                    <li>v den příjezdu je vybíraná kauce v hotovosti 5000,- vratná v den odjezdu po předaní nemovitosti.
</li>
                    <li>poplatky obce dle vyhlášky
</li>
<li>nejsou účtovány žadné další poplatky za energie.
</li>
            </ul>
            <h1 className={style.nadpis}>
               <span className={style.first}>Mimo</span> sezona
            </h1>
            <ul>
                <li>
duben, květen, řijen, listopad.
-20% ze zimních cen.

                </li>

            </ul>


          
            <h1 className={style.nadpis}>
               <span className={style.first}>Osta</span>tní
            </h1>  

            <ul>
               
                <li>    Nekuřácký prostor
                    
</li><li>
                Zákaz vstupu domácím mazlíčkům
</li>
                <li>Možnost večeří po individualní domluvě 
</li>
                <li>V případě jiných požadavků nás neváhejte kontaktovat, pokusíme se Vám vyjít vstříc.
</li>
                <li>Vlastník bydlí v nemovitosti v oddělené sekci domu.</li>
                </ul> 

              
            </div>
            </div>
 
    )
}

export default Cenik
