import icon from '../assets/icons/rightArrow.png';
import SectionTitle from '../components/SectionTitle';
import ServiceBanner from '../components/ServiceBanner';
import { cardItems, serviceHistory } from '../constant';
import Button from './../components/Button';
const Services = () => {
  return (<>
    <section className="bg-[#F0FDF4] w-full py-[80px] mt-[60px] max-container">
    <div className=" pr-[150px] pl-[150px]">
    <SectionTitle topTitle='OUR BEST SERVICES' mainTile='Our Most Popular Cleaning' 
    mainTileHighlight='Services'
    mainTitleLasttext='For You' />

     <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     {cardItems.map((item)=>(
      <div key={item.id} className="relative w-[325px] h-full   bg-gray-50 shadow-lg p-6">
       
       <div className="flex items-start justify-start ">
          <img src={item.icon} className='h-full' alt="" srcSet="" />
           <h6 className='font-semibold font-raleway text-[20px] pl-4'>{item.title}</h6>
       </div>
       <p className='pl-[60px] max-w-[280px] text-wrap text-[14px] font-raleway'>{item.description}
       </p>
       <div className="mt-6 flex justify-center items-center">
       <Button icon={icon} text="Read Details"   navButton='transition delay-1 text-center m-auto border border-1 border-greenColor cursor-pointer z-12 py-[13px] px-[32px]  rounded-sm mt-2 text-greenColor text-[16px] font:semibold font-raleway hover:bg-greenColor hover:text-white' href="#home" />
       </div>
     </div>
        ))}
       
       
     </div>

    </div>
       
    </section>
    <section className="relative w-full bg-successStoryBg  bg-center bg-cover ">
  <div className="h-[264px] flex justify-between items-center pr-[150px] pl-[150px]  ">
    {serviceHistory.map(item=> <ServiceBanner key={item.id}  {...item} /> )}
    
    </div>
    </section>
     
    </>
  )
}

export default Services