import React, {useContext} from "react"

// scss
import './Thank.scss'

// Context
import { Context } from "../../Context"

// png
import ThankImg from '../../imgs/thank.png'

export default function Thank() {
const {setActiveMoadal} = useContext(Context)

// let closeThank = props.closeThank
let btnCloseModal = document.querySelector('.modal__close')

      if(btnCloseModal) {
        btnCloseModal.addEventListener('click', function() {
          setActiveMoadal(false)
          document.documentElement.classList.remove('look')
        })
      }


    return (
        <>
        <div className="wrapper-form thank">
            <div className="wrapper-form__inner">
            <div className="thank">
                <div className="thank__wrapper">
                    <h4 className="thank__title">Thank you!</h4>
                    <div className="thank__img">
                        <img src={ThankImg} alt="Thank" />
                    </div>
                    <p>We’ll get in touch as soon as possible </p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}