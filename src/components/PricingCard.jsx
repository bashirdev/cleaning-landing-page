
import Button from './Button';
const PricingCard = ({icon, title,price, des1, des2, des3, des4}) => {
 
  return (
    <div className=' bg-[#F0FDF4] p-6 group hover:bg-greenColor  hover:shadow-xl rounded-sm hover:rounded-lg transition-all duration-700 ease-out '>
    <div className='flex justify-center items-center  flex-col  gap-6'>
        <img src={icon} alt="" className='group-hover:bg-white hover:backdrop-blur-3xl hover:backdrop-contrast-200 hover:backdrop-saturate-100 h-[48px] w-[48px]' srcSet="" />
      


        <h1 className='text-blackColor text-[32px] font-raleway font-semibold group-hover:text-white'>{title}</h1>
        <div className='relative '>
        <h3 className='font-raleway text-[56px] font-semi-bold font-semi-italic text-blackColor group-hover:text-white'>
        {price}
        </h3>
          <span className='absolute top-[10px] -left-3 text-base font-bold text-blackColor group-hover:text-white '>$</span>  
           <span className='absolute -right-[70px] bottom-[20px] text-base text-blackColor group-hover:text-white'> /services</span>
        
        </div>
       <div className="flex flex-col justify-center items-start ">
       <p className='group-hover:text-white pb-2'><hr className='w-2 h-2 bg-blackColor opacity-[0.7] group-hover:bg-white rounded-full float-left mr-3 mt-2' />{des1}</p>
       <p className='group-hover:text-white pb-2'><hr className='w-2 h-2 bg-blackColor opacity-[0.7] group-hover:bg-white rounded-full float-left mr-3 mt-2' />{des2}</p>
       <p className='group-hover:text-white pb-2'><hr className='w-2 h-2 opacity-[0.7] bg-blackColor group-hover:bg-white rounded-full float-left mr-3 mt-2' />{des3}</p>
       <p className='group-hover:text-white pb-2'><hr className='w-2 h-2 opacity-[0.7] bg-blackColor group-hover:bg-white rounded-full float-left mr-3 mt-2' />{des4}</p>
       </div>
       <Button text="Buy Now"  navButton='bg-greenColor text-center w-[220px] cursor-pointer z-12 py-[13px] px-[32px] w-full rounded-sm mt-2 text-white text-[14px] font:bold group-hover:bg-white group-hover:text-greenColor' href="#home" />
    </div>
    </div>
  )
}

export default PricingCard