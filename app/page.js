"use client"
import MultiActionAreaCard from './card';
import { TypeAnimation } from 'react-type-animation';

import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomizedTimeline from './experiance';

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin,FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Skill from './skill';
import "./globals.css"


export default function Home() {
  useEffect(() => {
    AOS.init({
      
      easing: 'ease-in-out',
      offset: 50,
      delay: 0,
      once: true,
      mirror: false,
       })
 }, [])
  
  
  return (
    
<main className="bg-[#030637] ">

  <section className="min-h-screen">
  <nav className="p-6 mb-12 flex justify-between">
  
<h1 className="text-xl text-white font-bold" data-aos="fade-right" data-aos-duration="2000">--Developer--</h1>
<ul className="flex items-center">
  
  <li><a 
  className="bg-violet-950	 text-white rounded-sm py-2 px-4 ml-8 border-none" data-aos="fade-left" href="https://drive.google.com/file/d/1L1hZU2yP4y_ZnUyGyZnh3VfV2nxNTesP/view?usp=sharing" target='_blank'>Resume</a></li>
</ul>

</nav>
<div>


</div>


<div className="text-center p-10">
<TypeAnimation
  sequence={[
    "Aneesh",
    1000,
    " ",
    1000,
    
  ]}
  speed={300}
  style={{ fontSize: '5em' }}
  repeat={Infinity}
  className="text-white font-sans"
/>
<h3 className="text-2xl text-blue-600 py-2">Front-End <span className="font-bold" data-aos="fade-left" data-aos-duration="2000">Dev</span> </h3>
<p className="text-md py-5 leading-8 text-white">
<TypeAnimation
  sequence={[
    "Crafting seamless and visually stunning web experiences through code and creativity as a Front-End Developer",
    1000,
    "Crafting seamless and visually stunning web experiences through code and creativity as a Front-End Developer ",
    1000,
    
  ]}
  speed={150}
  style={{ fontSize: '1em' }}
 
  className="text-white font-sans"
/>
 
</p>
<a 
  className="bg-violet-950 outline-none shadow-lg shadow-indigo-500/50 text-white rounded-sm py-2 px-4 ml-3 border-none" href="https://wa.me/message/4BT4YXGDU4TNP1" target='_blank' data-aos="zoom-in" data-aos-duration="2000">Contact me</a>
</div>
<div className="text-4xl flex justify-center gap-10  " >
<a href="https://twitter.com/codewithaneesh" target="_blank"data-aos="fade-up" data-aos-duration="1500"><FaSquareXTwitter className="text-zinc-500 " /></a>
<a href="https://www.linkedin.com/in/aneeshmaury/" target="_blank" data-aos="fade-up" data-aos-duration="1800"><FaLinkedin className="text-zinc-500" /></a>
<a href="https://www.youtube.com/@codewithaneesh" target="blank" data-aos="fade-up" data-aos-duration="2100"><FaYoutube className="text-zinc-500" /></a>
<a href="https://github.com/aneeshmaury" target="_blank"data-aos="fade-up" data-aos-duration="2300"><FaGithub className="text-zinc-500" /></a>
</div>
<img src="/images/logo.jpg" alt="logo" className="flex justify-center rounded-full w-80 h-80 mt-10 mx-auto shadow-sm shadow-blue-500/50"   data-aos="zoom-in" data-aos-duration="2000" />

<div className='experiance'>
<h1 className="text-3xl text-black font-bold w-54 text-center rounded-sm shadow-md bg-blue-500 px-4 py-2 m-10" data-aos="zoom-in" data-aos-duration="2000">Experiance & Education</h1>
  <CustomizedTimeline/>
</div>

<div className="skill-container bg-[#030637] rounded-md p-6 h-92 md:flex justify-around">

<div className="skill-section bg-black p-4 rounded-sm md:bg-zinc-950  mt-11  shadow-sm shadow-indigo-500/50">
<h1 className="text-3xl text-black font-bold w-54 text-center rounded-sm shadow-md bg-blue-500 px-4 py-2 m-10" data-aos="zoom-in" data-aos-duration="2000">Tech Stack</h1>

<Skill/>
</div>
<div className="logo-section bg-black p-4 rounded-md mt-6 md:ml-32 shadow-sm shadow-indigo-500/50 ">
  <p className="text-white w-62 p-4 md:w-56 h-56" data-aos="zoom-in" data-aos-duration="2000">
Passionate frontend developer proficient in HTML, CSS, and JavaScript, with expertise in React and Next.js. Transforming ideas into interactive and engaging web experiences.</p>
</div>


</div>

<h1 className="text-3xl text-black font-bold w-54 text-center  bg-blue-500 px-4 py-2 m-10 rounded-md shadow-sm shadow-indigo-500/50" data-aos="zoom-in" data-aos-duration="2000">Projects</h1>

<div className='project-section flex justify-center '>
<MultiActionAreaCard/>

</div>

<div className='footer-section text-white text-center mt-4 pb-5'>Aneesh@24</div>


 
  </section>





</main>
   
  )
}
