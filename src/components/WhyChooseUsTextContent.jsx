

const WhyChooseUsTextContent = ({icon, title, des}) => {
  return (
    <div 
          className='flex justify-start items-start gap-2'
          >
          <img src={icon} className='w-auto' alt="" srcSet="" />
          <div className="flex flex-col pb-7">
          <h6 className='font-raleway font-semibold text-[20px] pb-2 leading-[20px]  max-lg:w-full'>{title}</h6>
          <p className='text-[14px] max-lg:w-full'>{des}</p>
          </div>
              
          </div>
  )
}

export default WhyChooseUsTextContent