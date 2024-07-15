
const SectionTitle = ({topTitle,mainTile,mainTileHighlight, mainTitleLasttext, sectionId, titleId, changeStyle, contactId}) => {
  return (
    <>
    {!sectionId && !contactId ? (<>
      <p className='text-center font-raleway  
    font-semibold capitalize bg-[#DCFCE7] w-max m-auto py-[6px] px-[10px] rounded-full text-greenColor'>
    {topTitle}</p>
      <h2 className='text-center text-[32px] font-bold font-raleway  '> {mainTile}
      {!titleId ? <br /> : ''}
      
      <span className=''>
         <span className='text-greenColor relative mr-2'> {mainTileHighlight}
      
        <svg className={`${changeStyle ? "max-w-auto aspect-auto absolute right-0 -bottom-3" : 
        "max-w-auto aspect-auto absolute left-0 -bottom-3"}`} width="118" height="10" viewBox="0 0 118 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8.99991C47.756 -1.39823 73.1743 -1.55584 117 8.99991" stroke="#15803D" strokeWidth="2" strokeLinecap="round"/>
</svg>

          </span> 
         
      </span> 
         {mainTitleLasttext}
      </h2>
    </>) :(
      <>
      <p className=' font-raleway  
    font-semibold capitalize bg-[#DCFCE7] w-max  py-[6px] px-[10px] rounded-full text-greenColor'>
    {topTitle}</p>
      <h2 className='text-start text-[32px] font-bold font-raleway  text-[#f3f3f3]'> {mainTile}
       {!contactId ? null : <br/>}
      <span className=''>
         <span className='text-yellowColor relative mr-2'> {mainTileHighlight}

         {!contactId ? (     <svg className='max-w-auto aspect-auto absolute right-0 -bottom-3' width="118" height="11" viewBox="0 0 118 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.64771C47.756 -0.715338 73.1743 -0.872425 117 9.64771" stroke="#FACC15" strokeWidth="2" strokeLinecap="round"/>
</svg>) : (     <svg className='max-w-auto aspect-auto absolute left-0 -bottom-3' width="118" height="11" viewBox="0 0 118 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.64771C47.756 -0.715338 73.1743 -0.872425 117 9.64771" stroke="#FACC15" strokeWidth="2" strokeLinecap="round"/>
</svg>)}

          </span> 
         
      </span> 
      <br />
         {mainTitleLasttext}
      </h2>
      </>
    )
    
     }
       
    </>
  )
}

export default SectionTitle