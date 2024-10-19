import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Models = () => {
  useGSAP(()=>{
    gsap.to("#heading",{
      opacity:1,
      y:0,
    })
  },[])
  return (
    <section className='common-paddign'>
      <div className='screen-max-width'>
        <h1 id="heading" className='section-heading'>
          Take a closer look
        </h1>
      </div>
    </section>
  )
}

export default Models