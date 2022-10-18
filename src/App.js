import React from 'react';
import Header from './Components/Header';
import Image1 from './images/desktop-image-hero-1.jpg';
import Image2 from './images/desktop-image-hero-2.jpg'
import Image3 from './images/desktop-image-hero-3.jpg'

const slides = [
  {url : Image1 ,
  textHeader : 'Discover innovative ways to decorate' , 
  textMain : "We provide unmatched quality , comfort and style for property owners across the country . Our expoerts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love"
 }, 

  {url : Image2, 
  textHeader : 'We are available all across the globe' , 
  textMain : "With stores all over the world , it's easy for you to find furniture for your home or place of business. Localy we're in most cities throughout the country. Find the branch nearest to you using our store locator. Any questions? Don't hesitate to contact us today"
 },

 {url : Image3, 
  textHeader : 'Manufactured with the best materials' , 
  textMain : "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and consistent as possible. With three decades of experience in this industry , we understand what customers want for their home and office"
 }


]
function App() {
  return (
   <>
   <Header slides = {slides}/>
   </>
  );
}

export default App;