/* eslint-disable no-constant-condition */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import WhyChooseUsTextContent from '../components/WhyChooseUsTextContent';
import { whyChooseusCenterContent, whyChooseUsContent } from '../constant';
import SectionTitle from './../components/SectionTitle';
import ScrollHandler from './ScrollHandler';


const Whychooseus = () => {
const [curentIndex, setCurrentIndex] = useState(0)
const [isScrolled, setIsScrolled] = useState(false);
const targetRef = useRef(null);
const handleScrollAboveThreshold = () => {
  setIsScrolled(true);
};

const handleScrollBelowThreshold = () => {
  setIsScrolled(false);
};

useEffect(()=>{
  const intervalId=setInterval(()=>{
    setCurrentIndex(prev=> (prev+1) % whyChooseusCenterContent.length)
  },5000)
  return()=> clearInterval(intervalId)
}, [])

  return (
    <section id='chooseus' ref={targetRef} className="bg-[#F0FDF4] w-full py-[80px]  max-container">
      <ScrollHandler 
     threshold={targetRef}
    onScrollAboveThreshold={handleScrollAboveThreshold}
    onScrollBelowThreshold={handleScrollBelowThreshold}

/>
<AnimatePresence mode="wait">
    <motion.div className="max-sm:px-5 pr-[150px] pl-[150px]"
     initial={{ y: 20, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -20, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.5 }: null}
    >
    <SectionTitle topTitle='WHY CHOOSE US' mainTile='Our Expertise Making Your' 
    mainTileHighlight='Business'
    mainTitleLasttext='Shine' />

     <div className="flex justify-between items-start max-lg:flex-col  p-0 gap-6 mt-10 w-full">
  {/* leftContent */}
       <div className='w-[30.5%] max-md:w-full max-lg:w-full '>
         {whyChooseUsContent[0]?.leftContent?.map(content=> <WhyChooseUsTextContent key={content.id} {...content} /> )}
       </div>

       <div className='w-[30.5%]'>
      
      {/* center Content */}
          <div className='flex justify-start items-center gap-2 w-full max-lg:w-[50vw]'>
             <img src={whyChooseusCenterContent[curentIndex]?.img}  alt="image"  
 className={`w-full h-full  transition-opacity duration-1000 ease-in-out ${whyChooseusCenterContent[curentIndex] === curentIndex ? 'opacity-100' : 'opacity-0.5'}`}

             />     
          </div>
 
       </div>
       {/*  RightContent */}
       <div className='w-[30.5%]  max-lg:w-full'>
          {whyChooseUsContent[1]?.rightContent?.map(content=> <WhyChooseUsTextContent key={content.id} {...content} /> )}
       </div>
       
       
     </div>

    </motion.div>
    </AnimatePresence>
    </section>
  )
}

export default Whychooseus