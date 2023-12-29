import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Form } from 'react-router-dom';
import './contact.css';

const ContactUs = () => {
  return (
    <div>
      <h1 className='head'>Contact Us</h1>
      <h3 className='head1'>The RustikTrove team is available to attend to your queries and concerns only</h3>
      <h3 className='head1'> between 10:00am-2:00pm and 2.30 pm- 6:00pm from Monday to Satuday.</h3>
      <div className='list'>
        <div className='box1'>
          <MessageIcon style={{ fontSize: 85, color: '#604f4f'  }}/>
          <h2>Mobile No.</h2>
          <p> +912345607358</p>
        </div>
        <div className='box2'>
         <EmailIcon style={{ fontSize: 85, color: '#604f4f' }}/>
         <h2>Email</h2>
         <p>customersupport@Rustik.com</p>
        </div>
        <div className='box3'>
          <LocationOnIcon style={{ fontSize: 85, color: '#604f4f' }}/>
          <h2>Address</h2>
          <p>Indian Institute of Technology Indore,Simrol.Near Khandwa road, Choki Dhani</p>
        </div>
      </div>
      <div className='form'>
        <h1>Fill This form to get in touch by our team</h1>
         <form>
            <div className='side'>
            <div className='form_data'> 
               <input type='text' name='tname' id='tname' placeholder='Name'></input>
             </div>
             <div className='form_data'> 
               <input type='text' name='email' id='email' placeholder='Email'></input>
             </div>
             </div>
             <div className='form_data'>
                <input type='number' name='mobile' id='mobile' placeholder='Phone number'></input>
             </div>
             <div className='form_data'>
                <input type='text' name='com' id='com' placeholder='Comment'></input>
            </div>
         </form>
         <button className='contact-btn'>SEND MESSAGE</button>
      </div>
    </div>
  )
}

export default ContactUs
