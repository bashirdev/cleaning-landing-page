import { clientLogo } from "../constant"


const Ourclient = () => {
  return (
   <section className='pl-[150px] pr-[150px] py-20 text-center'>
       <div className='text-center'>
         <h2 className='text-blackColor font-semibold text-[32px]'>Our Proven <span className='text-greenColor font-semibold text-[32px]'>Success</span></h2>
         <p className='max-w-[400px] text-center block m-auto font-raleway'>We have extensive experience working with a wide variety of organizations all across the world.</p>
       </div>
       <div className='flex justify-between items-center gap-3 mt-10 overflow-hidden whitespace-nowrap flex-row group'>
        {clientLogo.map(logo=>(
          <div key={logo.id} className='inline-block hover-pause animate-marquee hover-pause'>
              <img src={logo.logo} alt="" />
          </div>
        ))}
       </div>
   </section>
  )
}

export default Ourclient