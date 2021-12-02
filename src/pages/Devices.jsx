import React, { useEffect, useState } from 'react'
import {devices } from "../components/DevicesItem"

const Devices = ()=>{
    const[phones, setPhones] = useState(null);
        useEffect(()=>{
            setPhones(devices)
        },[])

    const value = [
        "Apple",
        "Samsung",
        "Nokia",
    ];
    const OnChange = (e)=>{
        if(e.target.value == "") {
            setPhones(devices)
            return
        }
        setPhones(devices.filter((phone)=>phone.brand == e.target.value))
    };
    return(
        <div className ="container">
            <h3> All Devices</h3>
            <label>Browser Disabled</label>
         <select OnChange={OnChange} className="browser-default" >
            
             <option value="" >Choose brand phone</option>
             {value.map((key)=>{
                 <option key={key} value={key}>{key}</option>
             })}
             
         </select>
            <table>
            <thead>
                <tr>{
                    Object.keys(devices[0]).map((field)=><th key={field}>{field}</th>)}
                    </tr>
            </thead>
            <tbody>
            { devices.map((device)=>(
            <tr key ={device.id}>
                <td>{device.id}</td>
                <td>{device.name}</td>
                <td>{device.brand}</td>
                <td>{device.desctiption}</td>
                <td>{device.price}</td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
};
export default Devices;



