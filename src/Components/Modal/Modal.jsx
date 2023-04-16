import React, { useContext } from "react"

import './Modal.scss'

// Context
import { Context } from "../../Context"

export default function Modal({ children }) {
    // const [activeLink, setActiveLink] = useState(window.location.pathname)
    console.log(children)

    const {closeRef, closeBtnRef, modalRef, formActive, thankActive, activeMoadal } = useContext(Context)

    return (
        <>
        <div className={`modal ${activeMoadal ? 'active' : ''}` } ref={modalRef}>
            <div className="modal__wrapper">
                <div className="modal__content">
                    {formActive !== '/' && formActive && children[0]}
                    {formActive !== '/' && thankActive && children[1]}
                    <button className='modal__close' ref={closeRef} onClick={() => console.log(1)}>&#x2715;</button>
                    <button className="thank__close btn-red" ref={closeBtnRef}>Close</button>
                    {/* {thankActive && <button className="thank__close btn-red" ref={closeBtnRef}>Close</button>} */}
                </div>
            </div>
        </div>
        </>
    )
}


// function closeThank() {
//     return(
//         <button className="thank__close btn-red">Close</button>
//     )
// }