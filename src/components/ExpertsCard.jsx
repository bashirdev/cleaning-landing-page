

const ExpertsCard = ({image, name, title}) => {
  return (
    <div className='mt-[40px] text-center bg-[#f3f3f3] rounded-md overflow-hidden shadow-md'>
        <img className='w-full h-full' src={image} alt="" srcSet="" />
         <div className='py-4'>
         <h6 className='text-greenColor font-raleway font-semibold text-[20px]'>{name}</h6>
         <p>{title}</p>
         </div>
    </div>
  )
}

export default ExpertsCard