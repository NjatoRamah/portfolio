import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  
} from 'react-icons/fa';
import{FiSend} from "react-icons/fi";
import "./contact.css"
function Contact() {
  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Contacter <span>Moi</span>
      </h2>
      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Mes contact</h3>
          <p className='contact__description'>
            Rejoinez moi si vous avez besoin d'une explication, Je suis toujour à votre disposition. Je peux vous créer des sites d'applications ou des sites vitrines selon votre idées ou si vous avez des opportunités qui viens de votre imagination
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className='info__title'>Email </span>: 
                <h4 className='info__desc'> oramahery@gmail.com</h4>
              </div>
            </div>
            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className='info__title'>Télephone </span>: 
                <h4 className='info__desc'> +261346670196 & +261336114383</h4>
              </div>
            </div>
          </div>
          <div className='contact__socials'>
            <a href='https://www.facebook.com/profile.php?id=100006376694962' className='contact__social-link'>
              <FaFacebookF/>
            </a>
            <a href='https://www.linkedin.com/in/njato-ramahery-134725239/' className='contact__social-link'>
              <FaLinkedin/>
            </a>
            <a href='https://github.com/NjatoRamah' className='contact__social-link'>
              <FaGithub/>
            </a>
            
          </div>
        </div>
        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>

              <input 
                type='text'
                placeholder='Votre nom'
                className='form__control'
              />
            </div>
          
            <div className='form__input-div'>
              <input 
                type='email'
                placeholder='Votre email'
                className='form__control'
              />

            </div>
            <div className='form__input-div'>
              <input 
                type='text'
                placeholder='Votre sujet'
                className='form__control'
              />

            </div>
          </div>
            <div className='form__input-div'>
              <textarea className='form__control textarea' placeholder='Votre message'></textarea>
            </div>
          <button className='button'>Envoyer moi un Message <span className='button__icon contact__button-icon'><FiSend/> </span> </button>
        </form>
      </div>

    </section>
  )
}

export default Contact