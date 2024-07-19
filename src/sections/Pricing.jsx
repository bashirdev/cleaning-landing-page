import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from 'react';
import PricingCard from '../components/PricingCard';
import { pricingContent } from '../constant';
import SectionTitle from './../components/SectionTitle';
import ScrollHandler from "./ScrollHandler";
const Pricing = () => {
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
  <AnimatePresence mode="wait11">

  <motion.section 
  ref={targetRef}
  initial={{ y: 20, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -20, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.5 }: null}
   className=" pt-[80px]">
  <ScrollHandler 

threshold={targetRef}
    onScrollAboveThreshold={handleScrollAboveThreshold}
    onScrollBelowThreshold={handleScrollBelowThreshold}

/>
   <SectionTitle topTitle='PRICING PACKAGE' mainTile='No Extra Hidden Charge! ' 
    mainTileHighlight='Choose!'
    mainTitleLasttext='Your plan' />
  <div className="custom-padding">
  <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-6 place-content-center mt-10'>
    
          {pricingContent?.map((item)=> <PricingCard key={item.id} {...item} /> )}
   
     
  </div>
</div>
  </motion.section>
  </AnimatePresence>
    </>
  )
}

export default Pricing