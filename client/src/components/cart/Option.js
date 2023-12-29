import React from 'react'
import './cart.css';

const Option = ({deletedata,get}) => {

    const removedata = async(req,res)=>{
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

            if(res.status === 400 || !data){
                console.log("error");
            }else{
                console.log("user delete");
                get();
            }
        } catch (error) {
            
        }
    }

    return (
        <div className='add_remove_select'>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <p style={{ cursor: "pointer" }} onClick={()=>removedata(deletedata)}>Delete</p><span>|</span>
            <p className='forremovemedia'>Save Or Later</p><span>|</span>
            <p className='forremovemedia'>See More Like This</p>
        </div>
    )
}

export default Option