import React from 'react';
import styled from 'styled-components';

import Title from '../components/Title';

const Menu = (props) => (
  <div>
    <div style={{
      backgroundColor: '#1e3932',
      height: '100px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1,
      textAlign: 'center',
    }}>
      <img
        src={require('./logo.png')}
        alt="Logo"
        style={{ width: '5%', position: 'absolute', top: '10px', right: '10px' }}
      />
      <Title style={{ color: 'white' }}>Menu</Title>
    </div>
    <div style={{ marginTop: '100px', marginBottom: '100px', padding: '30px' }}>
      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Hot and Iced Espresso Beverages</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_1.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Americano</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_2.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cafe Latte</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_3.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cappuccino</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_4.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cappuccino</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_5.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cappuccino</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_6.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cappuccino</h3>
        </div>
        
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
          <img src={require('./server/product_7.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Americano</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
          <img src={require('./server/product_8.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Cafe Latte</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_9.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cappuccino</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_10.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cappuccino</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_11.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cappuccino</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
          <img src={require('./server/product_12.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cappuccino</h3>
        </div>
        
      </div>
    </div>
    <div style={{
      backgroundColor: '#1e3932',
      height: '100px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      textAlign: 'center',
    }}>
    </div>
  </div>
);

export default styled(Menu)`

`;
