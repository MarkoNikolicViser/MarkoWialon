import React from 'react'
import ReactDom from 'react-dom'

const Modal=({children, open, OnClose})=> {


    if(!open)
    return null;

    return ReactDom.createPortal(
        <>
        <div onClick={OnClose} className="modal-overlay"/>
        <div className="modal-style">
            <button className="gasi-modal" onClick={OnClose}>&times;</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}
export default Modal;