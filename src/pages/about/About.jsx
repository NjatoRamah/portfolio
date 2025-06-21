import React from 'react';
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import {FaDownload} from 'react-icons/fa';
import CV from '../../assets/image/CV ramahery oninjatovo.pdf';
import './about.css'
import Skills from '../../components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../components/ResumeItem';
import Profile from "../../assets/image/sary.jpg"

function About() {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section__title'>Apropos de <span>Moi</span></h2>
        <div className='about__container grid'>
          <div className='about__info'>
            <h3 className='section__subtitle'>Information Personnel</h3>
            <ul className='info__list grid'>
              <Info/>
            </ul>
            <a href={CV} download='' className='button'>Télécharger mon Cv <span className='button__icon'><FaDownload/></span></a>
          </div>
          <div className='stats grid'>
            {/* <Stats/> */}
            <img src={Profile} alt='sary' className='home__img' />
          </div>
        </div>
      </section>

      <div className='separator'></div>
      <section className='skills'>
        <h3 className='section__subtitle subtitle__center'>Mes Connaissances {/* my skills*/} </h3>
        <div className='skills__container grid'>
          <Skills/>
        </div>
      </section>
      <div className='separator'></div>
      <section className='resume'>
        <h3 className='section__subtitle subtitle__center'>Expérience & Education {/* my skills*/} </h3>
        <div className='resume__container grid'>
          <div className='resume__data'>
            {resume.map((val)=>{
              if (val.category === 'experience'){
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className='resume__data'>
            {resume.map((val)=>{
              if (val.category === 'education'){
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>

    </main>
  )
}

export default About