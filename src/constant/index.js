import icon5 from '../assets/icons/brush.png'
import icon4 from '../assets/icons/hospital.png'
import icon3 from '../assets/icons/house.png'
import icon1 from '../assets/icons/kithen.png'
import smallBrush from '../assets/icons/smallBrush.png'
import icon2 from '../assets/icons/sofa.png'
import icon6 from '../assets/icons/window.png'
//ServiceStroy icon
import serviceIcon4 from '../assets/icons/profile.png'
import serviceIcon1 from '../assets/icons/projectDone.png'
import serviceIcon3 from '../assets/icons/star.png'
import serviceIcon2 from '../assets/icons/team.png'
//Client Logo
import logo1 from "../assets/images/Logo1.png"
import logo2 from "../assets/images/Logo2.png"
import logo3 from "../assets/images/Logo3.png"
import logo4 from "../assets/images/Logo4.png"
import logo5 from "../assets/images/Logo5.png"
export const clientLogo=[
    {id:1, logo:logo1},
    {id:2, logo:logo2},
    {id:3, logo:logo3},
    {id:4, logo:logo4},
    {id:5, logo:logo5},
]
// WhyChooseUs
import image1 from '../assets/images/cleaner.png'
import image3 from '../assets/images/HeroImage.png'
import image2 from '../assets/images/weHeroImage.png'

//pricing content
import bigBrushPrice from '../assets/icons/brush.png'
import Kitchen from '../assets/icons/kithen.png'
import smallBrushPrice from '../assets/icons/smallBrush.png'


// our Experts Cleaners
import cleanerManeger1 from '../assets/images/cleanerExpert1.png'
import cleanerManeger2 from '../assets/images/cleanerExpert2.png'
import cleanerManeger3 from '../assets/images/cleanerExpert3.png'

export const cleanerExperts=[
    {id:1, image:cleanerManeger1, name:'Lisa Thompson', title:'Cleaning Manager'},
    {id:2, image:cleanerManeger2, name:'Will Potter', title:'Operational Manager'},
    {id:3, image:cleanerManeger3, name:'Faye Herrera', title:'Cleaning Manager'},
]

//Testimonial
import clientImage1 from '../assets/images/client.png'
import clientImage2 from '../assets/images/HeroImage.png'
import clientImage3 from '../assets/images/weHeroImage.png'
export const clientReviews=[
    {   
        id:1, 
        image:clientImage1, 
        name:'John Due' , 
        profession:'Designer', 
        highLigtText:'Exavir',
        comment:'Services went above and beyond to make my home spotless. The attention to detail and professionalism of their team exceeded my expectations.'
        },
    {   
        id:2, 
        image:clientImage2, 
        name:'Smith Due' , 
        profession:'Busines man', 
        highLigtText:'CleanSwift',
        comment:'Services went above and beyond to make my home spotless.I highly recommend their services!'
        },
    {   
        id:3, 
        image:clientImage3, 
        name:'Jack Due' , 
        profession:'Shopkeeper', 
        highLigtText:'CleanSwift',
        comment:'Services went above and beyond to make my home spotless. I highly recommend their services!'
        },

]

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#blog", label: "Blog" },
    { href: "#contact-us", label: "Contact Us" },
];


export const cardItems=[
    {   
        id:1,
        icon:icon1, 
    title:'Kitchen Cleaning',
     description:'Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede'
    },
    {
        id:2,
        icon:icon2, 
    title:'Sofa Cleaning',
     description:'Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede'
    },
    {
        id:3,
        icon:icon3, 
    title:'House Cleaning',
     description:'Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede'
    },
    {
        id:4,
        icon:icon4, 
    title:'Hospital Cleaning',
     description:'Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede'
    },
    {
        id:5,
        icon:icon5, 
    title:'Deep Cleaning',
     description:'Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede'
    },
    {
        id:6,
        icon:icon6, 
    title:'Window Cleaning',
     description:'Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede'
    }
]


export const serviceHistory=[
    {id:1, icon:serviceIcon1, title:48, plus:"+", description:'Project done'},
    {id:2, icon:serviceIcon2, title:25, description:'Expert team'},
    {id:3, icon:serviceIcon3, title:4.7, description:'Customer Rating'},
    {id:4, icon:serviceIcon4, title:145, plus:"+", description:'Happy Customers'}
]

export const whyChooseUsContent=[
    { 

        id:1,
        leftContent:[
            {id:1,icon:smallBrush, title:'Eco-Friendly Practices' , des:'CleanSwift Services prioritizes sustainability by utilizing eco-friendly cleaning products and methods.'},
            {id:2,icon:smallBrush, title:'Professional Excellence' , des:'Our team comprises seasoned cleaning professionals who bring expertise, dedication, and a meticulous approach to every job'},
            {id:3,icon:smallBrush, title:'Customer-Centric Approach' , des:' We prioritize open communication, listen to your needs, and work collaboratively to meet and exceed your expectations.'},
        ]
    },
  
    {
        id:2,
        rightContent:[
            {
                id:1,
                icon:smallBrush,
                 title:'Quality Assurance' ,
                 des:'At CleanSwift Services, your satisfaction is our utmost priority. We stand firmly behind the quality of our cleaning services'
                },
            {
                id:2,
                icon:smallBrush, 
                title:'Flexible Scheduling' , 
                des:'Life can be busy, and we understand that CleanSwift Services offers flexible scheduling options to accommodate your timetable.'
            },
            {
                id:3,
                icon:smallBrush, 
                title:'Transparent Pricing' , 
                des:'CleanSwift Services prioritizes transparency in pricing to empower customers with clear information.'
            },
        ]
       
    }
   
]

export const whyChooseusCenterContent=[
    {id:1, img:image1},
    {id:2, img:image2},
    {id:3, img:image3},
 ]


 export const pricingContent=[
    {id:1, icon:Kitchen, title:'Essential Clean', price:50, des1:'Routine housekeeping', des2:'Basic office cleaning', des3:'Dusting and surface cleaning', des4:'Bathroom sanitation'},
    {id:2, icon:smallBrushPrice, title:'Refresh Package', price:65, des1:'Routine housekeeping', des2:'Basic office cleaning', des3:'Dusting and surface cleaning', des4:'Bathroom sanitation'},
    {id:3, icon:bigBrushPrice, title:'Specialized Elite', price:120, des1:'Routine housekeeping', des2:'Basic office cleaning', des3:'Dusting and surface cleaning', des4:'Bathroom sanitation'},
 ]