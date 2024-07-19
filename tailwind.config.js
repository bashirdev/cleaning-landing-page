/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontSize:{
      xs:['14px', '16px'],
      sm:['14px', '20px'],
      base:['16px', '19.5px'],
      lg:['18px' , '21.94px'],
      xl:['20px', '24.38px'],
      '2xl':['24px', '29.26px'],
      '3xl':['28px', '50px'],
      '4xl':['48px', '58px'],
      '8xl':['96px', '106px']
    },
    extend: {
      keyframes:{
        marquee:{
          "0%": { transform:'translate(0, 0)'},
         "100% ":{ transform: 'translate(-100%, 0)'}
        }
     
    },
      animation:{
        "marquee":"marquee 3s linear infinite",
  
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif' ],
        raleway:['Raleway', 'sans-serif']
      },
      colors:{
        'greenColor':"#23a036",
        'yellowColor':"#ffc600",
        'grayColor':"#525252",
        'white':"#F5F5F5",
        'blackColor':'#171717'
      },
      boxShadow:{
        '3xl' : '0 10px 40px rgba(0,0,0,0.1)'
      },
      backgroundImage:{
        'WhyChooseBg':"url('assets/images/banner.png')",
        'successStoryBg':"url('assets/images/successStory.png')",
        'testimonilaBg':"url('assets/images/TestimonialBg.png')",
        'textQout':"url('assets/images/qout.png')",
      },
      screens: {
        'xs': '328px', // Add custom 'xs' breakpoint
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      padding: {
        '150px': '150px',
        '50px': '50px',
      },

    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/aspect-ratio', 'framer-motion', 'react-countup'),
  ],
}
