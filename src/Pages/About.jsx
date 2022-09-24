import React from 'react'
import Pictures from '../components/Pictures'
import '../App.css';

export const About = () => {
  return (
    <div  className="App">
        <div className='d-flex align-items-center mt-3'>
       
        <Pictures/>
        <div className='container w-60'>
            <div className='bg-white fs-3 border border-dark border-4 rounded-4 mt-4' style={{ "transform": "rotate(2deg)"}}>
        <p >
        Hi there! I'm Aleksandra, but if you call me Sasha, I respond quicker. Here I'm sharing with you my true passion - web development!
        My jorney began many years ago when I studied mathematics at Baltic Federal University of Kaliningrad, Russia. Math wouldn't leave me alone for quite a while, so I ended up majoring in math at Bunker Hill Community College, NY. Meawhile, I continued working at health care company as a Payroll Specialist for 9 years. This experience have shaped my strong abilities in communication, logical skills and multitasking. Being a frequent go-to person for compiling business-related reports and software manuals influenced my interest towards exploring any new software that our company would've implemented, especialy its functionality. Becoming a Software Engineer allowed me to to tackle new obstacles and create cutting-edge solutions in a tech-powered world - from debugging system errors with Javascript to creating algorithms using React to infer information. As technology rapidly penetrates every aspect of our lives, I am excited to leverage my analytical nature and inquisitive mindset to create low-cost solutions and technological resources that are accessible and improve the lives of all communities.
        </p>
        <p>Outside of my computer desk you can find me "pseudocoding" my kids daily routines, learning new tricks in photography - another passion of mine, web surfing for anything related to interior design. </p>
        </div>
        </div>
        </div>
        
    </div>
  )
}
