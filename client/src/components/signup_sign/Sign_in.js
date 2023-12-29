import React, { useState,useContext } from 'react'
import "./sign.css"
import { Form, useNavigate } from 'react-router-dom'
import logo from '../../image/logofinal.png';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from "../context/ContextProvider";
import 'react-toastify/dist/ReactToastify.css';

const Sign_in = () => {

  const history = useNavigate();
  const [logdata, setData] = useState({
    email: "",
    password: ""
  });

  console.log(logdata);
  const { account, setAccount } = useContext(LoginContext);

  const adddata = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...logdata,
        [name]: value
      }
    })
  }

  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;

    if (email === "") {
      toast.warn("email not provided", {
        position: "top-center",
      })
    } else if (password === "") {
      toast.warn("password not provided", {
        position: "top-center",
      })
    } else {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
        toast.warn("invalid details", {
          position: "top-center",
        })
      } else {
        toast.success("user logged-in successfully", {
          position: "top-center",
        })
        setAccount(data);
        history("/");
        setData({ ...logdata, email: "", password: "" });
      }

    }

  }


  return (
    <>
      <section>
        <div className='sign_conatiner'>
          <div className='sign_header'>
            <NavLink to="/"> <img src={logo} alt="Logo"></img></NavLink>
          </div>
          <div className='sign_form'>
            <form method='POST'>
              <h1>Sign-In</h1>
              <div className='form_data'>
                <label htmlFor="email">Email</label>
                <input type="text"
                  onChange={adddata}
                  value={logdata.email}
                  name='email' id='email' />
              </div>
              <div className='form_data'>
                <label htmlFor='password'>Password</label>
                <input type='password'
                  onChange={adddata}
                  value={logdata.password}
                  name='password' id='password' />
              </div>
              <button className='signin_btn' onClick={senddata}>Continue</button>
            </form>
          </div>
          <div className='create_accountinfo'>
            <p>New to RustikTrove?</p>
            <NavLink to="/register"><button>Create your account</button></NavLink>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  )
}

export default Sign_in
