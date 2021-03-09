import React, {createContext, useState} from 'react'

export const TContext=createContext();



export const TProvider=(props)=>{
    const[komentari,setKomentari]=useState([{
        id:"",
        tiket:"",
        komentar:"",
        boja:"#ff4646",
        korisnik:""
    }]);
    const[lokacija,SetLokacija]=useState({
        x:20.6011428833,
        y:44.6703948975
    })

    return(
        <TContext.Provider value={{komentari:[komentari,setKomentari],
            lokacija:[lokacija,SetLokacija]
         }}>
            {props.children}
        </TContext.Provider>
    )
}