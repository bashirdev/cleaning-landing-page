import { Aboutus, Contactus, Footer, Hero, OurExpert, Ourclient, Pricing, Services, Testimonial, Whychooseus } from "./sections/index";
import Nav from "./sections/Nav";
// src/index.js
import 'leaflet/dist/leaflet.css';
// import React, { createContext, useEffect, useState } from 'react';
// export const LocalStorageContext = createContext();

const App = () => {
//     const [localStorageData, setLocalStorageData] = useState({});
//  console.log(localStorageData)
//     useEffect(() => {
//       const data = JSON.parse(localStorage.getItem('positions')) || {};
//       setLocalStorageData(data);
//     }, []);
  return (
    <main className='relative  w-full'>
     <Nav />
     <section id='home'  className='py-32'>
         <Hero />
     </section>
     <section id='aboutus'  className='mt-12 max-md:-mt-10'>
         <Aboutus />
     </section>
     <section id='services'  className=''>
         <Services />
     </section>
     <section  className=''>
         <Whychooseus />
     </section>
     <section id='pricing' className=''>
         <Pricing />
     </section>
     <section  className=''>
         <Testimonial />
     </section>
     <section  className=''>
         <OurExpert />
     </section>
     <section id='contactus' className=''>
         <Contactus />
     </section>
     <section  className=''>
         <Ourclient />
     </section>
     {/* <section id='map'>
        <MapView />
     </section> */}
     <section  className=''>
        <Footer />
     </section>
       
    </main>
  )
}

export default App