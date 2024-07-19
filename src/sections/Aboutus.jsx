import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from 'react';
import mark from "../assets/icons/mark.png";
import aboutCir from '../assets/images/weCirImage.png';
import aboutImg from '../assets/images/weHeroImage.png';
import ScrollHandler from "./ScrollHandler";

const Aboutus = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const targetRef = useRef(null);
  const handleScrollAboveThreshold = () => {
    setIsScrolled(true);
  };

  const handleScrollBelowThreshold = () => {
    setIsScrolled(false);
  };

  return (
    <section ref={targetRef} 
    className='relative custom-padding w-full'
    >
    <ScrollHandler 

    threshold={targetRef}
        onScrollAboveThreshold={handleScrollAboveThreshold}
        onScrollBelowThreshold={handleScrollBelowThreshold}

    />
    <div className=" flex justify-center items-start gap-6 p-0 max-lg:flex-col max-lg:items-center max-lg:w-full  ">
    <AnimatePresence mode="wait1">
        <motion.div 
          initial={{ y: 30, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -30, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.5 }: null}
        className="relative flex items-center justify-center  max-lg:w-full ">
       
          <img 
         
           src={aboutImg} alt="" className='w-full h-full  rounded-md  ' />
          <div className='absolute -right-5 -top-5 '>
          <img src={aboutCir} alt="" className='w-full h-full rounded-md' />
          </div>
          <div className='absolute -bottom-[37px] m-auto  bg-greenColor w-[309px] h-[121px]'>
               <div className="flex justify-center items-center w-full min-content gap-10">
                   <p className='text-center max-w-[75px] text-white leading-6'><span className='text-4xl font-bold text-yellow-400'>5+</span> <br/> Years of Experience</p>
                   <hr className='w-[3px] h-[100px] bg-yellowColor mt-3' />
                   <p className=' max-w-[75px] font-semibold text-lg text-white leading-8 text-start'>Approved Cleaning Service</p>
               </div>   
          </div>
       
        </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='await2'>
        <motion.div
         initial={{ y: 10, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -10, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.9 }: null}
         className="relative flex items-start justify-start w-[50%] max-lg:w-[100%] max-lg:mt-12
         flex-col max-md:w-full max-md:items-center max-md:justify-center max-md:pt-12">
             <p className='font-raleway text-1 font-semibold capitalize bg-[#DCFCE7] text-greenColor py-[6px] px-[10px] rounded-full'>WHO WE ARE?</p>
          <h2 className='text-[32px] font-bold font-raleway text-wrap'>Professional Quality Cleaning with Professional Touch</h2>
          <p className='text-base font-raleway text-wrap text-[#525252] leading-8 '> <span className='font-semibold text-base text-blackColor'>From CleanSwift </span>, Services where innovation and efficiency meet, greetings! We at CleanSwift understand how important it is to have a tidy house or place of business. We have been moving locations and satisfying consumers since 2018 by providing unparalleled service and a passion for cleanliness.</p>
          <div className="flex flex-col justify-start items-start gap-3 mt-1 w-full">

          <div className='flex justify-center items-center gap-2 text-base text-grayColor'>
              <img src={mark} className="w-[32px] h-[32px]" alt=""  />
              <p>Client-Centric Approach</p>
          </div>
          <div className='flex justify-center items-center gap-2 text-base text-grayColor'>
          <img src={mark} className="w-[32px] h-[32px]" alt=""  />
              <p>Quality Assurance</p>
          </div>
          <div className='flex justify-center items-center gap-2 text-base text-grayColor'>
          <img src={mark} className="w-[32px] h-[32px]" alt=""  />
              <p>Experienced Team</p>
          </div>
         
          </div>
        </motion.div>
        </AnimatePresence>
    </div>
     
    </section>
  )
}

export default Aboutus