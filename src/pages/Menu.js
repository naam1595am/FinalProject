import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { useNavigate } from "react-router-dom";
import FontResizer from '../components/FontResizer';
const BottomButton = () => {
  
    return (
      <Link to="/order" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', color: 'black', border: 'none', borderRadius: '10px', cursor: 'pointer', marginRight: '250px' }}>
        <ButtonImg src={require('../images/bag.jpg')} />
        
      </Link>
    );
  };
  const HandleClick = () => {
    
    const navigate = useNavigate();
    navigate.push("/order");
  };

const Menu = (props) => {

  const [fontSize, setFontSize] = useState(16);

  const resizeFont = (increment) => {
    setFontSize(fontSize + increment);

  };
  
  const fontStyles = {
    fontSize: `${fontSize}px`,
  };

  
  return (
  <div>
    
    <div style={{ marginTop: '20px', marginBottom: '100px', padding: '30px' }}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>Hot and Iced Espresso Beverages</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
            <Link to="/product/1" style={{ textDecoration: 'none' }}>
                <img src={require('./server/product_1.png')} alt="Americano" style={{ width: '100%' }} />
                <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Americano</h3>
            </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
            <Link to="/product/2" style={{ textDecoration: 'none' }}>
                <img src={require('./server/product_2.png')} alt="Cafe Latte" style={{ width: '100%' }} />
                <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em' , fontSize: `${fontSize}px`}}>Cafe Latte</h3>
            </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
            <Link to="/product/3" style={{ textDecoration: 'none' }}>
                <img src={require('./server/product_3.png')} alt="Cappuccino" style={{ width: '100%' }} />
                <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em' , fontSize: `${fontSize}px`}}>Cappuccino</h3>
            </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
            <Link to="/product/4" style={{ textDecoration: 'none' }}>
                <img src={require('./server/product_4.png')} alt="Caramel Macchiato" style={{ width: '100%' }} />
                <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em' , fontSize: `${fontSize}px`}}>Caramel Macchiato</h3>
            </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
            <Link to="/product/5" style={{ textDecoration: 'none' }}>
                <img src={require('./server/product_5.png')} alt="Mocha" style={{ width: '100%' }} />
                <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Mocha</h3>
            </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
            <Link to="/product/6" style={{ textDecoration: 'none' }}>
                <img src={require('./server/product_6.png')} alt="White Mocha" style={{ width: '100%' }} />
                <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>White Mocha</h3>
            </Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/7" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_7.png')} alt="Black and White Mocha" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Black and White Mocha	</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/8" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_8.png')} alt="Caramel Mocha" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Caramel Mocha</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/9" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_9.png')} alt="Coconut Mocha" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Coconut Mocha</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/10" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_10.png')} alt="Espresso" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Espresso</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/11" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_11.png')} alt="Espresso Macchiato" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Espresso Macchiato</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/12" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_12.png')} alt="Espresso Con Panna" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Espresso Con Panna</h3>
          </Link>
        </div>
      
      </div>
      </h5>


      <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>Brewed Coffee</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/13" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_13.png')} alt="Americano" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Brewed Coffee</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/14" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_14.png')} alt="Cafe Latte" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Cafe Au Lait</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/15" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_15.png')} alt="Cappuccino" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Red Eye</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/16" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_16.png')} alt="Cappuccino" style={{ width: '100%' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Black</h3>
          </Link>
        </div>
      </div>
      </h5>
      </div>
    
      <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>Hot Beverage</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/17" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_17.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Hot Chocolate</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/18" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_18.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>White Hot Chocolate</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/19" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_19.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Black and White Chocolate</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/20" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_20.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Green Tea Latte</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/21" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_21.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Chai Latte</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/22" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_22.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Brewed Tea Latte</h3>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/23" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_23.png')} alt="Americano" style={{ width: '100%', height: '151px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Hot Brewed Tea</h3>
          </Link>
        </div>
        
      </div>
      </h5>
    </div>



    <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px`}}>Iced Tea</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/24" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_24.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Iced Black Tea</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/25" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_25.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Iced Green Tea</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/26" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_26.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Iced Passion Tea</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/27" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_27.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Green Tea Lemonade</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/28" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_28.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Passion Tea Lemonade</h3>
          </Link>
        </div>
      </div>
      </h5>
      </div>

      <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>Iced Coffee</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/29" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_29.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Iced Coffee</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/30" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_30.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Iced Cafe Con Leche</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/31" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_31.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Cold Brewed Iced Coffee</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/32" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_32.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Cold Brewed Iced Coffee with Milk</h3>
          </Link>
        </div>
      </div>
      </h5>
    </div>



    <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>Coffee Based Frapuccinos</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/33" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_33.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Coffee Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/34" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_34.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Espresso Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/35" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_35.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Caramel Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/36" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_36.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Mocha Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/37" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_37.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Java Chip Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/38" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_38.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Cafe Vanilla Frappuccino</h3>
          </Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/39" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_39.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>White Mocha Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/40" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_40.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Syrup Frappuccino</h3>
        </Link>
        </div>
      </div>
      </h5>
      </div>


      <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px`}}>Creme Frappuccino</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/41" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_41.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Vanilla Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/42" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_42.png')} alt="Cafe Latte" style={{ width: '181px', marginLeft:'25px'}} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Strawberries and Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/43" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_43.png')} alt="Cappuccino" style={{ width: '181px', marginLeft:'45px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Double Choclate Chip Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/44" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_44.png')} alt="Cappuccino" style={{ width: '181px', marginLeft:'10px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Syrup Creme Frappuccino</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/45" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_45.png')} alt="Cappuccino" style={{ width: '181px', marginLeft:'40px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Blended Strawberry Frappuccino</h3>
          </Link>
        </div>
      </div>
      </h5>
    </div>

    <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>Smoothies</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/46" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_46.png')} alt="Americano" style={{ width: '181px', height: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Mango Smoothie</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/47" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_47.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Pomegranate Smoothie</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/48" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_48.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Blueberry Smoothie</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/49" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_49.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Green Tea Smoothie</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/50" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_50.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Blueberry Green Tea Smoothie</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/51" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_51.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Pomegranate Green Tea Smoothie</h3>
          </Link>
        </div>
      </div>
      </h5>
    </div>

    <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>Beverages</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/52" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_52.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Silk Almond Milk Vanilla</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/53" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_53.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Silk Almond Milk Chocolate</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/54" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_54.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Aquafina Water</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/55" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_55.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Liquid IV Hydration Multiplier</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/56" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_56.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Teavana Hibiscus Spice</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/57" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_57.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Teavana Classic Chai</h3>
          </Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/58" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_58.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Teavana Jasmine Citrus</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/59" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_59.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Teavana Chamomile Blush</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/60" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_60.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Teavana Radiant Green</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/61" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_61.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Teavana Modern Earl Grey</h3>
          </Link>
        </div>
      </div>
      </h5>
    </div>


    <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>Food</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/62" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_62.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Flat Cheese Pizza</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/63" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_63.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Deep Dish Pepperoni Pizza</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/64" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_64.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Peanut Butter Perfect Bar</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/65" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_65.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Sargento Balanced Breaks</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/66" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_66.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>P3 Snack</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/67" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_67.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Dippin Sticks Sliced Apples</h3>
          </Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/68" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_68.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Italian Sub</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/69" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_69.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Cream Cheese</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/70" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_70.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Sargento Colby Jack Cheese</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/71" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_71.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Babybel Cheese Balls</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/72" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_72.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Blueberry Muffin</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/73" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_73.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Chocolate Tuxedo Muffin</h3>
          </Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/74" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_74.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Banana Nut Muffin</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/75" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_75.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Glazed Donut</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/76" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_76.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Butter Croissant</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/77" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_77.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Gluten Free Brownie</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/78" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_78.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Chocolate Chip Cookie</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/79" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_79.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Chewy Marshmallow</h3>
          </Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/80" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_80.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Salted Caramel Cookie</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/81" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_81.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Toffee Crunch Brownie</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/82" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_82.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Kind Bar (Caramel)</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/83" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_83.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Belvita Blueberry Breakfast Biscuits</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/84" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_84.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Altoids (Peppermint)</h3>
          </Link>
        </div>
      </div>
      </h5>

    </div>

    <div style={{ marginTop: '100px'}}>
      <h5>
      <h2 style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>Items</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/85" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_85.png')} alt="Americano" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Koffie Straw</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/86" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_86.png')} alt="Cafe Latte" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Starbucks Mug</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/87" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_87.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Starbucks Cup</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/88" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_88.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>Starbucks Tumbler</h3>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <Link to="/product/89" style={{ textDecoration: 'none' }}>
          <img src={require('./server/product_89.png')} alt="Cappuccino" style={{ width: '181px' }} />
          <h3 style={{ textAlign: 'center', color: 'black', fontSize: '1.5em', fontSize: `${fontSize}px`}}>A&M Coffee Cup</h3>
        </Link>
        </div>
      </div>
      </h5>
      </div>
    </div>
    
    <BottomDiv>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', marginRight: '920px' }}>
          <button onClick={() => resizeFont(1)}>Increase font size</button>
          <button onClick={() => resizeFont(-1)}>Decrease font size</button>
    </div>
        <BottomButton />
    </BottomDiv>
  </div>
);
  };
const BottomDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #1e3932;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px; // add padding to the right to create the 50px margin
`;

const ButtonImg = styled.img`
  height: 50px;
  width: 50px;
`;

export default styled(Menu)`
`;