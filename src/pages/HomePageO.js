import React from 'react'
import styled from 'styled-components'

import Title from '../components/Title'

const HomePage = props => {
  const banners = [    
  // {color: '#C1E7D9',
  //       height: '300px', 
  // link: 'https://www.starbucks.com/menu' 
  // },   
   
  //  {color: '#8ADB9B',      text: 'Easter Treats',      height: '500px',      image: 'https://www.starbucks.com/weblx/images/easter/easter-chick.jpg', 
  //    link: 'https://www.starbucks.com/menu'    },  

  //  {      color: '#EBBECB',       image: 'https://www.starbucks.com/weblx/images/happy-hour/happy-hour-desktop.jpg',      link: 'https://www.starbucks.com/menu'    },  
   




   
  //  {color: '#C1E7D9',
  // text: 'New Spring Drinks',      height: '300px', 
  // image: 'https://www.starbucks.com/weblx/images/spring-21/spring-21-cold-beverage.jpg',
  // link: 'https://www.starbucks.com/menu' 
  // },

  // {      color: '#8ADB9B',       height: '500px',      image: 'https://www.starbucks.com/weblx/images/easter/easter-chick.jpg',      link: 'https://www.starbucks.com/menu'    },  

  //  {      color: '#EBBECB',     height: '300px', text: 'Limited Time Offer',      image: 'https://www.starbucks.com/weblx/images/happy-hour/happy-hour-desktop.jpg',      link: 'https://www.starbucks.com/menu'    },
  ];

  const leftBanners = banners.slice(0, Math.ceil(banners.length / 2));
  const rightBanners = banners.slice(Math.ceil(banners.length / 2));

  return (
    <HomePageWrapper>
      {/* <Title>Starbucks Home</Title> */}
      <BannerContainer>
        <LeftBannerContainer>
            <Banner className='left1'>
              <a href='https://www.starbucks.com/menu'>
                <BannerText></BannerText>
              </a>
            </Banner>
            <Banner className='left2'>
              <a href='https://www.starbucks.com/menu'>
                <BannerText className='textleft2'>New Easter Treats</BannerText>
              </a>
            </Banner>
            <Banner className='left3'>
              <a href='https://www.starbucks.com/menu'>
                <BannerText></BannerText>
              </a>
            </Banner>
        </LeftBannerContainer>
        <RightBannerContainer>
        <Banner className='right1'>
              <a href='https://www.starbucks.com/menu'>
                <BannerText className='textright1'>Savory Breakfast</BannerText>
              </a>
            </Banner>
            <Banner className='right2'>
              <a href='https://www.starbucks.com/menu'>
                <BannerText></BannerText>
              </a>
            </Banner>
            <Banner className='right3'>
              <a href='https://www.starbucks.com/menu'>
                <BannerText className='textright3'>Limited Time Offers</BannerText>
              </a>
            </Banner>
        </RightBannerContainer>
      </BannerContainer>
    </HomePageWrapper>
  )
}

const HomePageWrapper = styled.div`
  margin: 0 auto;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

const LeftBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const RightBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Banner = styled.div`
  background-color: ${props => props.color};
  padding: 10px;
  margin-right: 0;
  margin-left: 0;
  max-width: 100%;
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 30px;
  height: ${props => props.height};
  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  // &:not(:last-child) {
  // }
`;

const BannerText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HomePage;