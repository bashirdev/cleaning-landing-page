
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import cleaner from '../assets/images/cleaner.png';
import { clientReviews } from '../constant';
import SectionTitle from './../components/SectionTitle';
import ScrollHandler from './ScrollHandler';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevClicked, setIsPrevClicked] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const targetRef = useRef(null);
  const handleScrollAboveThreshold = () => {
    setIsScrolled(true);
  };
  
  const handleScrollBelowThreshold = () => {
    setIsScrolled(false);
  };

  const handleNext=()=>{
      const newIndex = currentIndex === clientReviews.length - 1 ? 0 : currentIndex + 1;
     
      setCurrentIndex(newIndex)
      setIsPrevClicked(false);
  setIsNextClicked(true);

   
  }
  const handlePrev=()=>{
    const newIndex = currentIndex === 0 ? clientReviews.length - 1: currentIndex - 1;
    
    setCurrentIndex(newIndex)
    setIsPrevClicked(true);
    setIsNextClicked(false);
  
  }

useEffect(()=>{
const intervalID=setInterval(()=>{
   setCurrentIndex(prev=> (prev+1) % clientReviews.length)
   setIsPrevClicked(false);
   setIsNextClicked(false);
},5000)
return()=> clearInterval(intervalID)
},[])


  return (
      <section ref={targetRef} className='bg-testimonilaBg w-full py-[80px] bg-cover bg-no-repeat bg-center  max-container mt-20'>
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
      className='custom-padding'>
           <div className="flex justify-start items-start flex-wrap gap-6 ">
           {/* Left side */}
           <div className='flex-3 '>
             <SectionTitle sectionId='tesitmonial' topTitle='Testimonial' mainTile='What Our Valued' 
            mainTileHighlight='Customers'
            mainTitleLasttext='Say About Us' />
            <p className='text-[14px] text-[#f3f3f3] max-w-[345px] mt-5 '>
            Discover why our clients trust CleanSwift Services for their cleaning needs. Here are some testimonials from satisfied customers
            </p>
           </div>
                {/* Left side End*/}
           
          <div className="flex-1">
          <div className='flex justify-start items-start flex-wrap relative'>
           <div className='max-w-[271px] max-h-[282px] block   flex-3 max-xl:hidden max-md:hidden max-sm:hidden max-xs:hidden  '>
           <img src={cleaner} className='rounded-tl-md rounded-bl-md object-cover' alt=""  />
           </div>
 <div className='flex-1 relative'>
            {/* <ClientReviewCarousel clientReviews={clientReviews} /> */}
      
{clientReviews?.map((item, index)=>(
    <div key={item.id}
 className={`bg-[#f3f3f3] p-4  w-full h-[282px]   transition-opacity duration-500 ease-in-out ${
          index === currentIndex ? 'opacity-100 block' : 'opacity-0 hidden'
        }`} > 
     <p className='z-10 relative text-[14px] font-medium text-blackColor font-raleway leading-6'><span className='text-greenColor'>{item?.highLigtText}:</span> 
     {item?.comment}
    
     </p>
     <span className='inline-block absolute right-[20px] bottom-[120px]   z-6 bg-textQout bg-no-repeat w-[80px] h-[80px]'></span>
      <div className='py-4 flex justify-start items-start gap-3'>
        <img src={item?.image} className='w-[64px] h-[64px] rounded-lg object-cover' alt="" />
        <div>
        <h4 className='font-raleway font-semibold text-[18px] text-greenColor z-10'>{item.name}</h4>
        <p className='text-[16px]'>{item.profession}</p>
        </div>
      </div>
   </div>
   
))}

<button
onClick={handlePrev}
className={`${ isPrevClicked ? "bg-yellowColor absolute -bottom-20 right-16 transform -translate-y-1/2  text-[#f3f3f3] p-2 rounded-md w-[40px] h-[40px] focus:outline-none" : "absolute -bottom-20 right-16 transform -translate-y-1/2 bg-[#f3f3f3] text-blackColor p-2 rounded-md w-[40px] h-[40px] focus:outline-none" } `}>
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8283 12.8171L15.7781 7.86733L14.3639 6.45312L7.9999 12.8171L14.3639 19.181L15.7781 17.7668L10.8283 12.8171Z" fill={`${isPrevClicked ? "#f3f3f3" : "#050505"}`}/>
</svg>
</button>
<button
onClick={handleNext}
className={`${isNextClicked ? "bg-yellowColor absolute -bottom-20 right-0 transform -translate-y-1/2  text-[#f3f3f3] p-2 rounded-md w-[40px] h-[40px] focus:outline-none" : "absolute -bottom-20 right-0 transform -translate-y-1/2 bg-[#f3f3f3] text-blackColor p-2 rounded-md w-[40px] h-[40px] focus:outline-none" } `}

>
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1717 12.8171L8.22192 7.86733L9.63614 6.45312L16.0001 12.8171L9.63614 19.181L8.22192 17.7668L13.1717 12.8171Z" fill={`${isNextClicked ? "#f3f3f3" : "#050505"}`}/>
</svg>
</button>
</div>
           </div>
          </div>
         
           </div>
           </motion.div>
</AnimatePresence>


      </section>
  )
}

export default Testimonial