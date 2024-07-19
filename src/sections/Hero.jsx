import { motion } from "framer-motion"
import { useState } from 'react'
import play from "../assets/icons/play.png"
import heroImg from '../assets/images/HeroImage.png'
import centerBlur from '../assets/images/blurHero.png'
import video from '../assets/images/video.mp4'
import yellowBlur from '../assets/images/yellowBlur.png'
import Button from "../components/Button"
import Modal from '../components/Model'
const Hero = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const videoId='M7lc1UVf-VE'
  const handleOpenModal = () => {
    setIsModalVisible(true);
  }

  const handleCloseModal = () => {
    setIsModalVisible(false);
  }
  return (
    <section id='home'
     className='relative  custom-padding w-full '>
   <div className="flex items-start justify-start flex-col relative">
     <motion.div className=' z-10' 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
     >
     <p className='text-sm font-raleway font-semibold py-3'>PROFESSIONAL CLEANING</p>
         <h1 className='font-poppins font-bold text-[56px] text-greenColor max-md:text-[45px] max-sm:text-[32px] max-xs:text-[32px]'>Best Cleaning & <br/> Quality Control</h1>
       <p className='pt-2 pb-3 text-grayColor max-md:p-3 max-md:max-w-[500px] rounded-sm max-md:bg-opacity-custom font-raleway text-[16px] leading-7 max-w-[558px]'>
           Working with CleanSwift has been a rewarding experience, providing me with an opportunity to contribute my skills to a dynamic and customer-focused cleaning service company.
       </p>
      <div className="flex justify-start items-center gap-2 z-10">
         <Button text="Book Online"  navButton='bg-yellowColor cursor-pointer text-center z-12 py-[13px] px-[32px] rounded-sm mt-2 text-blackColor font-semi-bold duration-500 ease-in-out hover:bg-greenColor hover:text-[#f3f3f3] text-[14px] font:bold' href="#home" />
            <img onClick={()=> handleOpenModal()} className='mt-2 z-40   inline-block' src={play} alt="play button"  />
        </div>
     </motion.div>
     <Modal 
        isVisible={isModalVisible} 
        onClose={handleCloseModal} 
        videoUrl={video}
      />
   
 </div>
 <div className='absolute  z-0 -top-[150px] right-0  max-lg:m-auto max-lg:block max-md:block max-md:w-[80vw] max-sm:hidden  '>

   <motion.img src={heroImg}  className='w-[611px] h-[663px] z-0' alt="" srcSet="" 
    animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
       
        repeatDelay: 1
      }}
    />
 </div>
   <div className='absolute mx-auto    -top-[150px] z-2  overflow-hidden'>
   
      <img src={centerBlur} className='w-full h-full ' alt="" />
    
   </div>

   <div className='absolute left-0  -top-[150px] z-9 rounded-full '>
      <img src={yellowBlur} className='w-full h-full ' alt="" srcSet="" />
   </div>
    </section>
  )
}

export default Hero