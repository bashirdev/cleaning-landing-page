
import cleaner from '../assets/images/cleaner.png';
import ClientReviewCarousel from '../components/ClientReviewCarousel';
import { clientReviews } from '../constant';
import SectionTitle from './../components/SectionTitle';

const Testimonial = () => {


  return (
      <section className='bg-testimonilaBg w-full h-full mt-20 py-[80px]'>
        <div className="pr-[150px] pl-[150px]">
           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-2 ">
           {/* Left side */}
           <div className='col-span-1 '>
             <SectionTitle sectionId='tesitmonial' topTitle='Testimonial' mainTile='What Our Valued' 
            mainTileHighlight='Customers'
            mainTitleLasttext='Say About Us' />
            <p className='text-[14px] text-[#f3f3f3] max-w-[345px] mt-5 '>
            Discover why our clients trust CleanSwift Services for their cleaning needs. Here are some testimonials from satisfied customers
            </p>
           </div>
                {/* Left side End*/}
           
           <div className='grid grid-rows-subgrid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 '>
           <img src={cleaner} className='rounded-tl-md rounded-bl-md' alt=""  />
           
            <ClientReviewCarousel clientReviews={clientReviews} />
         
           </div>
          
           </div>
        </div>

      </section>
  )
}

export default Testimonial