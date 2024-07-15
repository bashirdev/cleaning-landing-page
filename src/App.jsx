import { Aboutus, Contactus, Footer, Hero, Nav, OurExpert, Ourclient, Pricing, Services, Testimonial, Whychooseus } from "./sections/index"



const App = () => {
  return (
    <main className='relative  w-full'>
     <Nav />
     <section  className='py-32'>
         <Hero />
     </section>
     <section  className=''>
         <Aboutus />
     </section>
     <section  className=''>
         <Services />
     </section>
     <section  className=''>
         <Whychooseus />
     </section>
     <section  className=''>
         <Pricing />
     </section>
     <section  className=''>
         <Testimonial />
     </section>
     <section  className=''>
         <OurExpert />
     </section>
     <section  className=''>
         <Contactus />
     </section>
     <section  className=''>
         <Ourclient />
     </section>
     <section  className=''>
        <Footer />
     </section>
       
    </main>
  )
}

export default App