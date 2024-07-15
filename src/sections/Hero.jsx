import play from "../assets/icons/play.png"
import heroImg from '../assets/images/HeroImage.png'
import centerBlur from '../assets/images/blurHero.png'
import yellowBlur from '../assets/images/yellowBlur.png'
import Button from "../components/Button"

const Hero = () => {
  return (
    <section id='home'
     className='relative max-container custom-padding '>
   <div className="flex items-start justify-start flex-col relative">
     <div className=' z-10'>
     <p className='text-sm font-raleway font-semibold py-3'>PROFESSIONAL CLEANING</p>
         <h1 className='font-poppins font-bold text-[56px] text-greenColor max-md:text-[45px] max-sm:text-[32px] max-xs:text-[32px]'>Best Cleaning & <br/> Quality Control</h1>
       <p className='pt-2 pb-3 text-grayColor max-md:p-3 max-md:max-w-[500px] rounded-sm max-md:bg-opacity-custom font-raleway text-[16px] leading-7 max-w-[558px]'>
           Working with CleanSwift has been a rewarding experience, providing me with an opportunity to contribute my skills to a dynamic and customer-focused cleaning service company.
       </p>
      <div className="flex justify-center items-center gap-2 z-10">
         <Button text="Book Online"  navButton='bg-yellowColor cursor-pointer z-12 py-[13px] px-[32px] w-full rounded-sm mt-2 text-blackColor text-[14px] font:bold' href="#home" />
            <img className='mt-2 w-full h-full  inline-block' src={play} alt="play button"  />
        </div>
     </div>
   
 </div>
 <div className='absolute  z-0 -top-[150px] right-0 max-lg:left-0 max-lg:m-auto max-md:w-[100vw]   '>

   <img src={heroImg}  className='w-[611px] h-[663px] z-0' alt="" srcSet="" />
 </div>
   <div className='absolute mx-auto max-lg:hidden   -top-[150px] z-2  overflow-hidden'>
   
      <img src={centerBlur} className='w-full h-full ' alt="" />
    
   </div>

   <div className='absolute left-0  -top-[150px] z-9 rounded-full'>
      <img src={yellowBlur} className='w-full h-full ' alt="" srcSet="" />
   </div>
    </section>
  )
}

export default Hero