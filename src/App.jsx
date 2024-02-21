import React from 'react';
import Navbar from './component/Navbar';
import All from './component/All';
import Fullstack from './component/Fullstack';
import Datascience from './component/Datascience';
import Cybersecurity from './component/Cybersecurity';
import Career from './component/Career';
// import Navbar1 from './component/Navbar1';
// import Header from './component/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {

const data=[
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Complete-Guide-on-Backend-Development-Roles-Responsibilities-Skills-and-Salary.webp",
    head:"Career Development",
    content:"Backend Developers: Roles, Responsibilities, Skills, and Salary",
    information:"Websites are not only about colorful outlooks, fancy transitions, or eye-catching illustrations. These are the",
    date:"8",
    month:"February",
    year:"2024",
  },
  
  {
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Development-Roadmap-A-Complete-Guide.webp",
  head:"Fullstack development",
  content:"Backend Development Roadmap: A Complete Guide 2024",
  information:"In the swiftly evolving landscape of technology, backend development stands as an important foundation that powers the web and mobile applications we rely on daily.",
  date:"17",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp" ,
  head:"Fullstack development",
  content:"Frontend vs Backend Development: Top 7 Differences",
  information:"In todays digital age, web development has become a crucial component of the IT industry. Aspiring developers often come across the terms",
  
  date:"16",
  month:"February",
  year:"2024",
},

{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.webp",
  head:"Fullstack development",
  content:"Comprehensive List of Project Ideas for Frontend Development [2024]",
  information:"During your college days, you must’ve been bombarded with lots of projects and at that point, you will be clueless about why they are forcing us to do projects.",
  date:"16",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Best-Frontend-Development-Frameworks.webp",
  head:"DataScience Development",
  content:"10 Best Frontend Development Frameworks",
  information:"Frontend development frameworks are the backbone of user interface development, enabling developers to build seamless,",
  date:"16",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Backend-Frameworks-That-You-Should-Know.webp",
  head:"Fullstack development",
  content:"Top 6 Backend Frameworks That You Should Know in 2024",
  information:"If you are looking to ace the field of backend development, you must be able",
  date:"15",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA.webp",
  head:"Fullstack development",
  content:"Backend Developer Salary in India & USA [2024]",
   information:"If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious",
  date:"17",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide.webp",
  head:"Fullstack development",
  content:"What Does a Top Backend Developer Do? The Ultimate Guide",
  information:"Backend development plays a vital role in the functioning of websites and web applications.",
  date:"15",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer.webp",
  head:"Fullstack development",
  content:"What is Frontend Development? Roles, Responsibilities, Skills & Salary",
  information:"Frontend development is all about making websites that look good and work well for people",
  date:"17",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp",
  head:"Fullstack development",
  content:"Top Full Stack Development Trends for 2024: What to Expect",
  information:"In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. ",
  date:"9",
  month:"February",
  year:"2024",

},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide.webp",
  head:"Fullstack development",
  content:"Top 11 CSS Frameworks for Front-End Developers: A Comprehensive Guide",
  information:"In the world of web development, Cascading Style Sheets (CSS) play a crucial role in",
  date:"17",
  month:"February",
  year:"2024",
},

{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Comprehensive-Guide-to-HTML-and-CSS-Roadmap.webp",
  head:"Fullstack development",
  content:"A Comprehensive Guide to HTML and CSS Roadmap [2024]",
  information:"One of the constant things that’s been trending since the rise of the internet is",
  date:"8",
  month:"February",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Steps-to-Create-a-Simple-Hello-World-Page-Using-HTML.webp",
  head:"Fullstack development",
  content:"How to Create a Simple “Hello World” Page Using HTML",
  information:"Creating your first web page is an important step in learning web development. In coding,",
  date:"8",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-does-a-Front-End-Developer-do-A-Complete-Guide.webp",
  head:"Fullstack development",
  content:"What does a Front End Developer do? A Complete Guide",
  information:"A Front end developer is someone who makes websites look great and work well for",
  date:"17",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Introduction-to-HTML-Tags-A-Comprehensive-Guide-With-Examples.webp",
  head:"Career Development",
  content:"Introduction to HTML Tags: A Comprehensive Guide With Examples [2024]",
  information:"Creating a website on our own must have been on everyone’s bucket list since the",
  date:"17",
  month:"February",
  year:"2024",
},
{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Best-IoT-Project-Ideas.webp",
  head:"Career Development",
  content:"Top 17 Best IoT Project Ideas",
  information:"The Internet of Things, or IoT, is all about connecting everyday objects to the internet",
  date:"6",
  month:"February",
  year:"2024",
},

