// src/components/ScrollHandler.js
import { useEffect } from 'react';

const ScrollHandler = ({ threshold, onScrollAboveThreshold, onScrollBelowThreshold }) => {

  useEffect(() => {
    const handleScroll = () => {
        if(threshold.current ){
          const rect = threshold.current.getBoundingClientRect();
          
        const middleSection = rect.top + rect.height / 3;
        const scrollHeight = window.scrollY + middleSection;
        if(window.scrollX < window.innerWidth){
          
          if (window.scrollY > (scrollHeight - window.innerHeight)) { 
         
            onScrollAboveThreshold();
          } else {
            onScrollBelowThreshold();
          }
        }else{
          if (window.scrollY > (scrollHeight - window.innerHeight)) { 
            console.log(window.scrollX )
            onScrollAboveThreshold();
          } else {
            onScrollBelowThreshold();
          }
        }
      
        }
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, onScrollAboveThreshold, onScrollBelowThreshold]);

  return null;
};

export default ScrollHandler;
