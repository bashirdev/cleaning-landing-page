
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import Button from './../components/Button';
import ScrollHandler from './ScrollHandler';
const Footer = () => {
   const [show, setShow] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false);
const targetRef = useRef(null);
const handleScrollAboveThreshold = () => {
  setIsScrolled(true);
};

const handleScrollBelowThreshold = () => {
  setIsScrolled(false);
};




useEffect(()=>{
 window.addEventListener('scroll', ()=>{
   if(window.scrollY > 100){
     setShow(true)
   }else{
     setShow(false)
   }
   return()=>{
  
    window.removeEventListener('scroll') 
  }
 })

},[])

  return (
    <footer ref={targetRef} className='w-full pt-10 relative bg-greenColor h-full'>
      <ScrollHandler 
    threshold={targetRef}
    onScrollAboveThreshold={handleScrollAboveThreshold}
    onScrollBelowThreshold={handleScrollBelowThreshold}

/>
<AnimatePresence mode='awit'>

         <motion.div 
          initial={{ y: 25, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -25, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.8 }: null}
         className="custom-padding ">
         <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-xs:grid-cols-1 ">
         {/* first Section */}
              <div className="col-span1">
                 <h4 className='text-[24px] font-raleway font-semibold text-yellowColor'><span className='text-[#f3f3f3] text-[24px] font-raleway font-semibold pb-[23px]'>Clean</span>Swift</h4>
                  <p className='text-[16px] font-raleway font-normal leading-8 text-[#f3f3f3]  pb-10'>Stay connected with <span className='text-yellowColor'>CleanSwift </span>Services on social media for the latest updates, cleaning tips, and promotions.</p>
                  <div className="flex flex-start items-center gap-x-3">
                     <div>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="28" rx="2" fill="#FACC15"/>
                        <path d="M15.6667 15.2498H17.75L18.5833 11.9165H15.6667V10.2498C15.6667 9.39202 15.6667 8.58317 17.3333 8.58317H18.5833V5.78325C18.3119 5.74721 17.2858 5.6665 16.2024 5.6665C13.9403 5.6665 12.3333 7.04722 12.3333 9.58293V11.9165H9.83334V15.2498H12.3333V22.3332H15.6667V15.2498Z" fill="#171717"/>
                        </svg>
                     </div>
                     <div>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="28" rx="2" fill="#FACC15"/>
                        <path d="M19.1707 5.875H21.9273L15.9048 12.7583L22.9898 22.125H17.4423L13.0973 16.4442L8.12569 22.125H5.36736L11.809 14.7625L5.01236 5.875H10.7007L14.6282 11.0675L19.1707 5.875ZM18.2032 20.475H19.7307L9.87069 7.43833H8.23153L18.2032 20.475Z" fill="#171717"/>
                        </svg>
                     </div>
                     <div>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="28" height="28" rx="2" fill="#FACC15"/>
                      <path d="M9.78374 8.16645C9.78343 8.84504 9.37174 9.45569 8.74279 9.71045C8.11384 9.96521 7.39323 9.81321 6.92075 9.32613C6.44828 8.83904 6.3183 8.11413 6.59209 7.49323C6.86589 6.87233 7.48879 6.47942 8.16707 6.49978C9.06796 6.52682 9.78415 7.26515 9.78374 8.16645ZM9.83374 11.0664H6.5004V21.4998H9.83374V11.0664ZM15.1004 11.0664H11.7837V21.4998H15.0671V16.0248C15.0671 12.9748 19.0421 12.6914 19.0421 16.0248V21.4998H22.3338V14.8914C22.3338 9.74978 16.4504 9.94145 15.0671 12.4664L15.1004 11.0664Z" fill="#171717"/>
                      </svg>
                     </div>
                  <div>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="2" fill="#FACC15"/>
                         <path d="M14.8567 5.66748C15.7946 5.66903 16.2698 5.674 16.6805 5.68622L16.8422 5.69151C17.0291 5.69815 17.2134 5.70648 17.4357 5.7169C18.3224 5.75787 18.9273 5.89815 19.4586 6.1044C20.0078 6.31621 20.4717 6.60231 20.9349 7.06551C21.3974 7.52871 21.6836 7.99398 21.8961 8.5419C22.1016 9.07246 22.2419 9.67801 22.2836 10.5648C22.2935 10.787 22.3015 10.9714 22.3081 11.1582L22.3133 11.32C22.3255 11.7306 22.3311 12.2059 22.3328 13.1438L22.3335 13.7651C22.3336 13.841 22.3336 13.9194 22.3336 14.0002L22.3335 14.2353L22.333 14.8567C22.3314 15.7945 22.3265 16.2699 22.3142 16.6805L22.3089 16.8422C22.3023 17.0291 22.294 17.2135 22.2836 17.4356C22.2426 18.3225 22.1016 18.9273 21.8961 19.4585C21.6842 20.0079 21.3974 20.4718 20.9349 20.935C20.4717 21.3975 20.0057 21.6835 19.4586 21.896C18.9273 22.1016 18.3224 22.2419 17.4357 22.2835C17.2134 22.2935 17.0291 22.3015 16.8422 22.308L16.6805 22.3133C16.2698 22.3255 15.7946 22.331 14.8567 22.3329L14.2353 22.3335C14.1594 22.3335 14.0811 22.3335 14.0002 22.3335H13.7652L13.1437 22.333C12.2059 22.3315 11.7306 22.3265 11.32 22.3142L11.1582 22.309C10.9714 22.3023 10.787 22.294 10.5648 22.2835C9.67801 22.2426 9.07384 22.1016 8.5419 21.896C7.99328 21.6843 7.5287 21.3975 7.06551 20.935C6.60231 20.4718 6.3169 20.0058 6.1044 19.4585C5.89815 18.9273 5.75856 18.3225 5.7169 17.4356C5.707 17.2135 5.69892 17.0291 5.69238 16.8422L5.68714 16.6805C5.67495 16.2699 5.66939 15.7945 5.66759 14.8567L5.66748 13.1438C5.66903 12.2059 5.67399 11.7306 5.68621 11.32L5.69151 11.1582C5.69815 10.9714 5.70648 10.787 5.7169 10.5648C5.75786 9.67731 5.89815 9.07315 6.1044 8.5419C6.3162 7.99329 6.60231 7.52871 7.06551 7.06551C7.5287 6.60231 7.99398 6.3169 8.5419 6.1044C9.07315 5.89815 9.67731 5.75856 10.5648 5.7169C10.787 5.70701 10.9714 5.69893 11.1582 5.69239L11.32 5.68715C11.7306 5.67495 12.2059 5.66939 13.1437 5.66759L14.8567 5.66748ZM14.0002 9.83356C11.6978 9.83356 9.83356 11.6998 9.83356 14.0002C9.83356 16.3026 11.6998 18.1669 14.0002 18.1669C16.3027 18.1669 18.1669 16.3006 18.1669 14.0002C18.1669 11.6978 16.3006 9.83356 14.0002 9.83356ZM14.0002 11.5002C15.381 11.5002 16.5002 12.6191 16.5002 14.0002C16.5002 15.381 15.3813 16.5002 14.0002 16.5002C12.6195 16.5002 11.5002 15.3814 11.5002 14.0002C11.5002 12.6195 12.6191 11.5002 14.0002 11.5002ZM18.3752 8.58356C17.8008 8.58356 17.3336 9.05016 17.3336 9.62452C17.3336 10.1989 17.8002 10.6662 18.3752 10.6662C18.9496 10.6662 19.4169 10.1996 19.4169 9.62452C19.4169 9.05016 18.9488 8.58285 18.3752 8.58356Z" fill="#171717"/>
                  </svg>
   
                  </div>
              </div>
              </div>
              {/* Middle Section */}
              <div className="col-span1">
                  <h5 className='text-[24px] font-raleway font-semibold pb-[13px] text-[#f3f3f3]'>Contact Information</h5>
                  <div className="flex justify-start items-start gap-y-3 flex-col">
                      <div className='relative flex justify-start items-center gap-x-3 pb-4 text-[#f3f3f3]'>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="#FACC15"/>
                   </svg>
                    <p className='text-[16px] font-raleway font-medium'>205 old street, #Newyork-3084</p>

                     </div>
                
                     <div className='relative flex justify-start items-center gap-x-3 
                     pb-4 text-[#f3f3f3]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z" fill="#FACC15"/>
                        </svg>
                       <p className='text-[16px] font-raleway font-medium'>(+)123-456-780</p>
                     </div>
                     <div className='relative flex justify-start items-center gap-x-3 pb-4 text-[#f3f3f3]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" fill="#FACC15"/>
                      </svg>

                       <p className='cleanswift@info.com'>cleanswift@info.com</p>
                     </div>
                     <div className='relative flex justify-start items-center gap-x-3 pb-4 text-[#f3f3f3]'>
                        
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="#FACC15"/>
                          </svg>
                       <p className='9.00AM - 6.30 PM'>9.00AM - 6.30 PM</p>
                     </div>
                  </div>
              </div>
              {/* Last Section */}
              <div className="col-span1">
              <h5 className='text-[24px] font-raleway font-semibold pb-[13px] text-[#f3f3f3]'>Subscribe To Newsletter</h5>
                <div className="flex flex-col flex-start items-start">
                   <p className='text-[16px] text-[#f3f3f3] leading-6'>
                   Subscribe to our newsletter for exclusive offers, cleaning tips, and news about CleanSwift Services.
                   </p>
                   <div className='w-full  mt-6'>
                    <input className='rounded-sm w-full py-3 px-2 ' placeholder='Email' type="email" name="" id="" />
                </div>
                 
                 <Button text="Subscribe Now"  navButton='bg-yellowColor text-center cursor-pointer z-12 py-[13px] px-[32px] w-full rounded-sm mt-4 text-blackColor text-[18px] font:bold' href="#home" />
             
                </div>
               

              </div>
          </div>
         </motion.div>
</AnimatePresence>
  <div className='w-full h-[12px] text-center mt-10 '>
<pre className='py-4 bg-[#166534] text-[#f3f3f3]'>  &copy;{new Date().getFullYear()}  by Bashir Ahammed</pre>
  </div>
  <a href='#home' className={show === true ? 'back2Top smooth-scroll p-3 z-110' : 'back2Top hide'}>TOP</a>
    </footer>
  )
}

export default Footer