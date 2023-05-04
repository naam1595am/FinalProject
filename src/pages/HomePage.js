//import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
//new line import here
import React, { useState } from 'react';
import FontResizer from '../components/FontResizer';
//new line import here
import Title from '../components/Title'

const BottomButton = () => {
  return (
    <Link to="/order" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', color: 'black', border: 'none', borderRadius: '10px', cursor: 'pointer', marginRight: '250px' }}>
      <ButtonImg src={require('../images/bag.jpg')} />
      
    </Link>
  );
};

const handleClick = () => {
  
  const popupWidth = 600;
  const popupHeight = 500;
  const left = (window.innerWidth - popupWidth) / 2;
  const top = (window.innerHeight - popupHeight) / 2;
  const popupFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;
  const popupContent = `
    <div style="text-align: center">
      <p>Our story begins in 1971 along the cobblestone streets of Seattle’s historic Pike Place Market. It was here where Starbucks opened its first store, offering fresh-roasted coffee beans, tea and spices from around the world for our customers to take home. Our name was inspired by the classic tale, “Moby-Dick,” evoking the seafaring tradition of the early coffee traders.</p>
      <p>Ten years later, a young New Yorker named Howard Schultz would walk through these doors and become captivated with Starbucks coffee from his first sip. After joining the company in 1982, a different cobblestone road would lead him to another discovery. It was on a trip to Milan in 1983 that Howard first experienced Italy’s coffeehouses, and he returned to Seattle inspired to bring the warmth and artistry of its coffee culture to Starbucks. By 1987, we swapped our brown aprons for green ones and embarked on our next chapter as a coffeehouse.</p>
      <p>Starbucks would soon expand to Chicago and Vancouver, Canada and then on to California, Washington, D.C. and New York. By 1996, we would cross the Pacific to open our first store in Japan, followed by Europe in 1998 and China in 1999. Over the next two decades, we would grow to welcome millions of customers each week and become a part of the fabric of tens of thousands of neighborhoods all around the world. In everything we do, we are always dedicated to Our Mission: With every cup, with every conversation, with every community - we nurture the limitless possibilities of human connection.</p>
    </div>
  `;
  const popup = window.open('', '', popupFeatures);
  popup.document.title = 'Our Company';
  popup.document.write(popupContent);
};

const handleClickCoffee = () => {
  
  const popupWidth = 600;
  const popupHeight = 500;
  const left = (window.innerWidth - popupWidth) / 2;
  const top = (window.innerHeight - popupHeight) / 2;
  const popupFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;
  const popupContent = `
    <div style="text-align: center">
    <p> Let's talk coffee </p>
    <p> Whether you're searching for something new to warm your mug, seeking the best brew method for your favorite blend or exploring our rarest offerings, you’ve come to the right place. </p>
    </div>
  `;
  const popup = window.open('', '', popupFeatures);
  popup.document.title = 'Our Company';
  popup.document.write(popupContent);
};

const handleClickContact = () => {
  
  const popupWidth = 600;
  const popupHeight = 500;
  const left = (window.innerWidth - popupWidth) / 2;
  const top = (window.innerHeight - popupHeight) / 2;
  const popupFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;
  const popupContent = `
    <div style="text-align: center">
      <p> - Jack Letsinger - jackletsinger@tamu.edu </p>
      <p> - Nick Anaya - naam1595@tamu.edu </p>
      <p> - Cade Hanath-Culp - cade22@tamu.edu </p>
      <p> - Arkeldi Bylyku - arkeldi@tamu.edu </p>
      <p> - Ethan Chen - chenners@tamu.edu </p>
    </div>
  `;
  const popup = window.open('', '', popupFeatures);
  popup.document.title = 'Our Company';
  popup.document.write(popupContent);
};

const handleClickPN = () => {
  
  const popupWidth = 600;
  const popupHeight = 500;
  const left = (window.innerWidth - popupWidth) / 2;
  const top = (window.innerHeight - popupHeight) / 2;
  const popupFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;
  const popupContent = `
    <div style="text-align: center">
      <p> As part of our effort to protect your privacy and to comply with 
      applicable privacy and data protection laws, we strive to consider all of our data 
      governance practices through the lens of the recognized principles of data minimization, 
      limited collection, and limited use, among other key areas addressed below. 
      We do so to respect and maintain your trust. 
      In other words, we believe that taking care of you includes taking care of your data and privacy. </p>
    </div>
  `;
  const popup = window.open('', '', popupFeatures);
  popup.document.title = 'Our Company';
  popup.document.write(popupContent);
};

