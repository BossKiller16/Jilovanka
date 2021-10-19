import React, { useEffect } from 'react'
import style from './uvod.module.css'
import Aos from 'aos'
function Uvod() {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])
   return (
      <div className={style.texty} data-aos="fade-up">
         <h1 className={style.nadpis}>
            <span className={style.chata}>Chata</span> Jílovanka
         </h1>
         Vítáme Vás, 
            <br />  Chata Jílovanka nabízí ubytování pro menší i větší skupiny (až 34 osob).
Na chatě je 10 pokojů, každý s vlastním sociálním zařízením (WC, sprchový
kout, umyvadlo se zrcadlem). Přivítá vás slunná veranda s dětským
koutkem a španělským fotbálkem pro dospělé. V letních měsících posezení
na venkovní terase s možností grilování či opékaní na ohni. Dále využijte
jídelnu v restauračním stylu s barem (půllitry, sklenice na víno, sklenice na
vodu atd). Zde naleznete dva dřezy, prostorný pult s klasickou pípou s
vlastním chlazením. Krb kde si můžete zatopit (dřevo si u nás můžete
zakoupit), v přízemí jsou i WC dámské i panské.
Nebylo by domu, bez kuchyně. Velká prostorná kuchyně kde k plnému
využití jsou : 2x indukční sporák s troubou, mikrovlná trouba, velká profi
lednice 600 l, myčka na nádobí, 2x dřez, pračka. Vybavení kuchyně: hrnce,
talíře, misky, příbory atd, sklenice a hrnky, vše v dostatečném množství.
Možnost večeří po individuální domluvě.
Společenské místnosti se dají využít i k pořádání firemních akcí či školení,
svateb a oslav.
 O topení nemusíte mít starost, o to se postarají majitelé, kteří obývají
oddělenou sekci domu.
Ceny jsou platné dle ceníku, nejsou účtovány další poplatky (energie,
voda, atd) 

<ul className={style.uvodos}>
   <li>v krásném a klidném prostředí podhůří Orlických hor
</li>
   <li>k pronájmu pro uzavřené skupiny
</li>
<li> vhodné pro rekreanty, workshopy, kurzy, semináře, školení 

</li>
</ul>
      </div>
   )
}

export default Uvod
