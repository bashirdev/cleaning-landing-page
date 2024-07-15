import contactUsImage from '../assets/images/cleaner.png';
import Button from './../components/Button';
import SectionTitle from './../components/SectionTitle';

const Contactus = () => {
  return (
     <section className='pl-[150px] bg-greenColor '>
        <div className="flex justify-start  items-center max-lg:flex-col w-[100%] relative">
     
           <div className='flex flex-col justify-center items-start w-[45%] p-0 '>
           <SectionTitle contactId='contactId' topTitle='BOOK ONLINE' 
              mainTile='Online Booking For' 
            mainTileHighlight='Appointments'
            mainTitleLasttext='' />
            <div className="flex flex-wrap item-start justify-start my-2">
                <div className='my-4 flex justify-center items-center gap-4 w-[75%]'>
                   <input className='mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] placeholder-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1' type="text" name="name" id="" placeholder='Full Name*' required />
                   <input className='mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] placeholder-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1' type="email" name="email" id="" placeholder='Email*' required />
                </div>
                <div className='my-4 flex justify-center items-center gap-4 w-[75%]'>
                   <input className='mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] placeholder-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1' type="number" name="number" id="" placeholder='Contact Number' required />
                  <select className='text-[#f3f3f3] mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1'>
                      <option className='bg-greenColor ' value="">Service 1</option>
                      <option className='bg-greenColor ' value="">Service 2</option>
                      <option className='bg-greenColor ' value="">Service 3</option>
                  </select>
                </div>
                <div className='my-4 flex justify-center items-center gap-4 w-[75%]'>
                  
                   <textarea className='mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] placeholder-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1' type='text' placeholder='Message' name="message" id="" rows='5' />
                </div>
                <Button text="Send"  navButton='bg-[#f3f3f3] text-center w-[220px] cursor-pointer z-12 py-[13px] px-[32px] rounded-sm mt-2  text-[14px] font:bold text-greenColor' href="#home" />
            </div>
           </div>
           <div className='w-[55%] p-0'>
             <img className='w-full -mt-1' src={contactUsImage} alt="" srcSet="" />
          </div>
         
        </div>
     </section>
  )
}

export default Contactus