{
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-B2B-Digital-Marketing-Strategies.webp",
  head:"Career Development",
  content:"Top 15 B2B Digital Marketing Strategies in 2024 [Updated]",
  information:"It was found that 89% of the B2B buyers research the products online while making the",
  date:"17",
  month:"February",
  year:"2024",
},

 {
 
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
   head:"DataScience Development",
   content:"Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
   information:"Are you someone who’s not interested in coding, but wants to get placed in tech",
   date:"28",
   month:"November",
   year:"2023",
 },

 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1536x768.webp",
   head:"DataScience Development",
   content:"Impact of Certification Programs on Hiring Data Scientists",
   information:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
   date:"17",
   month:"February",
   year:"2024",
 },
 {

  image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
   head:"DataScience Development",
   content:"Top Product-Based Companies for Data Science Freshers",
   information:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
   date:"10",
   month:"November",
   year:"2023",
 },
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
   head:"DataScience Development",
   content:"Top 10 Data Science Tools in 2024",
   information:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
   date:"10",
   month:"November",
   year:"2023",
 },
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
   head:"DataScience Development",
   content:"Best Data Science Books to Learn in 2024",
   information:"Today, we’re going to talk about something really cool: data science. It’s all about using",
   date:"26",
   month:"October",
   year:"2023",
 },
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
   head:"DataScience Development",
   content:"Top Product-Based Companies for Data Scientists in 2024",
   information:"We all know about the kind of buzz surrounding data science right now, it is",
   date:"10",
   month:"November",
   year:"2023",
 },
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
   head:"DataScience Development",
   content:"Extraordinary Data Science Projects for Beginners As Well as Veterans",
   information:"As the demand for data and the people that can conquer it, i.e. Data Scientists",
   date:"28",
   month:"October",
   year:"2023",
 },
 

 
 
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
   head:"Cybersecurity Development",
   content:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
   information:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
   date:"28",
   month:"October",
   year:"2023",
 },
 
 
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
   head:"Cybersecurity Development",
   content:"The Ultimate Cybersecurity Roadmap for Beginners",
   information:"Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
   date:"28",
   month:"October",
   year:"2023",
 },
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
   head:"Career Development",
   content:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
   information:"If your New Year resolution consists of building a successful tech career in 2024, then",
   date:"28",
   month:"October",
   year:"2023",
 },
 
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
   head:"Career Development",
   content:"Top 5 IT Jobs for Economics Students",
   information:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
   date:"28",
   month:"October",
   year:"2023",
 },
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
   head:"Cybersecurity Development",
   content:"With the rapid advancement of technology, the demand for IT professionals has soared in recent",
   information:"Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
   date:"28",
   month:"October",
   year:"2023",
 },
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-1536x804.webp",
   head:"Cybersecurity Development",
   content:"9 Best Product-Based Companies for Project Management",
   information:"In today’s tech-driven world, the demand for project managers is higher than before. The workload",
   date:"28",
   month:"October",
   year:"2023",
 },
 {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-1536x804.webp",
   head:"Cybersecurity Development",
   content:"Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
   information:"What if I say that blockchain is going to be the next big thing? And",
   date:"28",
   month:"October",
   year:"2023",
 },

];


  return (


    <div>
     <BrowserRouter>
     {/* <Navbar1 /> */}
     {/* <Header /> */}
     <Navbar />

     <Routes>
<Route path='/' element={<All data={data} />} />
<Route path='/fullstack' element={<Fullstack data={data}/>} />
<Route path='/datascience' element={<Datascience data={data}/>} />
<Route path='/cybersecurity' element={<Cybersecurity data={data}/>} />
<Route path='/career' element={<Career data={data}/>}  />





     </ Routes>
     
     </BrowserRouter>
    </div>
  
  );
};
export default App;