import React,{useState,useEffect} from 'react'
import { render } from 'react-dom';
import Modal from './ModalInput'

const Legenda=()=>{

const[firma,setFirma]=useState("");
const[komentar,setKomentar]=useState("");
const[pretragaLegende,setPretragaLegende]=useState("");

const[legenda,setLegenda]=useState([{
    firma:"",
    komentar:""
}])
useEffect(() => {
    setLegenda([{firma:"Standard", komentar:"Slati mail"},{firma:"ARC", komentar:"Plac kružni tok Voždovac"},{firma:"Novo Plus", komentar:"plac Zelengora"}])
}, [])
const[isOpen,setIsOpen]=useState(false)

const OnClose=()=>{
    setIsOpen(false);
}
const LegendaFilter=(e)=>{
    setPretragaLegende(e.target.value)
}

const UnosNoveFirme=(e)=>{
    setFirma(e.target.value)
}
const UnosNovogKomentara=(e)=>{
    setKomentar(e.target.value)
}
const CuvanjeKomentara=(e)=>{
    e.preventDefault()
    setLegenda(prevstate=>([...prevstate,{firma:firma,komentar:komentar}]))
    setFirma("");
    setKomentar("");
}
const FilteredLegends=legenda.filter(legend=>{
  return legend.firma.toLowerCase().includes(pretragaLegende.toLowerCase())
})



    return(
        <div className="legenda">
            <div className="unos">
            <input onChange={LegendaFilter} placeholder="Pretraga legende" type="text"/>
            <span onClick={()=>setIsOpen(true)}>+</span>
            </div>
            <ul>
            {FilteredLegends.map(legend=>{
                return <li key={legend.firma}>
                    <h6>{legend.firma}</h6>
                    <h6>{legend.komentar}</h6>
                </li>
            })}

            </ul>
            <div className="modal-wraper">
                <Modal  open={isOpen} OnClose={OnClose}>
                    <h1>Unesi novi komentar u legendu</h1>
                    <form onSubmit={CuvanjeKomentara}>
                        <input value={firma} required onChange={UnosNoveFirme} placeholder="Naziv firme" type="text"/>
                        <textarea value={komentar} required onChange={UnosNovogKomentara} placeholder="Komentar" ></textarea>
                        <button>Unesi</button>
                    </form>
                    </Modal>
                    </div>
        </div>
    )
}
export default Legenda;