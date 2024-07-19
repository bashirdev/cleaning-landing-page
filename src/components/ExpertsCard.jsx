

const ExpertsCard = ({image, name, title}) => {
  return (
  <>

        <img className='object-fit' src={image} alt="" srcSet="" />
         <div className='py-4'>
         <h6 className='text-greenColor font-raleway font-semibold text-[20px]'>{name}</h6>
         <p>{title}</p>
         </div>
  </>
    
  )
}

export default ExpertsCard