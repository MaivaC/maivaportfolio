import React from 'react'
import './header.css'
import headerSocial from './headerSocial'
import CTA from './CTA'
export default function Header() {
  return (
    <div className='info'>
      <h5>Hello I'm</h5>
      <h1>Glen Makoge</h1>
      <h5 className='text-light'>Software Engineer </h5>
      <CTA />
      <div className='my_image'>
        <headerSocial />
        <img src="" alt="" />
      </div>
      <a href='#contact' className='scroll__down'>Scroll down</a>
    </div>
  )
}
