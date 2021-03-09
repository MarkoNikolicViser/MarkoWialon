import React from 'react'

const LegendaBoja=()=>{

    return(
        <ul className="legenda-boja">
        <li>
          <div className="boja1"></div>
          <label htmlFor="boja1">Zvati korisnika</label>    
        </li>
        <li>
          <div className="boja6"></div>
          <label htmlFor="boja6">Info od korisnika</label>    
        </li>
      <li>
          <div className="boja2"></div>
          <label htmlFor="boja2">Otvoren tiket za servis</label>
        </li>
        <li>
          <div className="boja3"></div>
          <label htmlFor="boja3">Ispratiti vozilo</label>       
        </li>
        <li>
          <div className="boja4"></div>
          <label htmlFor="boja4">Informacija iz legende</label>         
        </li>
        <li>
          <div className="boja5"></div>
          <label htmlFor="boja5">Prelazak granice</label>         
        </li>
        </ul>
    )
}
export default LegendaBoja;