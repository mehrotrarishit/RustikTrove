// import React, { useState, useContext } from 'react'
// import { LoginContext } from '../context/ContextProvider';
// import './cart.css';

// const Option = ({deletedata,get,quantity}) => {

//     const { account, setAccount } = useContext(LoginContext);
//     const [inddata, setIndData] = useState(null);
//     const removedata = async(req,res)=>{
//         try {
//             const res = await fetch(`/remove/${deletedata}`, {
//                 method: "DELETE",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json"
//                 },
//                 credentials: "include"
//             });

//             const data = await res.json();
//             console.log(data);

//             if(res.status === 400 || !data){
//                 console.log("error");
//             }else{
//                 console.log("user delete");
//                 get();
//             }
//         } catch (error) {
            
//         }
//     }

//     const addtocart = async (id) => {
//         try {
//           const checkres = await fetch(`/addcart/${id}`, {
//             method: "POST",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//               inddata
//             }),
//             credentials: "include"
//           });
    
//           const data1 = await checkres.json();
    
//           if (checkres.status === 401 || !data1) {
//             console.log("user invalid");
//             alert("user invalid");
//           } else {
//             setAccount(data1);
//             quantity+=1;
//           }
//         } catch (error) {
//           console.error("Error adding to cart:", error);
//         }
//       };

//     return (
//         <div className='add_remove_select'>
//             <p style={{ cursor: "pointer" }} onClick={()=>addtocart(deletedata),quantity+=1}>Add</p>
//             <p>{quantity}</p>
//             <p style={{ cursor: "pointer" }} onClick={()=>removedata(deletedata)}>Delete</p><span>|</span>
//             <p className='forremovemedia'>Save Or Later</p><span>|</span>
//             <p className='forremovemedia'>See More Like This</p>
//         </div>
//     )
// }

// export default Option
import React, { useState, useContext } from 'react';
import { LoginContext } from '../context/ContextProvider';
import {useNavigate,NavLink} from 'react-router-dom';
import './cart.css';

const Option = ({ deletedata, get, quantity,_id }) => {

    const { account, setAccount } = useContext(LoginContext);
    const [inddata, setIndData] = useState(null);
    const history = useNavigate("");
    const removedata = async (req, res) => {
        try {
            const res = await fetch(`/remove/${deletedata}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 400 || !data) {
                console.log("error");
            } else {
                console.log("user delete");
                get();
            }
        } catch (error) {

        }
    };

    const addtocart = async (id) => {
        try {
            const checkres = await fetch(`/addcart/${id}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    inddata
                }),
                credentials: "include"
            });

            const data1 = await checkres.json();

            if (checkres.status === 401 || !data1) {
                console.log("user invalid");
                alert("user invalid");
            } else {
                setAccount(data1);
                // Update quantity using setQuantity
                // setQuantity(prevQuantity => prevQuantity + 1);
                window.location.reload();
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <div className='add_remove_select'>
            <p style={{ cursor: "pointer" }} onClick={() => { addtocart(deletedata)}}>Add</p>
            <p>{quantity}</p>
            <p style={{ cursor: "pointer" }} onClick={() => removedata(deletedata)}>Delete</p><span>|</span>
            <p className='forremovemedia'>Save Or Later</p><span>|</span>
            <p className='forremovemedia'>See More Like This</p>
        </div>
    );
}

export default Option;
