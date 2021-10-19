import React, {  useEffect } from 'react'
import Nastenka from './AktivityNastenka'
import style from './aktivity.module.css'
import Aos from 'aos'

function Aktivity() {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])
   return (
      <div>
         <Nastenka />
         <div className={style.aktivity} data-aos="fade-up">
            <h1 className={style.nadpis}>
               <span className={style.first}>Letní</span> Aktivity
            </h1>
            <p>
            Jsou zde ideální podmínky pro turistiku a cykloturistiku. Hlavní            
               trasy se táhnou hřebenem Orlických hor, na který je možné vyjet i 
               autem nebo cyklobusem. Zdobnice se nachází přímo v srdci chráněné krajinné oblasti Orlické hory a ve středu hlavní cyklotrasy spojující Deštné v Orlických horách , Říčky a Bartošovice. Na své si zde přijdou i milovníci houbaření.
               V obci je nové veřejné dětské hřiště se samoobslužným barem U zdobnických čertů, přímo u treningové trasy pro singltrack Zdobice. Kde naleznete servisní stanici pro kola a dobijeci stanici elektrokol - včetne posezeni.
 </p>

 <h1 className={style.nadpis}>
               <span className={style.first}>Zimní</span> Aktivity
            </h1>

            <p>
               V zimních měsících máme zde od Chaty 300m skvělé lyžařské
               středisko Ski centrum Zdobnice, které nabízí celkem čtyři sjezdovky a tři lyžařské vleky. Dostatek sněhu zajišťuje výkonný systém umělého zasněžování. Samozřejmostí je půjčovna a servis lyží,lyžařská škola a školka s vlastním provazovým vlekem. Poloha ve středu chráněné krajinné oblasti Orlické hory je rovněž výhodná pro mylovníky běžek. K 220 kilometrům strojově upravovaných běžěckých tras je od roku 2014 upravován i Zdobnický okruh, který spojuje Zdobnici s obcí Říčky v Orlických horách.
            </p>


            <p>

         Hrad Potštejn
Kostelec nad Orlicí,
Rychnov nad kněžnou,
Zámek Opočno,
Hospital Kuks,
Zámek Náchod,
Zámek Nové Město nad Metují,
Zámek Častelovice,
Zámek Doudleby,
Hrad Litice,
Hrad Počtejn,
Hrad Žampach,
Hrad Kunětická hora,
Villa Nova Uhřínov,
Třebechovické muzeum Betlémů,
Muzeum stavebnice Merkur Police nad Metují,
Muzeum Boženy Němcové Česká Skalice,
První vojenskohistorické muzeum M. Frosta,
Podorlický skanzen Krňovice,
Hořiněves - rodný dům Václava Hanky,
Muzeum řemesel Nový Dvůr – Letohrad,
Muzeum krajky Vamberk,
Dělostřelecká tvrz Hanička,
Dělostřelecká tvrz Bouda,
Pěchotní srub K-S5 "U Potoka, 
            </p>
      </div>
         </div>
   )
}

export default Aktivity
