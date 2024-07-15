import { useState } from 'react';
import hamburger from "../assets/icons/hamburger.svg";
import logo from "../assets/images/logo.png";
import Button from '../components/Button';
import { navLinks } from "../constant";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('Home')
 
  return (
 <header className='mt-5 absolute z-20 w-full'>
   <nav className='max-container flex justify-between items-center custom-padding'>
       <a href="">
        <img className='z-10 w-full h-full' src={logo} alt="Logo"  />
       </a>
       <ul className='max-lg:hidden max-lg:flex-col flex justify-center items-center gap-2    '>
        {navLinks.map(link=>(
          <li key={link.label} 
        
          onClick={()=> setActiveNav(link.label)}
          >
             <a href={`#link.href`}
               className={`${link.label === activeNav ? 'colorPrimary font-semibold font:raleway text-[20px] py-2 px-3 animate-pulse' : 
               'text-blackColor  font:raleway font-semibold text-[16px] py-2 px-3' }`}
             >{link.label}</a>
          </li>
        ))}
       </ul>
       <Button text="Let’s Talk"  navButton='bg-greenColor py-[13px] px-[32px] rounded-sm text-[#fefefe] text-[14px]' href="#home" />
       <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
   </nav>
 </header>
  )
}

export default Nav