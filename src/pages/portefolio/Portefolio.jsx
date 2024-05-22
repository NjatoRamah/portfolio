import React from 'react'
import PortfolioItem from '../../components/PortfolioItem'
import { portfolio } from '../../data'
import './portefolio.css'

function Portefolio() {
  return (
    <section className='portfolio section'>
        <h2 className='section__title'>Mon <span>Portefolio</span></h2>
        <div className='portfolio__container container grid'>
            {portfolio.map((item)=>{
                return <PortfolioItem key={item.id} {...item}/>
            })}
        </div>
    </section>
  )
}

export default Portefolio