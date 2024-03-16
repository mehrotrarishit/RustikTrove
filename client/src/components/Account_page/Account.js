// import React, {useContext} from 'react'
// import './account.css'
// import { LoginContext } from "../context/ContextProvider";

// const Account = () => {
//     const { account, setAccount } = useContext(LoginContext);
    // const getdetailvaliduser = async () => {
    //     const res = await fetch("/validuser", {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         credentials: "include"
    //     });

    //     const data = await res.json();
    //     console.log(data);

    //     if (res.status !== 201) {
    //         console.log("error");
    //     } else {
    //         console.log("data valid");
    //         setAccount(data);
    //     }
    // };
//     const[udata,setudata]= useState({
//         fname:"",
//         email:"",
//         countryCode:"",
//         mobile:"",
//         password:"",
//         cpassword:""
//  })

//  const addata = (e) =>{
//     const{name,value} = e.target;

//      setudata(()=>{
//          return{
//            ...udata,
//            [name]:value
//          }
//      })
// }

//   return (
//     <div className="account_page">
//       <h2>Account</h2>
//       <div className="account_p">
//       <div className="left_account">
        // <div className="orders_account">
        //     <h3>Orders</h3>
        //     <p>Orders & Returns</p>
        // </div>
        // <div className="credits_account">
        //     <h3>Credits</h3>
        //     <p>Coupons</p>
        //     <p>RusTCash</p>
        // </div>
        // <div className="Account">
        //     <h3>Account</h3>
        //     <p>Profile</p>
        //     <p>Saved Cards</p>
        //     <p>Saved UPI</p>
        //     <p>Addresses</p>
        // </div>
//       </div>
//       <div className="right_account">
//         <h2>Details</h2>
//         <div className="mobile_account">
//             <h3>Mobile Number</h3>
//             <p>{account.countryCode}</p>
//             <p>{account.mobile}</p>
//             <p>Edit</p>
//             <input type='mobile' 
//                 // onChange={addata}
//                 // value={udata.password}
//                 name='mobile' placeholder={account.mobile} id='mobile' />
//         </div>
//         <div className="name_account">
//             <h3>Full Name</h3>
//             <p>{account.fname}</p>
//             <p>Edit</p>
//         </div>
//         <div className="email_account">
//             <h3>Email</h3>
//             <p>{account.email}</p>
//             <p>Edit</p>
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Account

import React, { useState, useContext } from 'react';
import './account.css';
import { LoginContext } from '../context/ContextProvider';

const Account = () => {
  const { account, setAccount } = useContext(LoginContext);
  const [editMobile, setEditMobile] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [udata, setUdata] = useState({
    fname: '',
    email: '',
    countryCode: '',
    mobile: '',
    password: '',
    cpassword: '',
  });

  const getdetailvaliduser = async () => {
    const res = await fetch("/validuser", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    const data = await res.json();
    console.log(data);

    if (res.status !== 201) {
        console.log("error");
    } else {
        console.log("data valid");
        setAccount(data);
    }
};
  const addData = (e) => {
    const { name, value } = e.target;

    setUdata((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleEditMobile = () => {
    setEditMobile(true);
  };
  const handleEditName = () => {
    setEditName(true);
  };
  const handleEditEmail = () => {
    setEditEmail(true);
  };
  const handleEditPassword = () => {
    setEditPassword(true);
  };
  const handleSaveMobile = () => {
    // Add logic to save the edited mobile number
    // You can use a similar fetch request as in getdetailvaliduser
    // with the updated data from udata.mobile

    // For now, let's just log the edited mobile number
    account.mobile=udata.mobile;
    console.log('Saving mobile number:', udata.mobile);

    // After saving, exit edit mode
    setEditMobile(false);
  };
  const handleSaveName = () => {
    // Add logic to save the edited mobile number
    // You can use a similar fetch request as in getdetailvaliduser
    // with the updated data from udata.mobile

    // For now, let's just log the edited mobile number
    account.fname=udata.fname;
    console.log('Saving mobile number:', udata.fname);

    // After saving, exit edit mode
    setEditName(false);
  };
  const handleSaveEmail = () => {
    // Add logic to save the edited mobile number
    // You can use a similar fetch request as in getdetailvaliduser
    // with the updated data from udata.mobile

    // For now, let's just log the edited mobile number
    account.email=udata.email;
    console.log('Saving email id:', udata.email);

    // After saving, exit edit mode
    setEditEmail(false);
  };
  const handleSavePassword = () => {
    // Add logic to save the edited mobile number
    // You can use a similar fetch request as in getdetailvaliduser
    // with the updated data from udata.mobile

    // For now, let's just log the edited mobile number
    account.password=udata.password;
    console.log('Saving password:', udata.password);

    // After saving, exit edit mode
    setEditPassword(false);
  };
  return (
    <div className="account_page">
      <h2>Account</h2>
      <div className="account_p">
        <div className="left_account">
        <div className="orders_account">
            <h3>Orders</h3>
            <p>Orders & Returns</p>
        </div>
        <div className="credits_account">
            <h3>Credits</h3>
            <p>Coupons</p>
            <p>RusTCash</p>
        </div>
        <div className="Account">
            <h3>Account</h3>
            <p>Profile</p>
            <p>Saved Cards</p>
            <p>Saved UPI</p>
            <p>Addresses</p>
        </div>
        </div>
        <div className="right_account">
          <h2>Details</h2>
          <div className="mobile_account">
            <h3>Mobile Number</h3>
            {editMobile ? (
              <>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter new mobile number"
                  value={udata.mobile}
                  onChange={addData}
                />
                <button onClick={handleSaveMobile}>Save</button>
              </>
            ) : (
              <>
                <p>{account.countryCode}</p>
                <p>{account.mobile}</p>
                <p>
                  <button onClick={handleEditMobile}>Edit</button>
                </p>
              </>
            )}
          </div>
          <div className="name_account">
            <h3>Name</h3>
            {editName ? (
              <>
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter new name"
                  value={udata.fname}
                  onChange={addData}
                />
                <button onClick={handleSaveName}>Save</button>
              </>
            ) : (
              <>
                <p>{account.fname}</p>
                <p>
                  <button onClick={handleEditName}>Edit</button>
                </p>
              </>
            )}
          </div>
          <div className="email_account">
            <h3>E-Mail</h3>
            {editEmail ? (
              <>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter new email id"
                  value={udata.email}
                  onChange={addData}
                />
                <button onClick={handleSaveEmail}>Save</button>
              </>
            ) : (
              <>
                <p>{account.email}</p>
                <p>
                  <button onClick={handleEditEmail}>Edit</button>
                </p>
              </>
            )}
          </div>
          <div className="password_account">
            <h3>Password</h3>
            {editPassword ? (
              <>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter new password"
                  value={udata.password}
                  onChange={addData}
                />
                <button onClick={handleSavePassword}>Save</button>
              </>
            ) : (
              <>
                <p>
                  <button onClick={handleEditPassword}>Edit Password</button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
