
import emailjs from 'emailjs-com';
import { AnimatePresence, motion } from "framer-motion";
import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import iconMap from '../assets/icons/mapIcon.png';
import contactUsImage from '../assets/images/cleaner.png';
import Button from "../components/Button";
import MapView from '../components/MapView';
import SectionTitle from './../components/SectionTitle';
import ScrollHandler from './ScrollHandler';
// const URL= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const Contactus = () => {
  const targetRef=useRef();
  const [viewMap, setViewMap] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [storeLatLng, setStoreLatLng] = useState({})
  const [isChecked, setIsChecked] = useState(false);
  useEffect(()=>{
    const getCOodinatens=async()=>{
      if(isChecked){

        const {lat, lng}=await window.localStorage.getItem('positions') ?  (JSON.parse(window.localStorage.getItem('positions'))) : null ;
        console.log(lat, lng)
        setStoreLatLng({lat, lng})
      }
    }
getCOodinatens()
    
  }, [])


const googleMapsUrl = `https://www.google.com/maps?q=${storeLatLng.lat}&${storeLatLng.lng}&z=15`;
console.log(storeLatLng.lat, storeLatLng.lng)

  // if(window.navigator){
  //   window.navigator.geolocation.watchPosition((position)=>{
  //     const {latitude, longitude ,accuracy} = position.coords;
  //     setUserPosition({latitude, longitude, accuracy})
  //   })
  // }

  const customIcon = new L.Icon({
    iconUrl: iconMap,
    iconRetinaUrl:iconMap,
    iconSize: [120, 120],
    iconAnchor: [65, 110],
    popupAnchor: [1, 0],
    // shadowUrl: import('leaflet/dist/images/marker-shadow.png'),
    shadowSize: [41, 41]
  });
  
 



const [formData, setFormData] = useState({
   name: '',
   email: '',
   contactNum:'',
   services:'',
   message: '' ,
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({
     ...prevData,
     [name]: value,
   }));
 };

 const handleSubmit = (e) => {
   e.preventDefault();

   // eslint-disable-next-line no-undef
   emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_SERVICE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_SERVICE_USER_ID
   )
     .then((result) => {
     
       alert('Message sent successfully!');
     }, (error) => {
       
       alert('Failed to send message.');
     });

   setFormData({
      name: '',
      email: '',
      contactNum:'',
      services:'',
      message: '',
   });
 };






const handleScrollAboveThreshold = () => {
  setIsScrolled(true);
};

const handleScrollBelowThreshold = () => {
  setIsScrolled(false);
};



const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
};


  return (
     <section ref={targetRef} className='pl-[150px] max-md:pl-[50px] max-sm:pl-[50px] max-xs:pl-[50px] bg-greenColor relative'>
       <ScrollHandler
threshold={targetRef}
    onScrollAboveThreshold={handleScrollAboveThreshold}
    onScrollBelowThreshold={handleScrollBelowThreshold}

/>
     <AnimatePresence mode='awit'>
  
        <motion.div 
 initial={{ y: 20, opacity: 0 } }
            animate={isScrolled === true ? { y: 0, opacity: 1 } : null}
            exit={!isScrolled === true ? { y: -20, opacity: 0 } : null}
            transition={!isScrolled === true ? { duration: 0.5 }: null}
        className="flex justify-start  items-center max-lg:flex-col w-[100%] relative">
     
           <div className='flex flex-col justify-center items-start w-[45%] max-md:w-full p-0  '>
           <div className='max-xl:pt-5'>
           <SectionTitle contactId='contactId' topTitle='BOOK ONLINE' 
              mainTile='Online Booking For' 
            mainTileHighlight='Appointments'
            mainTitleLasttext='' />
           </div>
            <div className="flex flex-wrap item-start justify-start my-2">
            <form onSubmit={handleSubmit}>

                <div className='my-4 flex justify-center items-center gap-4 w-full'>
                   <input className='mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] placeholder-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1' type="text" name="name" value={formData.name}  onChange={handleChange} id="" placeholder='Full Name*' required />
                   <input className='mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] placeholder-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1' type="email" name="email" value={formData.email}  onChange={handleChange} id="" placeholder='Email*' required />
                </div>
                <div className='my-4 flex justify-center items-center gap-4 w-[100%]'>
                   <input className='mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] placeholder-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1' type="number" name="contactNum"  value={formData.contactNum}  onChange={handleChange} id="" placeholder='Contact Number' required />
                  <select  onChange={handleChange} value={formData.services} name="services"  className='text-[#f3f3f3] mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1'>
                      <option className='bg-greenColor ' value='Service 1'>Service 1</option>
                      <option className='bg-greenColor ' value='Service 2'>Service 2</option>
                      <option className='bg-greenColor ' value='Service 3'>Service 3</option>
                  </select>
                </div>
                <div className='my-4 flex justify-center items-center gap-4 w-[100%]'>
                  
                   <textarea className='mt-1 px-3 py-2 bg-transparent border  border-[#f3f3f3] placeholder-[#f3f3f3] focus:outline-none focus:border-[#f3f3f3] focus:ring-[#f3f3f3] block w-full rounded-md sm:text-sm focus:ring-1' type='text' placeholder='Message' name="message" value={formData.message}  onChange={handleChange} id="" rows='5' />
                </div>
                <div className='my-6 flex justify-start items-center gap-4 w-[100%]'>
                  
         <label className='flex items-center justify-center text-white'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='mr-5 w-[30px] h-[30px] rounded-full'
        />
       Do you want share locations?
      </label>
      <a className='text-white' href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      Open in Google Maps
    </a>
  </div>
               
 <button type='submit' > 
    <Button text="Send"  navButton='bg-[#f3f3f3] text-center w-[220px] cursor-pointer z-12 py-[13px] px-[32px] rounded-sm mt-2  text-[14px] font:bold text-greenColor'  />
 </button>
           
            </form>
           
            {/* {viewMap === true ?  <div id='map' className='absolute z-50 top-0 left-0 w-full h-full'><button onClick={()=> setViewMap(false)} className='text-white bg-red-700 py-4 px-6'>Close</button> <MapView   customIcon={customIcon} /></div>  : null } */}
           {isChecked && (<div id='map' className='absolute z-50 top-0 left-0 w-full h-full'><button onClick={()=> setIsChecked(false)} className='text-white bg-red-700 py-4 px-6'>Close</button> <MapView   customIcon={customIcon} /></div>)}
            </div>
           </div>
           <div className='w-[55%] p-0'>
             <img className='w-full -mt-1' src={contactUsImage} alt="" srcSet="" />
          </div>
         
        </motion.div>
     </AnimatePresence>
     {/* <div className='py-6'>
                <button className='bg-yellowColor px-6 py-4 absolute text-greenColor -mt-32 ' onClick={()=> setViewMap(true)} > View Localtion</button>
              </div> */}
     </section>
  )
}

export default Contactus