const handleClickTerms = () => {
  
  const popupWidth = 600;
  const popupHeight = 500;
  const left = (window.innerWidth - popupWidth) / 2;
  const top = (window.innerHeight - popupHeight) / 2;
  const popupFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;
  const popupContent = `
    <div style="text-align: center">
      <p> PLEASE READ THESE TERMS OF USE CAREFULLY. ACCESSING OR USING THIS WEBSITE, 
      CONSTITUTES ACCEPTANCE OF THESE TERMS OF USE (“TERMS”), 
      AS SUCH MAY BE REVISED BY STARBUCKS FROM TIME TO TIME, 
      AND IS A BINDING AGREEMENT BETWEEN THE USER (“USER”) 
      AND STARBUCKS CORPORATION (D/B/A STARBUCKS COFFEE COMPANY) 
      GOVERNING THE USE OF THE WEBSITE. IF USER DOES NOT AGREE TO THESE TERMS, 
      USER SHOULD NOT ACCESS OR USE THIS WEBSITE. THESE TERMS CONTAIN DISCLAIMERS 
      AND OTHER PROVISIONS THAT LIMIT OUR LIABILITY TO USER. </p>
      <p> These Terms apply to your access to, and use of, all or part of any website or mobile application of 
      Starbucks Corporation or its subsidiaries and affiliated companies (collectively, “Starbucks”), 
      including www.starbucks.com, www.ideas.starbucks.com, www.starbucksreserve.com, www.starbuckscoffeegear.com, 
      www.stories.starbucks.com and any other site, mobile application or online service where these Terms are posted 
      (collectively, the “Sites”). These Terms do not alter in any way the terms or conditions of any other 
      agreement you may have with Starbucks for products, services or otherwise. <p>
      <p> In the event there is any conflict or inconsistency between these Terms and any other terms of use that appear on the Sites, these Terms will govern. 
      However, if you navigate away from the Sites to a third-party site, you may be subject to alternative terms and 
      conditions of use, as may be specified on such site, which will govern your use of that site. </p>
    </div>
  `;
  const popup = window.open('', '', popupFeatures);
  popup.document.title = 'Our Company';
  popup.document.write(popupContent);
};

