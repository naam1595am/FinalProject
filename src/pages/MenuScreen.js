import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Title from '../components/Title';

const MenuScreen = (props) => {
    const [menuIndex, setMenuIndex] = useState(0); // current menu index (0, 1, or 2)
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setMenuIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1)); // switch between 0, 1, and 2
      }, 5000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);

  const menus = [
    {
      header: 'Hot and Iced Espresso Beverages',
      items: [
        {
          imgSrc: require('./server/product_1.png'),
          alt: 'Americano',
          name: 'Americano',
        },
        // add more items as needed
        {
          imgSrc: require('./server/product_2.png'),
          alt: 'Cafe Latte',
          name: 'Cafe Latte',
        },
        {
            imgSrc: require('./server/product_3.png'),
            alt: 'Cappuccino',
            name: 'Cappuccino',
          },
          // add more items as needed
          {
            imgSrc: require('./server/product_4.png'),
            alt: 'Caramel Macchiato',
            name: 'Caramel Macchiato',
          },
          {
            imgSrc: require('./server/product_5.png'),
            alt: 'Mocha',
            name: 'Mocha',
          },
          // add more items as needed
          {
            imgSrc: require('./server/product_6.png'),
            alt: 'White Mocha',
            name: 'White Mocha',
          },
          {
            imgSrc: require('./server/product_7.png'),
            alt: 'Black and White Mocha',
            name: 'Black and White Mocha',
          },
          // add more items as needed
          {
            imgSrc: require('./server/product_8.png'),
            alt: 'Caramel Mocha',
            name: 'Caramel Mocha',
          },
          {
            imgSrc: require('./server/product_9.png'),
            alt: 'Coconut Mocha',
            name: 'Coconut Mocha',
          },
          // add more items as needed
          {
            imgSrc: require('./server/product_10.png'),
            alt: 'Espresso',
            name: 'Espresso',
          },
          {
            imgSrc: require('./server/product_11.png'),
            alt: 'Espresso Macchiato',
            name: 'Espresso Macchiato',
          },
          // add more items as needed
          {
            imgSrc: require('./server/product_12.png'),
            alt: 'Espresso Con Panna',
            name: 'Espresso Con Panna',
          },
      ],
    },
    {
      header: 'Brewed Coffee',
      items: [
        {
          imgSrc: require('./server/product_13.png'),
          alt: 'Brewed Coffee',
          name: 'Brewed Coffee',
        },
        // add more items as needed
        {
            imgSrc: require('./server/product_14.png'),
            alt: 'Cafe Au Lait',
            name: 'Cafe Au Lait',
          },
          // add more items as needed
          {
            imgSrc: require('./server/product_15.png'),
            alt: 'Red Eye',
            name: 'Red Eye',
          },
          {
              imgSrc: require('./server/product_16.png'),
              alt: 'Black',
              name: 'Black',
            },
      ],
    },
    {
        header: 'Hot Beverage',
        items: [
          {
            imgSrc: require('./server/product_17.png'),
            alt: 'Hot Chocolate',
            name: 'Hot Chocolate',
          },
          // add more items as needed
          {
              imgSrc: require('./server/product_18.png'),
              alt: 'White Hot Chocolate',
              name: 'White Hot Chocolate',
            },
            // add more items as needed
            {
              imgSrc: require('./server/product_19.png'),
              alt: 'Black and White Chocolate',
              name: 'Black and White Chocolate',
            },
            {
                imgSrc: require('./server/product_20.png'),
                alt: 'Green Tea Latte',
                name: 'Green Tea Latte',
            },
            {
                imgSrc: require('./server/product_21.png'),
                alt: 'Chai Latte',
                name: 'Chai Latte',
              },
              // add more items as needed
              {
                imgSrc: require('./server/product_22.png'),
                alt: 'Brewed Tea Latte',
                name: 'Brewed Tea Latte',
              },
              {
                  imgSrc: require('./server/product_23.png'),
                  alt: 'Hot Brewed Tea',
                  name: 'Hot Brewed Tea',
              },
        ],
      },
      {
        header: 'Iced Tea',
        items: [
          {
            imgSrc: require('./server/product_24.png'),
            alt: 'Iced Black Tea',
            name: 'Iced Black Tea',
          },
          // add more items as needed
          {
              imgSrc: require('./server/product_25.png'),
              alt: 'Iced Green Tea',
              name: 'Iced Green Tea',
            },
            // add more items as needed
            {
              imgSrc: require('./server/product_26.png'),
              alt: 'Iced Passion Tea',
              name: 'Iced Passion Tea',
            },
            {
                imgSrc: require('./server/product_27.png'),
                alt: 'Green Tea Lemonade',
                name: 'Green Tea Lemonade',
              },
              {
                imgSrc: require('./server/product_28.png'),
                alt: 'Passion Tea Lemonade',
                name: 'Passion Tea Lemonade',
              },
        ],
      },
      {
        header: 'Iced Coffee',
        items: [
          {
            imgSrc: require('./server/product_29.png'),
            alt: 'Iced Coffee',
            name: 'Iced Coffee',
          },
          // add more items as needed
          {
              imgSrc: require('./server/product_30.png'),
              alt: 'Iced Cafe Con Leche',
              name: 'Iced Cafe Con Leche',
            },
            // add more items as needed
            {
              imgSrc: require('./server/product_31.png'),
              alt: 'Cold Brewed Iced Coffee',
              name: 'Cold Brewed Iced Coffee',
            },
            {
                imgSrc: require('./server/product_32.png'),
                alt: 'Cold Brewed Iced Coffee with Milk',
                name: 'Cold Brewed Iced Coffee with Milk',
              },
        ],
      },
      {
        header: 'Coffee Based Frappuccinos',
        items: [
          {
            imgSrc: require('./server/product_33.png'),
            alt: 'Coffee Frappuccino',
            name: 'Coffee Frappuccino',
          },
          // add more items as needed
          {
              imgSrc: require('./server/product_34.png'),
              alt: 'Espresso Frappuccino',
              name: 'Espresso Frappuccino',
            },
            // add more items as needed
            {
              imgSrc: require('./server/product_35.png'),
              alt: 'Caramel Frappuccino',
              name: 'Caramel Frappuccino',
            },
            {
                imgSrc: require('./server/product_36.png'),
                alt: 'Mocha Frappuccino',
                name: 'Mocha Frappuccino',
            },
            {
                imgSrc: require('./server/product_37.png'),
                alt: 'Java Chip Frappuccino',
                name: 'Java Chip Frappuccino',
              },
              // add more items as needed
              {
                  imgSrc: require('./server/product_38.png'),
                  alt: 'Cafe Vanilla Frappuccino',
                  name: 'Cafe Vanilla Frappuccino',
                },
                // add more items as needed
                {
                  imgSrc: require('./server/product_39.png'),
                  alt: 'White Mocha Frappuccino',
                  name: 'White Mocha Frappuccino',
                },
                {
                    imgSrc: require('./server/product_40.png'),
                    alt: 'Syrup Frappuccino',
                    name: 'Syrup Frappuccino',
                },
        ],
      },
      {
        header: 'Creme Frappuccino',
        items: [
          {
            imgSrc: require('./server/product_41.png'),
            alt: 'Vanilla Frappuccino',
            name: 'Vanilla Frappuccino',
          },
          // add more items as needed
          {
              imgSrc: require('./server/product_42.png'),
              alt: 'Strawberries and Frappuccino',
              name: 'Strawberries and Frappuccino',
            },
            // add more items as needed
            {
              imgSrc: require('./server/product_43.png'),
              alt: 'Double Choclate Chip Frappuccino',
              name: 'Double Choclate Chip Frappuccino',
            },
            {
                imgSrc: require('./server/product_44.png'),
                alt: 'Syrup Creme Frappuccino',
                name: 'Syrup Creme Frappuccino',
            },
            {
                imgSrc: require('./server/product_45.png'),
                alt: 'Blended Strawberry Frappuccino',
                name: 'Blended Strawberry Frappuccino',
            },
        ],
      },
      {
        header: 'Smoothie',
        items: [
          {
            imgSrc: require('./server/product_46.png'),
            alt: 'Mango Smoothie',
            name: 'Mango Smoothie',
          },
          // add more items as needed
          {
              imgSrc: require('./server/product_47.png'),
              alt: 'Pomegranate Smoothie',
              name: 'Pomegranate Smoothie',
            },
            // add more items as needed
            {
              imgSrc: require('./server/product_48.png'),
              alt: 'Blueberry Smoothie',
              name: 'Blueberry Smoothie',
            },
            {
                imgSrc: require('./server/product_49.png'),
                alt: 'Green Tea Smoothie',
                name: 'Green Tea Smoothie',
            },
            {
                imgSrc: require('./server/product_50.png'),
                alt: 'Blueberry Green Tea Smoothie',
                name: 'Blueberry Green Tea Smoothie',
              },
              {
                  imgSrc: require('./server/product_51.png'),
                  alt: 'Pomegranate Green Tea Smoothie',
                  name: 'Pomegranate Green Tea Smoothie',
              },
        ],
      },
      {
        header: 'Beverages',
        items: [
          {
            imgSrc: require('./server/product_52.png'),
            alt: 'Silk Almond Milk Vanilla',
            name: 'Silk Almond Milk Vanilla',
          },
          // add more items as needed
          {
              imgSrc: require('./server/product_53.png'),
              alt: 'Silk Almond Milk Chocolate',
              name: 'Silk Almond Milk Chocolate',
            },
            // add more items as needed
            {
              imgSrc: require('./server/product_54.png'),
              alt: 'Aquafina Water',
              name: 'Aquafina Water',
            },
            {
                imgSrc: require('./server/product_55.png'),
                alt: 'Liquid IV Hydration Multiplier',
                name: 'Liquid IV Hydration Multiplier',
            },
            {
                imgSrc: require('./server/product_56.png'),
                alt: 'Teavana Hibiscus Spice',
                name: 'Teavana Hibiscus Spice',
              },
              // add more items as needed
              {
                  imgSrc: require('./server/product_57.png'),
                  alt: 'Teavana Classic Chai',
                  name: 'Teavana Classic Chai',
                },
                // add more items as needed
                {
                  imgSrc: require('./server/product_58.png'),
                  alt: 'Teavana Jasmine Citrus',
                  name: 'Teavana Jasmine Citrus',
                },
                {
                    imgSrc: require('./server/product_59.png'),
                    alt: 'Teavana Chamomile Blush',
                    name: 'Teavana Chamomile Blush',
                },
                {
                    imgSrc: require('./server/product_60.png'),
                    alt: 'Teavana Radiant Green',
                    name: 'Teavana Radiant Green',
                },
                {
                    imgSrc: require('./server/product_61.png'),
                    alt: 'Teavana Modern Earl Grey',
                    name: 'Teavana Modern Earl Grey',
                },
        ],
      },
      {
        header: 'Food',
        items: [
          {
            imgSrc: require('./server/product_62.png'),
            alt: 'Flat Cheese Pizza',
            name: 'Flat Cheese Pizza',
          },
          {
            imgSrc: require('./server/product_63.png'),
            alt: 'Deep Dish Pepperoni Pizza',
            name: 'Deep Dish Pepperoni Pizza',
            },
            {
                imgSrc: require('./server/product_64.png'),
                alt: 'Peanut Butter Perfect Bar',
                name: 'Peanut Butter Perfect Bar',
            },
            {
                imgSrc: require('./server/product_65.png'),
                alt: 'Sargento Balanced Breaks',
                name: 'Sargento Balanced Breaks',
            },
            {
                imgSrc: require('./server/product_66.png'),
                alt: 'P3 Snack',
                name: 'P3 Snack',
              },
              {
                imgSrc: require('./server/product_67.png'),
                alt: 'Dippin Sticks Sliced Apples',
                name: 'Dippin Sticks Sliced Apples',
                },
                {
                    imgSrc: require('./server/product_68.png'),
                    alt: 'Italian Sub',
                    name: 'Italian Sub',
                },
                {
                    imgSrc: require('./server/product_69.png'),
                    alt: 'Cream Cheese',
                    name: 'Cream Cheese',
                },
                {
                    imgSrc: require('./server/product_70.png'),
                    alt: 'Sargento Colby Jack Cheese',
                    name: 'Sargento Colby Jack Cheese',
                  },
                  {
                    imgSrc: require('./server/product_71.png'),
                    alt: 'Babybel Cheese Balls',
                    name: 'Babybel Cheese Balls',
                    },
                    {
                        imgSrc: require('./server/product_72.png'),
                        alt: 'Blueberry Muffin',
                        name: 'Blueberry Muffin',
                    },
                    {
                        imgSrc: require('./server/product_73.png'),
                        alt: 'Chocolate Tuxedo Muffin',
                        name: 'Chocolate Tuxedo Muffin',
                    },
        ],
      },
      {
        header: 'Food',
        items: [
          {
            imgSrc: require('./server/product_74.png'),
            alt: 'Banana Nut Muffin',
            name: 'Banana Nut Muffin',
          },
          {
            imgSrc: require('./server/product_75.png'),
            alt: 'Glazed Donut',
            name: 'Glazed Donut',
            },
            {
                imgSrc: require('./server/product_76.png'),
                alt: 'Butter Croissant',
                name: 'Butter Croissant',
            },
            {
                imgSrc: require('./server/product_77.png'),
                alt: 'Gluten Free Brownie',
                name: 'Gluten Free Brownie',
            },
            {
                imgSrc: require('./server/product_78.png'),
                alt: 'Chocolate Chip Cookie',
                name: 'Chocolate Chip Cookie',
              },
              {
                imgSrc: require('./server/product_79.png'),
                alt: 'Chewy Marshmallow',
                name: 'Chewy Marshmallow',
                },
                {
                    imgSrc: require('./server/product_80.png'),
                    alt: 'Salted Caramel Cookie',
                    name: 'Salted Caramel Cookie',
                },
                {
                    imgSrc: require('./server/product_81.png'),
                    alt: 'Toffee Crunch Brownie',
                    name: 'Toffee Crunch Brownie',
                },
                {
                    imgSrc: require('./server/product_82.png'),
                    alt: 'Kind Bar (Caramel)',
                    name: 'Kind Bar (Caramel)',
                  },
                  {
                    imgSrc: require('./server/product_83.png'),
                    alt: 'Belvita Blueberry Breakfast Biscuits',
                    name: 'Belvita Blueberry Breakfast Biscuits',
                    },
                    {
                        imgSrc: require('./server/product_84.png'),
                        alt: 'Altoids (Peppermint)',
                        name: 'Altoids (Peppermint)',
                    },
        ],
      },
      {
        header: 'Items',
        items: [
          {
            imgSrc: require('./server/product_85.png'),
            alt: 'Koffie Straw',
            name: 'Koffie Straw',
          },
          {
              imgSrc: require('./server/product_86.png'),
              alt: 'Starbucks Mug',
              name: 'Starbucks Mug',
            },
            {
              imgSrc: require('./server/product_87.png'),
              alt: 'Starbucks Cup',
              name: 'Starbucks Cup',
            },
            {
              imgSrc: require('./server/product_88.png'),
              alt: 'Starbucks Tumbler',
              name: 'Starbucks Tumbler',
            },
            {
                imgSrc: require('./server/product_89.png'),
                alt: 'A&M Coffee Cup',
                name: 'A&M Coffee Cup',
              },
        ],
      },
  ];

  const currentMenu = menus[menuIndex];

  // group items into arrays of 6
  const groupedItems = currentMenu.items.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / 6);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: '#1e3932',
          height: '100px',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <img
          src={require('./logo.png')}
          alt="Logo"
          style={{ width: '5%', position: 'absolute', top: '10px', right: '10px' }}
        />
        <Title style={{ color: 'white' }}>Menu</Title>
      </div>
      <div style={{ marginTop: '100px', marginBottom: '100px', padding: '30px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 35 }}>{currentMenu.header}</h2>
        {groupedItems.map((group) => (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
            {group.map((item) => (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
                <text>
                  <img src={item.imgSrc} alt={item.alt} style={{ width: '150px' }} />
                  <h3 style={{ textAlign: 'center' }}>{item.name}</h3>
                </text>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default styled(MenuScreen)``;
