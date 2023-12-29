import React from 'react'
import photo from '../../image/aboutus.jpg';
import './aboutUs.css'
const About = () => {
  return (
    <div>
      <h1 className='Heading'>About Us</h1>
       <p className='head'>OUR STORY</p>
       <h2 className='main'>RustikTrove is a manifestation of passion. A passion for style, craftsmanship, and resilience. A passion for clothing and an appreciation for everyone who adorns it.</h2>
       <p className='main'>We hold the conviction that embracing a garment goes beyond mere ownership; it involves maximizing every thread, empowering those who invest in it, and paying homage to the artisans who bring it to life.</p>
       <div className='story_full'>
          <img src={photo} className='ima'></img>
          <div className='story'>
           <h2 id='str_head'>THE STORY OF RUSTIKTROVE</h2>
            <p className='str'>Established in the year 2015, RustikTrove is not just a fashion brand; it's a manifestation of a profound love for style and self-expression. Born from this deep passion, our mission extends beyond merely offering clothing. We strive to create an inclusive space where accessible and versatile fashion becomes a means of empowerment for everyone, with a special focus on women seeking both beauty and confidence.</p>
            <p className='str'>As trailblazers in the fashion landscape of India, we take pride in providing unique and innovative fashion solutions. What began as a local venture has grown organically into a global community, connecting with individuals worldwide who share our values and appreciation for distinctive styles.</p>
            <p className='str'>At RustikTrove, we acknowledge that one's wardrobe plays a significant role in shaping self-esteem. We understand the challenges individuals face when it comes to expressing themselves through clothing. Whether it's about staying on trend or preparing for special occasions, we firmly believe that each person deserves a wardrobe that reflects their dreams and aspirations, going beyond mere appearances.</p>
            <p className='str'>In essence, RustikTrove is not just a brand; it's a lifestyle that empowers lives through the artistry of fashion, fostering a community where everyone can find their unique voice and style.</p>
          </div>
       </div>
       <h1 className='slide'>Style speaks volumes in simplicity. Be your own influencer. </h1>
       <h3 className='speak'>FOUNDER SPEAK</h3>
       <h2 className='name'>Tanushree & Rishit</h2>
       <p className='words'>Embarking our own venture in the world of fashion wasn't without challenges. In a category sometimes dismissed or whispered about, building awareness for certain styles, proved to be a struggle. Yet, from the moment we embraced our unique fashion choices, We recognized their potential to bring joy, instill confidence, and celebrate freedom. For us, clothing is a similar avenue—spreading joy, fostering confidence, and embracing freedom. We wear our choices with pride, aiming to ensure that everyone who embraces their style does the same.</p>
    </div>
  )
}

export default About