import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import icon from '../assets/icons/rightArrow.png';
import SectionTitle from '../components/SectionTitle';
import ServiceBanner from '../components/ServiceBanner';
import { cardItems, serviceHistory } from '../constant';
import Button from './../components/Button';
import ScrollHandler from './ScrollHandler';
const Services = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const targetRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });
  const handleScrollAboveThreshold = () => {
    setIsScrolled(true);
  };

  const handleScrollBelowThreshold = () => {
    setIsScrolled(false);
  };

  return (<>
    <section ref={targetRef} className="bg-[#F0FDF4] w-full py-[80px] mt-[60px] custom-padding">
    <ScrollHandler 
    threshold={targetRef}
        onScrollAboveThreshold={handleScrollAboveThreshold}
        onScrollBelowThreshold={handleScrollBelowThreshold}

    />
      <AnimatePresence mode="await">
    <motion.div
          initial={{ y: 20, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -20, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.5 }: null}
     className="">
    <SectionTitle topTitle='OUR BEST SERVICES' mainTile='Our Most Popular Cleaning' 
    mainTileHighlight='Services'
    mainTitleLasttext='For You' />

     <div className=" mt-10 flex justify-between items-center flex-wrap gap-6">
     {cardItems.map((item)=>(
      <div key={item.id} className="relative w-[325px] max-md:w-auto max-lg:w-auto max-sm:w-auto   h-full   bg-gray-50 shadow-lg p-6">
       
       <div className="flex items-start justify-start ">
          <img src={item.icon} className='h-full' alt="" srcSet="" />
           <h6 className='font-semibold font-raleway text-[20px] pl-4'>{item.title}</h6>
       </div>
       <p className='pl-[60px] max-w-[280px] text-wrap text-[14px] font-raleway'>{item.description}
       </p>
       <div className="mt-6 flex justify-center items-center">
       <Button icon={icon} text="Read Details"   navButton='transition delay-1 text-center m-auto border border-1 border-greenColor cursor-pointer z-12 py-[13px] px-[32px]  rounded-sm mt-2 text-greenColor text-[16px] font:semibold font-raleway hover:bg-greenColor hover:text-white' href="#home" />
       </div>
     </div>
        ))}
       
       
     </div>

    </motion.div>
    </AnimatePresence>
    </section>
    <section ref={ref} className="relative w-full bg-successStoryBg  bg-center bg-cover ">
   
   
  <div  className="h-[264px] max-sm:h-full max-sm:py-3 flex justify-between items-center flex-wrap custom-padding  ">
    {serviceHistory.map(item=> <ServiceBanner inView={inView} duration={1} endTime={item.title} key={item.id}  {...item} /> )}
    
    </div>

    </section>
     
    </>
  )
}

export default Services