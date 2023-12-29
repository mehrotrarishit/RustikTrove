import React,{useState} from 'react'
import logo from '../../image/logofinal.png';
import "./sign.css"
import { Form, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const history = useNavigate();
    const[udata,setudata]= useState({
           fname:"",
           email:"",
           countryCode:"",
           mobile:"",
           password:"",
           cpassword:""
    })

    console.log(udata);
   const addata = (e) =>{
           const{name,value} = e.target;

            setudata(()=>{
                return{
                  ...udata,
                  [name]:value
                }
            })
   }

   const senddata = async(e)=>{
    e.preventDefault();
    const {fname,email,countryCode,mobile,password,cpassword} = udata;

    if(fname === ""){
      toast.warn("Name not provided",{
        position:"top-center",
      })
    }else if(email === ""){
      toast.warn("Email not provided",{
        position:"top-center",
      })
    }else if(countryCode === ""){
      toast.warn("Country Code not provided",{
        position:"top-center",
      })
    }else if(mobile === "" ){
      toast.warn("Mobile Number not provided",{
        position:"top-center",
      })
    }else if(password === ""){
      toast.warn("Password not provided",{
        position:"top-center",
      })
    }else if(cpassword === ""){
      toast.warn("Please confirm your password",{
        position:"top-center",
      })
    }else{
      const res = await fetch("register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          fname,email,countryCode,mobile,password,cpassword
        })
      });
      const data = await res.json();
      // console.log(data);
      if(res.status === 422 || !data){
        // alert("no data")
        toast.warn("Invalid Details",{
          position:"top-center",
        })
      }else{
        // alert("User Profile Added")
        toast.success("User Profile Successfully Added",{
          position:"top-center",
        })
        history("/");
        setudata({...udata,fname:"",email:"",countryCode:"",mobile:"",password:"",cpassword:""});
      }
     }
    }

  return (
    <>
      <section>
        <div className='sign_conatiner'>
          <div className='sign_header'>
            <NavLink to="/"><img src={logo} alt="Logo"></img></NavLink>
          </div>
          <div className='sign_form'>
            <form method="POST">
              <h1>Create Account</h1>
              <div className='form_data'>
                <label htmlFor="fname">Your name</label>
                <input type="text" 
                onChange={addata}
                value={udata.fname}
                name='fname' id='fname' placeholder='first and last name' />
              </div>
              <div className='form_data'>
                <label htmlFor="email">Email</label>
                <input type="text"
                onChange={addata}
                value={udata.email}
                name='email' id='email' />
              </div>
               <div className='Mobile'>
              <div className='form_data' id='country_code'>
                <label htmlFor="countryCode">Country</label>
                <input type="text"
                onChange={addata}
                value={udata.countryCode}
                name='countryCode' id='countryCode' placeholder="IN+91"  />
              </div>
              <div className='form_data' id='number'>
                <label htmlFor="number">Mobile number</label>
                <input type="text" 
                onChange={addata}
                value={udata.mobile}
                name='mobile' id='mobile' />
              </div>
              </div>
              <div className='form_data'>
                <label htmlFor='password'>Password</label>
                <input type='password' 
                onChange={addata}
                value={udata.password}
                name='password' placeholder='at least 8 characters' id='password' />
              </div>
              <div className='form_data'>
                <label htmlFor='cpassword'>Confirm Password</label>
                <input type='password'
                onChange={addata}
                value={udata.cpassword}
                name='cpassword' id='cpassword' />
              </div>
              <button className='signin_btn' onClick={senddata}>Continue</button>
            </form>
          </div>
          <div className='already_accountinfo'>
            <p>Already have an account?</p>
           <NavLink to="/login"> <button>Sign In</button></NavLink>
          </div>
          <ToastContainer/>
        </div>
      </section>
    </>
  )
}

export default SignUp
