

const ServiceBanner = ({icon, title,plus,description}) => {
  return (
    <div  className='relative'>
    <div className="flex justify-center items-center">
       <img src={icon} className='w-[72px] h-[72px]' alt="" srcSet="" />
       <div className="flex flex-col text-white pl-2">
        <h6 className='font-raleway font-semibold text-[56px]'>{title} {plus ? plus : null} </h6>
        <p>{description}</p>
       </div>
       </div>
    

    </div>
  )
}

export default ServiceBanner