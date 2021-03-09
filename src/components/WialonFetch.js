import React,{useEffect,useRef,useState,useContext} from 'react'
import {TContext} from './context';

const WialonFetch=({name,date,location, position,image,voltage,idVozila})=>{

    const{komentari,lokacija}=useContext(TContext)
    const[komentariValue,setKomentariValue]=komentari;
    const[lokacijaValue,setLokacijaValue]=lokacija;
    const[unitState,setUnitState]=useState(true)
    const[paletaState,setPaletaState]=useState(true);
    const[servisOn,setServisOn]=useState(true);
    const[koment,setKoment]=useState("")
    const[komenti,setKomenti]=useState([])
    const[servis,setServis]=useState("")



    const InfoRef=useRef(null);             ///prikazuje dodatne informacije o vozilu
    const KomentRef=useRef(null);           ///gasi komentar/pali servis
    const PrikazRef=useRef(null);           ///prikazuje komentar
    const PaletaRef=useRef(null);           ///togle za paletu
    const BojaRef=useRef(null);
    const ServisRef=useRef(null);
    const WrenchRef=useRef(null);


    const InputKomentara=(e)=>{
        setKoment(e.target.value)
    }
    const InputKomentaraServisa=(e)=>{
        setServis(e.target.value)
    }
    const SubmitKomentar=(e)=>{
        e.preventDefault()
        setKomenti(prevKomenti=>(
            [...prevKomenti,[koment]]
        ))
        setKoment("");
    }
    const SubmitServis=(e)=>{
        e.preventDefault()
        setKomenti(prevKomenti=>(
            [...prevKomenti,[servis]]
        ))
        setServis("");
    }
    const Komentar=(e)=>{
        PrikazRef.current.style.display="block";
    }
    useEffect(() => {
        setKomentariValue([{
            id:idVozila,
            tiket:"",
            komentar:koment,
            boja:"marko",
            korisnik:"mark"
        }])
    }, [])

    useEffect(() => {
        var d=new Date();
        const diffInMs   = new Date(d) - new Date(date)
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        if(diffInDays>=1)
        BojaRef.current.style.backgroundColor="#ff4646";
    }, [])
  

    const SetLokacija=()=>{
        setLokacijaValue({
            x:position.x,
            y:position.y
        })
        console.log(lokacijaValue)
    };

    const Provera=()=>{
        if(unitState){
          InfoRef.current.style.display="flex";
        setUnitState(false)
        }
        else{
            InfoRef.current.style.display="none";
        setUnitState(true)
        }
    }
    const Servis=()=>{
        if(servisOn){
         ServisRef.current.style.display="block";
        KomentRef.current.style.display="none";
        WrenchRef.current.style.backgroundColor="red";
        setServisOn(false)
        }
        else{
        WrenchRef.current.style.backgroundColor="transparent";
        ServisRef.current.style.display="none";
        KomentRef.current.style.display="block";
        setServisOn(true)
        }
    }

    const Paleta=()=>{
        if(paletaState){
            PaletaRef.current.style.display="flex";
          setPaletaState(false)
          }
          else{
              PaletaRef.current.style.display="none";
          setPaletaState(true)
          }
    }
    const IzborBoje1=(e)=>{
       setKomentariValue([...komentariValue,{
            boja:"#ff4646"
        }])
        BojaRef.current.style.backgroundColor="#ff4646";
    }
    const IzborBoje6=(e)=>{
        BojaRef.current.style.backgroundColor="#7668e6";
    }
    const IzborBoje2=(e)=>{
        BojaRef.current.style.backgroundColor="#ffe227";
    }
    const IzborBoje3=(e)=>{
        BojaRef.current.style.backgroundColor="#16c79a";
    }
    const IzborBoje4=(e)=>{
        BojaRef.current.style.backgroundColor="#6e7c7c";
    }
    const IzborBoje5=(e)=>{
        BojaRef.current.style.backgroundColor="#f8a1d1";
    }

    return(
              <div ref={BojaRef} className="row">
                <div className="osnovne-informacije">
                    <div className="slika-ime">
                  <img onClick={Provera} src={image} alt=""/>
                <h3 className="naziv-vozila" onClick={SetLokacija}>{name}</h3>
                </div>
                <div className="brzina-info">
                {position.s} km/h  {Math.round(voltage/100)/10}V
                
                </div>
                </div>
                <div ref={InfoRef} className="dodatne-informacije">
                <div>
                  <b className="poslednja-poruka">Poslednja poruka:</b>
                  {date}

           
                <form ref={KomentRef} className="koment-form" onSubmit={SubmitKomentar}>
                <svg className="wrench" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.895 10.623l1.37-2.054c.35-.525 1.06-.667 1.585-.317.524.35.667 1.06.316 1.585l-1.369 2.054c-.35.525-1.06.667-1.585.317s-.667-1.06-.317-1.585zm-1.881-.684c.525.351 1.236.208 1.587-.317l1.383-2.074c.352-.526.209-1.237-.317-1.588-.525-.351-1.236-.208-1.587.318l-1.383 2.074c-.352.526-.21 1.237.317 1.587zm7.007 3.949l-1.212 1.817c-.322.483-.191 1.136.292 1.458s1.136.191 1.458-.292l1.211-1.817c.323-.483.192-1.136-.291-1.458-.483-.322-1.136-.192-1.458.292zm-3.071-.84c-.35.523-.208 1.231.315 1.58.524.349 1.231.208 1.58-.316l1.312-1.968c.35-.524.208-1.231-.316-1.58-.523-.349-1.23-.208-1.579.316l-1.312 1.968zm5.665 10.952c-.609 0-1.22-.232-1.686-.698l-7.022-7.144c1.088-1.203.56-3.279-1.182-3.588l-3.074-.546-1.058-1.058c-.601-.6-1.427-.916-2.273-.871-1.382.074-2.787-.417-3.842-1.472-.986-.987-1.478-2.279-1.478-3.572 0-.56.092-1.12.277-1.655l3.214 3.214c1.253.074 3.192-1.865 3.118-3.119l-3.213-3.214c.535-.185 1.094-.277 1.654-.277 1.293 0 2.586.493 3.572 1.479 1.055 1.055 1.545 2.46 1.472 3.842-.045.846.271 1.674.871 2.273l.027.027c-1.243 2.083.433 3.51 1.806 3.457-.247 1.181 1.017 2.411 2.102 2.411-.269 1.04.536 2.125 1.789 2.371-.505 1.822 2.258 3.767 3.857 1.315l2.756 2.755c.466.466.698 1.076.698 1.686 0 1.316-1.066 2.384-2.385 2.384zm.885-2.5c0-.552-.448-1-1.001-1-.552 0-1 .448-1 1s.448 1 1 1c.553 0 1.001-.448 1.001-1zm-9.631-3.939c-.667-.688-1.701-.739-3.584-.864-.286-.019-.462.165-.485.443l-.458 4.208s2.794 1.888 3.94 2.652c1.064-1.921 2.699-2.037 3.921-3.002l-3.334-3.437zm-1.622-1.692c1.457 0 1.678-2.064.303-2.308-5.171-.919-4.899-.889-5.069-.889-.635 0-1.186.453-1.309 1.078l-.446 3.946c-.061.631.145 1.176.633 1.532.487.354 2.026 1.449 2.026 1.449s.328-2.835.42-3.651c.093-.815.551-1.378 1.424-1.335.092.004 1.859.178 2.018.178z"/></svg>
                <input required value={koment} placeholder="Komentar" className="koment" onChange={InputKomentara}></input>
                <button>Unesi</button>
                </form>
                {/* <form ref={ServisRef} className="koment-form" onSubmit={SubmitServis}>
                <input  type="number" placeholder="Unesi broj tiketa" onChange={InputKomentaraServisa} className="servis-koment" ></input>
                <button>Unesi</button>
                </form> */}
                {komenti.map(k=>{
              return  <li key={Math.random()*1000} className="prikaz-komentara">{k}</li>
                    })}
                  </div>
                <div>
                <svg onClick={Paleta} className="brush" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373z"/></svg>
                    <ul ref={PaletaRef} className="color-change">
                        <li onClick={IzborBoje1} className="boja1"></li>
                        <li onClick={IzborBoje6} className="boja6"></li>
                        <li onClick={IzborBoje2} className="boja2"></li>
                        <li onClick={IzborBoje3} className="boja3"></li>
                        <li onClick={IzborBoje4} className="boja4"></li>
                        <li onClick={IzborBoje5} className="boja5"></li>
                    </ul>
                </div>
                </div>
              </div>
    )
}
export default WialonFetch;