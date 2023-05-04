import React from 'react';
import NavLink from './NavLink';
import styled from 'styled-components';
import logo from '../images/logo.png';
import GoogleTranslate from './googletranslate';
import getWeatherByCityName from './weather';

const Navbar = ({ className }) => {

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <nav className={className}>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <div>
          <NavLink exact to="/">
            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
              <img src={logo} alt="Home" style={{ width: '55px', height: '55px', marginTop: '15px', marginLeft: '20px'}} />
            </button>
          </NavLink>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: '15px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', margin: '0', padding: '0' }}>
            <li>
              
              <NavLink to="/" style={{ fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '16px', marginLeft: '20px' }}>HOME</NavLink>
              <NavLink to="/menu" style={{ fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '16px', marginLeft: '20px' }}>MENU</NavLink>
              <NavLink to="/menuemployee" style={{ fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '16px', marginLeft: '20px' }}>EMPLOYEE</NavLink>
              <NavLink to="/manager" style={{ fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '16px', marginLeft: '20px' }}>MANAGER</NavLink>
              <NavLink to="/menuscreen" style={{ fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '16px', marginLeft: '20px' }}>MENU SCREEN</NavLink>
            </li>
            
          </ul>
          <div style={{ display: 'flex', marginRight: '50px' }}>
          <div id="weather-info" style={{ 
                border: 'none', 
                background: 'black',
                color: 'white',
                cursor: 'pointer', 
                fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
                fontWeight: 'bold', 
                fontSize: '16px',
                borderRadius: '50px',
                padding: '10px 20px',
                marginRight: '50px'
              }}/>
            <button 
              style={{ 
                border: 'none', 
                background: 'black',
                color: 'white',
                cursor: 'pointer', 
                fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
                fontWeight: 'bold', 
                fontSize: '16px',
                borderRadius: '50px',
                padding: '10px 20px',
              }} onClick={handleLogin}>
              Log In
            </button>
            
          </div>
        </div>
        <GoogleTranslate />
      </div>
    </nav>
  );
};

export default styled(Navbar)`
  border-bottom: 1px solid #ccc; /* adds a 1px solid border at the bottom of the Navbar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* adds a box-shadow to the Navbar */
  height: 100px;
  width: 100%;
  margin: 0;
`;




