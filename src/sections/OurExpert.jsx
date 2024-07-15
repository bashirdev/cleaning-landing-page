import ExpertsCard from "../components/ExpertsCard"
import SectionTitle from "../components/SectionTitle"
import { cleanerExperts } from "../constant"


const OurExpert = () => {
  return (
   <section className='pl-[150px] pr-[150px] py-20'>
      <SectionTitle  titleId='ourExpert' changeStyle='changeStyle ' topTitle='OUR EXPERTS' mainTile='Meet Our Professional' 
    mainTileHighlight='Cleaners'
    mainTitleLasttext='' />
       <div className="flex justify-center items-center gap-6">
          {cleanerExperts.map(item=> <ExpertsCard key={item.id} {...item} />)}
       </div>

   </section>
  )
}

export default OurExpert