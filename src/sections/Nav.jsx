import { useEffect, useState } from 'react';
import logo from "../assets/images/logo.png";
import Button from '../components/Button';
import { navLinks } from "../constant";
const Nav = () => {
  const [activeNav, setActiveNav] = useState('Home')
  const [scrollDown,setScrollDown] = useState(false)
  const [show, setShow] = useState(false)

 
  useEffect(()=>{
    const handleScrollDwon=()=>{
 if(window.scrollY >  600){
  setScrollDown(true)
  
}else{
  setScrollDown(false)
}
  }
  window.addEventListener("scroll", handleScrollDwon)
    return ()=> removeEventListener("scroll", handleScrollDwon)
  },[])


 function handleShow(){
        setShow(!show)
 }

  return (
 <header className='mt-5 absolute z-20 w-full'>
   <nav className={`${scrollDown === true ? "fixed  justify-between items-center duration-700 ease-linear delay-100 right-0 left-0 top-0  inline-block gap-10 bg-yellowColor" : 'flex justify-between items-center custom-padding'} flex justify-between items-center custom-padding`}>
       <a href="">
        <img className='z-20 w-full h-full' src={logo} alt="Logo"  />
       </a>
       <ul className={`${show === true ? "max-lg:fixed   max-lg:translate-x-[0px] max-lg:w-[45%]  duration-700 ease-linear" : " max-lg:fixed  max-lg:-translate-x-[500px] max-lg:padding-[32px]"} max-lg:fixed duration-700 ease-linear max-lg:bg-yellowColor max-lg:p-12 max-lg:-top-5 max-lg:left-0 max-lg:padding-x-[32px] max-lg:-translate-x-[500px] flex max-lg:flex-col max-lg:justify-start max-lg:items-start  justify-center items-center gap-3  z-10`}>
        {navLinks.map(link=>(
          <li key={link.label} 
        
          onClick={()=> setActiveNav(link.label)}
          >
             <a href={link.href}
               className={`${link.label === activeNav ? 'colorPrimary font-semibold font:raleway text-[20px]  py-2 px-3 animate-pulse' : 
               'text-blackColor max-lg:text-[#f3f3f3] font:raleway font-semibold text-[16px] py-2 px-3 max-sm:inline-block text-nowrap max-sm:w-full max-sm:p-0 min-xs:p-6 ' }`}
             >{link.label}</a>
          </li>
        ))}
       </ul>
       <Button text="Let’s Talk"  navButton='max-sm:hidden max-md:absolute max-lg:absolute max-md:right-[30%] max-lg:right-[30%] bg-greenColor py-[13px] px-[32px] max-md:px-6 max-md:p-y-[8px] rounded-sm text-[#fefefe] text-[14px] font-semi-bold duration-500 ease-in-out hover:bg-yellowColor hover:text-blackColor' href="#home" />
       {/* <div className='hidden max-lg:block max-lg:mr-[80px] max-md:mr-[50px] max-sm:mr-[0px] max-xs:mr-[0px] '>
          <img id='hamburgerIcon' onClick={handleShow} src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div> */}
        <div  onClick={handleShow}  className="hidden fixed right-[47px] top-[5px] bg-yellowColor px-8 py-6 h-10 w-10 rounded-md  max-lg:flex justify-center items-center max-lg:mr-[80px] max-md:mr-[50px] max-sm:mr-[0px] max-xs:mr-[0px] ">
         <div className="py-3 hidden fixed right-[47px] top-[12px] bg-yellowColor px-8  h-10 w-10 rounded-md  max-lg:flex justify-center items-center max-lg:mr-[80px] max-md:mr-[50px] max-sm:mr-[0px] max-xs:mr-[0px]">
           <div className={`${show === true ? "-rotate-45 top-[15px] " : "rotate-0"} absolute top-2 left-4 w-[32px] h-[2px] bg-greenColor first`}></div>
           <div className={`${show === true ? "translate-x-[500px] duration-700" : "translate-x-0 duration-700"} absolute top-4 left-4 w-[32px] h-[2px] bg-greenColor  middle`}></div>
            <div className={`${show  === true ? "rotate-45 top-[15px] " : "rotate-0 "} absolute top-6 left-4 w-[32px] h-[2px] bg-greenColor  last`}></div>  
         </div> 
                
            </div>
   </nav>
 </header>
  )
}

export default Nav