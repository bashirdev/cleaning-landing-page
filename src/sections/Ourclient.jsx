import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from 'react';
import { clientLogo } from "../constant";
import ScrollHandler from './ScrollHandler';

const Ourclient = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const targetRef = useRef(null);
const handleScrollAboveThreshold = () => {
  setIsScrolled(true);
};

const handleScrollBelowThreshold = () => {
  setIsScrolled(false);
};
  return (
   <section ref={targetRef} className='custom-padding py-20 text-center'>
     <ScrollHandler 
     threshold={targetRef}
    onScrollAboveThreshold={handleScrollAboveThreshold}
    onScrollBelowThreshold={handleScrollBelowThreshold}

/>
<AnimatePresence mode='awit'>

       <motion.div
         initial={{ y: 25, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -25, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.5 }: null}
        className='text-center'>
         <h2 className='text-blackColor font-semibold text-[32px]'>Our Proven <span className='text-greenColor font-semibold text-[32px]'>Success</span></h2>
         <p className='max-w-[400px] text-center block m-auto font-raleway'>We have extensive experience working with a wide variety of organizations all across the world.</p>
       </motion.div>
</AnimatePresence>
       <div className='flex justify-between items-center gap-3 mt-10 overflow-hidden whitespace-nowrap flex-row group'>
        {clientLogo.map(logo=>(
          <div key={logo.id} className='inline-block w-full h-full object-cover hover-pause animate-marquee hover-pause'>
              <img src={logo.logo} alt="" />
          </div>
        ))}
       </div>
   </section>
  )
}

export default Ourclient