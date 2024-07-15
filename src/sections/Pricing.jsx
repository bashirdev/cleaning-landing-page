
import PricingCard from '../components/PricingCard';
import { pricingContent } from '../constant';
import SectionTitle from './../components/SectionTitle';

const Pricing = () => {
  return (
  <section className=" pt-[80px]">
   <SectionTitle topTitle='PRICING PACKAGE' mainTile='No Extra Hidden Charge! ' 
    mainTileHighlight='Choose!'
    mainTitleLasttext='Your plan' />
  <div className="pl-[150px] pr-[150px]">
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center mt-10'>
    
          {pricingContent?.map((item)=> <PricingCard key={item.id} {...item} /> )}
   
     
  </div>
</div>
  </section>
  )
}

export default Pricing