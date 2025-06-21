import React from 'react'
import Profile from "../../assets/image/sary.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css'

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='sary' className='home__img' />
      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'><span>Je m'appelle Ramahery Oninjatovo</span>. un développeur web</h1>
          <p className='home__description'>Je viens de Madagascar, et je suis un développeur web en PHP et Javascript. Je maitrise les framework Symfony Laravel et ReactJs et flutter, Je suis passionné d'un informatique et j'improviser pour ma vie</p>
          <Link to='/about' className='button'>
            Apropos de moi {' '} <span className='button__icon'><FaArrowRight /> </span>
          </Link>
        </div>
      </div>
      <div className='color__block'></div>
    </section>
  )
}

export default Home