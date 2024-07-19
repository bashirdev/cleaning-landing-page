import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from 'react';
import ExpertsCard from "../components/ExpertsCard";
import SectionTitle from "../components/SectionTitle";
import { cleanerExperts } from "../constant";
import ScrollHandler from './ScrollHandler';


const OurExpert = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const targetRef = useRef(null);
const handleScrollAboveThreshold = () => {
  setIsScrolled(true);
};

const handleScrollBelowThreshold = () => {
  setIsScrolled(false);
};
  return (
    <>
 <AnimatePresence mode='awit'>

   <motion.section ref={targetRef}
    initial={{ y: 20, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -20, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.5 }: null}
    className='custom-padding py-20'>
     <ScrollHandler
threshold={targetRef}
    onScrollAboveThreshold={handleScrollAboveThreshold}
    onScrollBelowThreshold={handleScrollBelowThreshold}

/>
      <SectionTitle  titleId='ourExpert' changeStyle='changeStyle ' topTitle='OUR EXPERTS' mainTile='Meet Our Professional' 
    mainTileHighlight='Cleaners'
    mainTitleLasttext='' />
       <div className="flex justify-between items-center max-sm:flex-col gap-6">
          {cleanerExperts.map(item=>(
            <div key={item.id} className='mt-[40px] text-center  bg-[#f3f3f3]  rounded-md overflow-hidden shadow-md'>
                <ExpertsCard  {...item} />
          </div>
          ))}
          
       </div>

   </motion.section>
 </AnimatePresence>
    </>
  )
}

export default OurExpert