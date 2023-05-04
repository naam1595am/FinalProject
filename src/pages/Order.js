import React, { useState, useEffect } from "react";
import '../style.css';
import { useLocation } from 'react-router-dom';
import {AddtoSales, UpdateInventory} from '../backend/server_functions';

function Order() {
    const location = useLocation();
    const menuText = location.state?.menuText;
    const combinedValues = location.state?.combinedValues;
    const productPrice = location.state?.productPrice;
    const buttonPressed = location.state?.buttonPressed;
    console.log("Button ", buttonPressed);
    const [orderArray, setOrderArray] = useState([]);

    useEffect(() => {
        const savedOrderArray = JSON.parse(localStorage.getItem("orderArray")) || [];
    
        if (buttonPressed) {
          savedOrderArray.push(menuText);
          savedOrderArray.push(combinedValues);
          savedOrderArray.push(productPrice);
          localStorage.setItem("orderArray", JSON.stringify(savedOrderArray));
        }
    
        setOrderArray(savedOrderArray);
      }, [buttonPressed, combinedValues, menuText, productPrice]);
    
    const [total, setTotal] = useState(0);

    useEffect(() => {
    let newTotal = 0;
    orderArray.forEach((item) => {
        if (typeof item === 'string') {
        const matches = item.match(/\d+(\.\d+)?/);
        if (matches) {
            newTotal += parseFloat(matches[0]);
        }
        }
    });
    setTotal(newTotal);
    }, [orderArray]);

    
    const currentDate = new Date();
    const formattedDate= currentDate.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'});
    const formattedTime = currentDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});
    console.log(formattedDate, formattedTime);
    const EmployeeIDs = [80001, 80002, 80003, 80004, 80005, 80006, 80007, 80008, 80009, 80010, 80011, 80012, 85001, 85002, 85003];
    const randomIndex = Math.floor(Math.random() * EmployeeIDs.length);
    const EmployeeID = EmployeeIDs[randomIndex];
    console.log(EmployeeID);
    
    const CustomerIDs = [];

    for (let i = 90001; i <= 90050; i++) {
        CustomerIDs.push(i);
    }

    const randomIndex2 = Math.floor(Math.random() * CustomerIDs.length);
    const CustomerID = CustomerIDs[randomIndex2];
    console.log(CustomerID);

    return (
        <div style= {{display: 'flex', height: "100vh", marginTop: '-101px'}}>
            <div style= {{backgroundColor: '#1e3932', width: '40%'}}>
                <div style= {{width: '50%', height: '100px', marginLeft: '50px', marginTop: '40px', display: 'flex', alignItems: 'center'}}>
                    <img src={require('../images/logo.png')} style={{ width: '80px', height: '80px', marginRight: '10px' }} />
                    <a href="/menu" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '20px'}}> &lt;  Back to menu</a>
                </div>
                <div style= {{display: 'flex', flexFlow:'column', alignItems: 'center', marginTop: '100px'}}>
                    <img src={require('../images/OrderGif.gif')} style={{ width: '350px', height: '350px', marginRight: '10px', borderRadius: '20%' }} />
                    <text style= {{marginTop: '20px', color: 'white', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif',fontWeight: 'bold',fontSize: '34px'}} >Enjoy!</text>
                </div>
                
            </div>
            <div style= {{backgroundColor: 'white', width: '60%', position: 'relative'}}>
                <div style= {{backgroundColor: '', width: '100%', height: '100px',display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '3px solid #ccc', boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)'}}>
                    <text style={{color: 'black', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif',fontWeight: 'bold',fontSize: '40px' }} >Order</text>
                </div>
                <div style= {{backgroundColor: 'white', width: '100%', height: '600px', borderBottom: '3px solid #ccc', boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)'}}>
                
                    <div style= {{backgroundColor: 'white', width: '80%', margin: 'auto'}}>
                        
                        {orderArray.map((item, index) => (
                            <p key={index} style={{ fontWeight: index % 3 === 0 || index % 3 === 2 ? 'bold' : 'normal', textAlign: index % 3 === 2 ? 'right' : 'left' }}>
                                {item}
                            </p>
                        ))}
                    
                    </div>

                </div>
                <div style= {{backgroundColor: 'white', width: '100%', height: '180px', marginTop:'20px'}}>
                <div style={{ textAlign: 'right', marginRight: '80px' }}>
                    <text style={{fontSize: '30px', fontWeight: 'bold'}}>Total:</text>
                    <text style={{marginLeft: '40px', fontSize: '30px'}}>{total}</text>
                </div>
                </div>
                <button 
                    style={{ 
                        border: 'none', 
                        background: '#00754a',
                        color: 'white',
                        cursor: 'pointer', 
                        fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
                        fontWeight: 'bold', 
                        fontSize: '22px',
                        borderRadius: '50px',
                        padding: '10px 20px',
                        position: 'absolute',
                        bottom: '30px',
                        right: '25px',
                        height: '60px',
                        width: '140px'
                    }} onClick={() => {
                        const info = [currentDate, formattedDate, formattedTime, EmployeeID, CustomerID, total]
                        
                        // console.log(info)
                        AddtoSales(info)
                        UpdateInventory()
                        localStorage.removeItem("orderArray");
                        setOrderArray([]);

                      }}>
                    
                    Order
                </button>
            </div>
        </div>
    )
}

export default Order