const HomePage = props => {
  
  const [fontSize, setFontSize] = useState(16);

  const resizeFont = (increment) => {
    setFontSize(fontSize + increment);

  };
  
  const fontStyles = {
    fontSize: `${fontSize}px`,
  };

  
  return (
    <>
    <ContentDiv>
    
      <div style={{display: 'flex', width: '1290px', height: '500px', backgroundColor: '#a0c292', margin: '30px auto'}}>
        
        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
        <text style={{display: 'flex', color: '#1e3e39', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: `${fontSize}px`, textIndent: '40px'}}>Cups of <br />Appreciation</text>
        <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: '#1f3e39', marginTop: '30px', fontSize: `${fontSize}px`}}>Share the love. Express your thanks with a well-deserved coffee.</text>

          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#a0c292',
            color: '#1e3e39',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
            fontSize: `${fontSize}px`
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#8ba680';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#a0c292';
          }} 
          onClick={() => window.location.href = "/menu"}
          >
          Order now 
        </button >
        </div >
        <video width="500px" height="500px" controls muted autoPlay playsinline loop src= {require('../images/video.MP4')}> </video>
      </div>
      <div style={{display: 'flex', width: '1290px', height: '220px', backgroundColor: '#d4e9e2', margin: '30px auto'}}>

        <img src={require('../images/mobileOrder.png')} style={{ width: '600px', height: '220px'}}/>

        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
          <text style={{display: 'flex', color: 'black', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: `${fontSize}px`}}> Spring in your step, Coffee in your Cup </text>
          <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: 'black', marginTop: '30px', fontSize: `${fontSize}px`}}> Shake up your usual and order your favorite drink now!. </text>
          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#d4e9e2',
            color: 'black',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            borderColor: 'black',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
            fontSize: `${fontSize}px`
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#b3c1bc';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#d4e9e2';
          }}
          onClick={() => window.location.href = "/menu"}
          >
          Order now 
        </button >
        </div >
      </div>
      <div style={{display: 'flex', width: '1290px', height: '500px', backgroundColor: '#f6bed9', margin: '30px auto'}}>
        
        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
          <text style={{display: 'flex', color: '#1e3e39', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: `${fontSize}px`}}> Hot & Cold. Your way</text>
          <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: '#1f3e39', marginTop: '30px', fontSize: `${fontSize}px`}}> Coffee made with love for all the seasons.</text>
          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#f6bed9',
            color: '#1e3e39',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
            fontSize: `${fontSize}px`
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#c595ac';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#f6bed9';
          }}
          onClick={() => window.location.href = "/menu"}
          >
          Order now 
        </button >
        </div >
        <video width="500px" height="500px" controls muted autoPlay playsinline loop src= {require('../images/video2.MP4')}> </video>
      </div>
      <div style={{display: 'flex', width: '1290px', height: '500px', backgroundColor: '#fff4d4', margin: '30px auto'}}>

        <img src={require('../images/butter.jpg')} style={{ width: '600px', height: '500px'}}/>

        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
          <text style={{display: 'flex', color: '#1e3932', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: `${fontSize}px`}}> Just-right choice </text>
          <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: '#1e3932', marginTop: '30px', fontSize: `${fontSize}px`}}> You can't go wrong with a classic!</text>
          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#fff4d4',
            color: '#1e3932',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            borderColor: 'black',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
            fontSize: `${fontSize}px`
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#dcd3b8';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#fff4d4';
          }}
          onClick={() => window.location.href = "/product/76"}
          >
          Order now 
        </button >
        </div >
      </div>

      <div style={{display: 'flex', width: '1290px', height: '350px', backgroundColor: '#1e3932', margin: '30px auto'}}>
        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
          <text style={{display: 'flex', color: 'white', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: `${fontSize}px`}}> Delivery delight </text>
          <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: 'white', marginTop: '30px', fontSize: `${fontSize}px`}}> Brighten your day by getting your favorite order on Uber Eats.</text>
          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#1e3932',
            color: 'white',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            borderColor: 'white',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onClick={() => window.location.href = "https://www.ubereats.com/brand/starbucks?&utm_campaign=bd-starbucks-US-spring23_Owned_.com_US&utm_source=starbucks&utm_medium=Web&publisher=Uber%20Eats%20-%20BD%20(Biz%20Dev)%20-%20Partnerships&publisher_sub_campaign_name=bd-starbucks-US-spring23_Owned_.com_US"}
          onMouseOver={(e) => {
            e.target.style.background = '#162823';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#1e3932';
          }}
          >
          Order now 
        </button >
        </div >
        <img src={require('../images/UberEats.png')} style={{ width: '600px', height: '350px'}}/>
      </div>
    </ContentDiv>
    <EndDiv >
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            width: '1200px',
            height: '300px',
            border: 'none', 
            background: 'white'}}>
          <div style={{
            display: 'flex',
            width: '1200px',
            height: '200px',
            border: 'none', 
            background: 'blue'}} >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                height: '200px',
                border: 'none', 
                background: 'white'}}> 
                  <a style={{ fontWeight: 'bold', fontSize: `${fontSize}px`, marginBottom: '25px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }}>About Us</a>
                  <a style={{ cursor: 'pointer', fontSize: `${fontSize}px`, marginBottom: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif'}} onClick={handleClick}>Our Company</a>
                  <a style={{ cursor: 'pointer', fontSize: `${fontSize}px`, marginBottom: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }} onClick={handleClickCoffee}>Our Coffee</a>
                  <a style={{ cursor: 'pointer', fontSize: `${fontSize}px`, fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }} onClick={handleClickContact}>Contact</a>
                </div>
              <div style={{
                display: 'flex',
                flexFlow: 'column',
                width: '50%',
                height: '200px',
                border: 'none', 
                background: 'white',

                }}> 
                <a style={{ fontWeight: 'bold', fontSize: `${fontSize}px`, marginBottom: '25px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontSize: `${fontSize}px`}}>Social Media</a>
                <div style={{ width: '100%',
                height: '100px', background: 'white'}} >
                  <a href="https://open.spotify.com/user/starbucks"><img src={require('../images/spotify.png')} alt="Image 1"></img></a>
                  <a href="https://www.facebook.com/Starbucks/"><img src={require('../images/fb.png')} alt="Image 2"></img></a>
                  <a href="https://www.pinterest.com/starbucks/"><img src={require('../images/pinterest.png')}></img></a>
                  <a href="https://www.instagram.com/starbucks/"><img src={require('../images/insta.png')} alt="Image 4"></img></a>
                  <a href="https://www.youtube.com/starbucks"><img src={require('../images/youtube.png')} alt="Image 5"></img></a>
                  <a href="https://twitter.com/starbucks/"><img src={require('../images/twitter.png')} alt="Image 6"></img></a>
                </div>
              </div>
              
            </div>
            <div style={{
                display: 'flex',
                flexFlow: 'column',
                width: '100%',
                height: '200px',
                border: 'none', 
                background: 'white',

                }}>
                  <div style={{marginBottom: '25px'}} >
                    <a style={{cursor: 'pointer', marginRight: '15px', textDecoration: 'none', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontSize: `${fontSize}px`}} onClick={handleClickPN}>Privacy Notice</a> 
                    <text> | </text>
                    <a style={{cursor: 'pointer', marginLeft: '15px', textDecoration: 'none', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontSize: `${fontSize}px`}} onClick={handleClickTerms}>Terms of Use</a>
                  </div>
                  <div>
                    <text style = {{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontSize: `${fontSize}px`}}>© 2023 Starbucks Coffee Company. All rights reserved.</text>
                  </div>
                  
              </div>
        </div>
      </EndDiv>
    <BottomDiv>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', marginRight: '400px' }}>
              <button onClick={() => resizeFont(1)}>Increase font size</button>
              <button onClick={() => resizeFont(-1)}>Decrease font size</button>
        </div>
        <button 
          style={{ 
            border: 'none', 
            background: '#00754a',
            color: 'white',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            padding: '10px 20px',
            marginRight: '400px',
            fontSize: `${fontSize}px`
          }}
            onClick={() => window.location.href = "/menu"}
          >
          Order Now
        </button>
        <BottomButton />
      </BottomDiv>
    </>
  );
};

const ContentDiv = styled.div`


`;

const EndDiv = styled.div`
  height: 430px;
  width: 100%;
  background-color: white;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 250px;
`;

export default HomePage;