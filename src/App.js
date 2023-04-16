import React, { useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'

import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Feature from './Components/Feature/Feature'
import Company from './Components/Company/Company'
import LegalInfo from './Components/Legal-info/LegalInfo'
import PrivacyPolicy from './Components/Legal-info/PrivacyPolicy'
import TermsService from './Components/Legal-info/TermsService'
import Footer from './Components/Footer/Footer'

// Conntext
import {Context} from './Context'


function App() {
const [headerHeight, setHeaderHeight] = useState(null)
const [activeLink, setActiveLink] = useState(window.location.pathname)
const [formActive, setFormActive] = useState(true)
const [thankActive, setThankActive] = useState(false)
const [activeMoadal, setActiveMoadal] = useState(false)
const [btnClose, setBtnClose] = useState(null)
// const [modal, setMoadal] = useState(document.querySelector('.modal'))
  
let formRef = useRef(null)
let modalRef = useRef(null)
let closeRef = useRef(null)
let closeBtnRef = useRef(null)
let contactUsRef = useRef(null)

function btnCloseElement(element) {
  setBtnClose(element)
  console.log(btnClose)
}

function scrollForm() {
  if(formRef.current) {
    if(activeLink === '/') {

      let stoppingPoint = formRef.current

      let scroll = stoppingPoint.getBoundingClientRect().top

      window.scrollBy({
        top: scroll - (headerHeight.clientHeight + 10),
        behavior: 'smooth'
      })
    } else {
      let modal = modalRef.current

      setActiveMoadal(true)
      document.documentElement.classList.add('look')

      modal.addEventListener('click', function() {
        setActiveMoadal(false)
        document.documentElement.classList.remove('look')

        modal.addEventListener('transitionend', () => {
          setFormActive(true)
          setThankActive(false)
        })
      })

      closeRef.current.addEventListener('click', function() {
        setActiveMoadal(false)
        document.documentElement.classList.remove('look')

        modal.addEventListener('transitionend', () => {
          setFormActive(true)
          setThankActive(false)
        })
      })


      closeBtnRef.current.addEventListener('click', function() {
        setActiveMoadal(false)
        document.documentElement.classList.remove('look')

        modal.addEventListener('transitionend', () => {
          setFormActive(true)
          setThankActive(false)
        })
      })


      let modalContent = modal.querySelector('.modal__content')


      if(modalContent) {
        modalContent.addEventListener('click', (e) => e.stopPropagation())
      }
      
    }
  }
}

function scrillContactUs() {
  let top = contactUsRef.current.getBoundingClientRect().top

  window.scrollBy({
    top: top,
    behavior: 'smooth'
  })
}

function goBack() {
  window.history.back()
}

  return (
    <Context.Provider 
    value={{ 
      scrollForm, 
      closeBtnRef, 
      closeRef, 
      formRef, 
      modalRef, 
      contactUsRef,
      scrillContactUs,
      setHeaderHeight, 
      formActive, 
      setFormActive, 
      thankActive, 
      setThankActive, 
      activeMoadal, 
      setActiveMoadal, 
      btnCloseElement 
      }}>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/feature' element={<Feature />}/>
            <Route path='/company' element={<Company />}/>
            <Route exact path='/privacy-policy' element={<LegalInfo><PrivacyPolicy/></LegalInfo>}/>
            <Route exact path='/terms-service' element={<LegalInfo><TermsService/></LegalInfo>}/>
            <Route path='*' 
            element={
            <div className='page-error _container _section-title' 
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
            >
              <span>No page found!!!</span>
              <button
              style={{
                marginTop: 24,
                fontSize: 16,
                border: "none"
              }}
               onClick={goBack} 
               className='btn-red'
               >Go Back</button>
            </div>
            }/>
          </Routes> 
          <Footer/>
      </div>
    </Context.Provider>
  );
}

export default App;
