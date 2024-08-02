import CountUp from 'react-countup';


const ServiceBanner = ({icon, title,duration, endTime, plus,description, inView}) => {
 
 
  return (
    <div  className='relative'>
    <div className="flex justify-center items-center">
       <img src={icon} className='w-[72px] h-[72px]' alt="" srcSet="" />
       <div className="flex flex-col text-white pl-2">
      
     
        <h6 className='font-raleway font-semibold text-[56px]'>
       {inView ? <CountUp delay={duration} end={endTime} /> : null}
         <span>{plus ? plus : null}</span> 
         </h6>
     
        <p>{description}</p>
       </div>
       </div>
    

    </div>
  )
}

export default ServiceBanner