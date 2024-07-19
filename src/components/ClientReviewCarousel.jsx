import { useEffect, useState } from 'react';

const ClientReviewCarousel = ({clientReviews}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPrevClicked, setIsPrevClicked] = useState(false);
    const [isNextClicked, setIsNextClicked] = useState(false);
  

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
},[clientReviews.length])

  return (
    <div className='relative'>

    {clientReviews?.map((item, index)=>(
        <div key={item.id}
     className={`bg-[#f3f3f3] p-4 absolute inset-0   transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`} > 
         <p className='z-10 relative text-[16px] font-medium text-blackColor font-raleway leading-6 w-full'><span className='text-greenColor'>{item?.highLigtText}:</span> 
         {item?.comment}
        
         </p>
         <span className='inline-block absolute right-[20px] bottom-[120px]   z-6 bg-textQout bg-no-repeat w-[80px] h-[80px]'></span>
          <div className='py-6 flex justify-start items-start gap-3'>
            <img src={item?.image} className='w-[70px] h-[70px] rounded-lg' alt="" />
            <div>
            <h4 className='font-raleway font-semibold text-[18px] text-greenColor z-10'>{item.name}</h4>
            <p>{item.profession}</p>
            </div>
          </div>
       </div>
       
    ))}
  
    <button
 onClick={handlePrev}
 className={`${ isPrevClicked ? "bg-yellowColor absolute -bottom-20 right-16 transform -translate-y-1/2  text-[#f3f3f3] p-2 rounded-md w-[40px] h-[40px] focus:outline-none" : "absolute -bottom-20 right-16 transform -translate-y-1/2 bg-[#f3f3f3] text-blackColor p-2 rounded-md w-[40px] h-[40px] focus:outline-none" } `}

>
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
  )
}

export default ClientReviewCarousel