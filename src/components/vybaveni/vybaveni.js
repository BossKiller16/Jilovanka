import VybaveniNastenka from './vybaveniNastenka'
import Aos from 'aos'
import React, { useEffect } from 'react'

import style from "./vybaveni.module.css"
function Vybaveni() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
     }, [])
    return (
        <div>
            <VybaveniNastenka/>
<div>
<div className={style.aktivity} data-aos="fade-up">
            <h1 className={style.nadpis}>
               <span className={style.first}>První</span> patro
            </h1>
        
            <ul>
           <h3 className={style.h3}>Nabízíme vám ubytování v 10-ti pokojích.</h3> 
<li>

3x dvojlůžkových
</li>
<li>

4x čtyřlůžkových 
</li>
<li>

1x pětilůžkový family room- ve dvou pokojich (3+2) -společné soc.zařizení
</li>
<li>
    
1x sedmilůžkový family room  - ve dvou pokojích (5+2) - společné soc zařízení
</li>
<li>
    
Celková kapacita 34 osob.
</li>
<li>

	Každý pokoj je vybaven vlastním sociálním zařízením.
</li>
<li>

WiFi je k dispozici zdarma v celém objektu.
</li>
<li>

Možnost postýlek pro malé děti
</li>

</ul>

            <h1 className={style.nadpis}>
               <span className={style.first}>Pří</span>zemí
            </h1>
            <ul>
<li>

Veranda s posezením a dětským koutkem
</li>
<li>

Jídelna s výčepem (včetne chlazení a naražečů na KEG sudy)
</li>
<li>

Kompletně vybavená prostorná kuchyň  
</li>
<li>
    
WC - dámske panské
</li>
<li>
    
Parkování pro hosty je možné na přilehlém parkovišti zdarma.
</li>



</ul>
<h1 className={style.nadpis}>
               <span className={style.first}>Ven</span>kovní terasa
            </h1>
            <ul>
                <li>Terasa s posezením
</li>
<li>Možnost grilování a opékaní buřtů</li>
            </ul>

<h1 className={style.nadpis}>
               <span className={style.first}>Co</span> na chatě není?
            </h1>
            <ul>
                <li>            ručníky, prášek do pračky, tablety do myčky nádobí, utěrky
</li>

            </ul>


</div>

</div>
        </div>
        
    )
}

export default Vybaveni
