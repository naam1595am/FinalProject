import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const BottomButton = () => {
  
  return (
    <Link to="/orderem" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', color: 'black', border: 'none', borderRadius: '10px', cursor: 'pointer', marginRight: '250px' }}>
      <ButtonImg src={require('../images/bag.jpg')} />
      
    </Link>
  );
};

let combinedValues = '';

const Product = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  
  const [sizeImage, setSizeImage] = useState(require('../images/product/size_default.png'));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  let imgSrc = '';
  let menuText = '';
  let descriptionText = '';
  let productPrice = '';

  if (id === '1') {
    imgSrc = require('../images/product/order_1.png');
    menuText = 'Americano';
    productPrice = '2.99';
    descriptionText = 'Americano is a shot of espresso with hot water added. It has a rich and bold flavor.';
  } else if (id === '2') {
    imgSrc = require('../images/product/order_2.png');
    menuText = 'Cafe Latte';
    productPrice = '4.49';
    descriptionText = 'A cafe latte is a shot of espresso with steamed milk and a small layer of foam on top. It has a smooth and creamy flavor.';
  } else if (id === '3') {
    imgSrc = require('../images/product/order_3.png');
    menuText = 'Cappuccino';
    productPrice = '4.49';
    descriptionText = 'A cappuccino is a shot of espresso with equal parts steamed milk and foam. It has a strong and bold flavor.';
  } else if (id === '4') {
    imgSrc = require('../images/product/order_4.png');
    menuText = 'Caramel Macchiato';
    productPrice = '5.49';
    descriptionText = 'A caramel macchiato is a shot of espresso with steamed milk vanilla syrup and caramel sauce. It has a sweet and creamy flavor.';
  } else if (id === '5') {
    imgSrc = require('../images/product/order_5.png');
    menuText = 'Mocha';
    productPrice = '5.49';
    descriptionText = 'A mocha is a shot of espresso with chocolate syrup and steamed milk. It has a rich and chocolatey flavor.';
  } else if (id === '6') {
    imgSrc = require('../images/product/order_6.png');
    menuText = 'White Mocha';
    productPrice = '5.99';
    descriptionText = 'A white mocha is a shot of espresso with white chocolate syrup and steamed milk. It has a sweet and creamy flavor.';
  } else if (id === '7') {
    imgSrc = require('../images/product/order_7.png');
    menuText = 'Black and White Mocha';
    productPrice = '6.49';
    descriptionText = 'A black and white mocha is a shot of espresso with both white and dark chocolate syrups and steamed milk. It has a rich and decadent flavor.';
  } else if (id === '8') {
    imgSrc = require('../images/product/order_8.png');
    menuText = 'Caramel Mocha';
    productPrice = '5.99';
    descriptionText = 'A caramel mocha is a shot of espresso with chocolate syrup caramel sauce and steamed milk. It has a sweet and indulgent flavor.';
  } else if (id === '9') {
    imgSrc = require('../images/product/order_9.png');
    menuText = 'Coconut Mocha';
    productPrice = '6.49';
    descriptionText = 'A coconut mocha is a shot of espresso with coconut syrup chocolate syrup and steamed milk. It has a tropical and chocolatey flavor.';
  } else if (id === '10') {
    imgSrc = require('../images/product/order_10.png');
    menuText = 'Espresso';
    productPrice = '1.99';
    descriptionText = 'Espresso is a single shot of strong and bold coffee.';
  } else if (id === '11') {
    imgSrc = require('../images/product/order_11.png');
    menuText = 'Espresso Macchiato';
    productPrice = '3.49';
    descriptionText = 'A espresso macchiato is a shot of espresso with a small amount of milk foam on top. It has a rich and creamy flavor.';
  } else if (id === '12') {
    imgSrc = require('../images/product/order_12.png');
    menuText = 'Espresso Con Panna';
    productPrice = '3.49';
    descriptionText = 'A espresso con panna is a shot of espresso with whipped cream on top. It has a decadent and indulgent flavor.';
  } else if (id === '13') {
    imgSrc = require('../images/product/order_13.png');
    menuText = 'Brewed Coffee';
    productPrice = '1.99';
    descriptionText = 'A brewed coffee is a classic and simple cup of coffee made by pouring hot water over coffee grounds. It has a bold and robust flavor.';
  } else if (id === '14') {
    imgSrc = require('../images/product/order_14.png');
    menuText = 'Cafe Au Lait';
    productPrice = '3.49';
    descriptionText = 'A cafe au lait is a combination of brewed coffee and steamed milk. It has a smooth and creamy flavor.';
  } else if (id === '15') {
    imgSrc = require('../images/product/order_15.png');
    menuText = 'Red Eye';
    productPrice = '2.99';
    descriptionText = 'A red eye is a cup of brewed coffee with a shot of espresso added. It has a strong and bold flavor.';
  } else if (id === '16') {
    imgSrc = require('../images/product/order_16.png');
    menuText = 'Black';
    productPrice = '1.99';
    descriptionText = 'A black coffee is a simple cup of brewed coffee without any milk or sugar added. It has a strong and bold flavor.';
  } else if (id === '17') {
    imgSrc = require('../images/product/order_17.png');
    menuText = 'Hot Chocolate';
    productPrice = '3.99';
    descriptionText = 'A hot chocolate is a drink made with steamed milk and chocolate syrup. It has a rich and chocolatey flavor.';
  } else if (id === '18') {
    imgSrc = require('../images/product/order_18.png');
    menuText = 'White Hot Chocolate';
    productPrice = '4.49';
    descriptionText = 'A white hot chocolate is a drink made with steamed milk and white chocolate syrup. It has a sweet and creamy flavor.';
  } else if (id === '19') {
    imgSrc = require('../images/product/order_19.png');
    menuText = 'Black and White Chocolate';
    productPrice = '4.99';
    descriptionText = 'A black and white chocolate is a drink made with steamed milk white chocolate syrup';
  } else if (id === '20') {
    imgSrc = require('../images/product/order_20.png');
    menuText = 'Green Tea Latte';
    productPrice = '4.99';
    descriptionText = 'A green tea latte is a drink made with matcha green tea powder and steamed milk. It has a earthy and creamy flavor.';
  } else if (id === '21') {
    imgSrc = require('../images/product/order_21.png');
    menuText = 'Chai Latte';
    productPrice = '4.49';
    descriptionText = 'A chai latte is a drink made with spiced black tea and steamed milk. It has a warm and aromatic flavor.';
  } else if (id === '22') {
    imgSrc = require('../images/product/order_22.png');
    menuText = 'Brewed Tea Latte';
    productPrice = '3.99';
    descriptionText = 'A brewed tea latte is a drink made with brewed tea and steamed milk. It has a light and refreshing flavor.';
  } else if (id === '23') {
    imgSrc = require('../images/product/order_23.png');
    menuText = 'Hot Brewed Tea';
    productPrice = '1.99';
    descriptionText = 'A hot brewed tea is a simple cup of hot water and tea bag. It has a light and natural flavor.';
  } else if (id === '24') {
    imgSrc = require('../images/product/order_24.png');
    menuText = 'Iced Black Tea';
    productPrice = '2.99';
    descriptionText = 'A classic iced black tea made with tea leaves and served over ice. It has a refreshing and bold flavor.';
  } else if (id === '25') {
    imgSrc = require('../images/product/order_25.png');
    menuText = 'Iced Green Tea';
    productPrice = '3.49';
    descriptionText = 'A classic iced green tea made with green tea leaves and served over ice. It has a light and refreshing flavor.';
  } else if (id === '26') {
    imgSrc = require('../images/product/order_26.png');
    menuText = 'Iced Passion Tea';
    productPrice = '3.99';
    descriptionText = 'A passion tea is a blend of hibiscus lemongrass and apple flavors and is served over ice. It has a sweet and fruity flavor.';
  } else if (id === '27') {
    imgSrc = require('../images/product/order_27.png');
    menuText = 'Green Tea Lemonade';
    productPrice = '4.49';
    descriptionText = 'A green tea lemonade is a combination of iced green tea lemonade and simple syrup. It has a sweet and tangy flavor.';
  } else if (id === '28') {
    imgSrc = require('../images/product/order_28.png');
    menuText = 'Passion Tea Lemonade';
    productPrice = '4.49';
    descriptionText = 'A passion tea lemonade is a combination of iced passion tea lemonade and simple syrup. It has a sweet and fruity flavor.';
  } else if (id === '29') {
    imgSrc = require('../images/product/order_29.png');
    menuText = 'Iced Coffee';
    productPrice = '2.99';
    descriptionText = 'A classic iced coffee made with coffee and served over ice. It has a bold and smooth flavor.';
  } else if (id === '30') {
    imgSrc = require('../images/product/order_30.png');
    menuText = 'Iced Cafe Con Leche';
    productPrice = '4.49';
    descriptionText = 'A iced cafe con leche is a combination of iced coffee and sweetened condensed milk. It has a sweet and creamy flavor.';
  } else if (id === '31') {
    imgSrc = require('../images/product/order_31.png');
    menuText = 'Cold Brewed Iced Coffee';
    productPrice = '4.99';
    descriptionText = 'A cold brewed iced coffee is made by steeping coffee grounds in cold water for an extended period of time';
  } else if (id === '32') {
    imgSrc = require('../images/product/order_32.png');
    menuText = 'Cold Brewed Iced Coffee with Milk';
    productPrice = '5.49';
    descriptionText = 'A cold brewed iced coffee with milk is made by steeping coffee grounds in cold water for an extended period';
  } else if (id === '33') {
    imgSrc = require('../images/product/order_33.png');
    menuText = 'Coffee Frappuccino';
    productPrice = '4.99';
    descriptionText = 'A coffee frappuccino is a blended beverage made with coffee milk and ice. It has a smooth and creamy coffee flavor.';
  } else if (id === '34') {
    imgSrc = require('../images/product/order_34.png');
    menuText = 'Espresso Frappuccino';
    productPrice = '5.49';
    descriptionText = 'An expresso frappuccino is a blended beverage made with espresso milk and ice. It has a rich and bold coffee flavor.	';
  } else if (id === '35') {
    imgSrc = require('../images/product/order_35.png');
    menuText = 'Caramel Frappuccino';
    productPrice = '5.99';
    descriptionText = 'A caramel frappuccino is a blended beverage made with coffee milk ice and caramel syrup. It has a sweet and creamy caramel flavor.';
  } else if (id === '36') {
    imgSrc = require('../images/product/order_36.png');
    menuText = 'Mocha Frappuccino';
    productPrice = '5.99';
    descriptionText = 'A mocha frappuccino is a blended beverage made with coffee milk ice and chocolate syrup. It has a rich and chocolatey flavor.';
  } else if (id === '37') {
    imgSrc = require('../images/product/order_37.png');
    menuText = 'Java Chip Frappuccino';
    productPrice = '6.49';
    descriptionText = 'A java chip frappuccino is a blended beverage made with coffee milk ice chocolate chips and chocolate syrup. It has a rich and chocolatey flavor with a slight coffee kick.';
  } else if (id === '38') {
    imgSrc = require('../images/product/order_38.png');
    menuText = 'Cafe Vanilla Frappuccino';
    productPrice = '5.99';
    descriptionText = 'A cafe vanilla frappuccino is a blended beverage made with coffee milk ice and vanilla syrup. It has a sweet and creamy vanilla flavor.';
  } else if (id === '39') {
    imgSrc = require('../images/product/order_39.png');
    menuText = 'White Mocha Frappuccino';
    productPrice = '6.49';
    descriptionText = 'A white mocha frappuccino is a blended beverage made with coffee milk ice and white chocolate syrup. It has a sweet and creamy white chocolate flavor with a slight coffee kick.';
  } else if (id === '40') {
    imgSrc = require('../images/product/order_40.png');
    menuText = 'Syrup Frappuccino';
    productPrice = '5.99';
    descriptionText = 'A syrup frappuccino is a blended beverage made with coffee milk ice and any flavored syrup of your choice. It has a sweet and unique flavor depending on the syrup used.';
  } else if (id === '41') {
    imgSrc = require('../images/product/order_41.png');
    menuText = 'Vanilla Frappuccino';
    productPrice = '5.99';
    descriptionText = 'A vanilla frappuccino is a blended beverage made with milk ice and vanilla syrup. It has a sweet and creamy vanilla flavor.';
  } else if (id === '42') {
    imgSrc = require('../images/product/order_42.png');
    menuText = 'Strawberries and Frappuccino';
    productPrice = '5.99';
    descriptionText = 'A vanilla frappuccino is a blended beverage made with milk ice and vanilla syrup. It has a sweet and creamy vanilla flavor.';
  } else if (id === '43') {
    imgSrc = require('../images/product/order_43.png');
    menuText = 'Double Choclate Chip Frappuccino';
    productPrice = '6.49';
    descriptionText = 'A double chocolate chip frappuccino is a blended beverage made with milk ice chocolate chips and chocolate syrup. It has a rich and chocolatey flavor.';
  } else if (id === '44') {
    imgSrc = require('../images/product/order_44.png');
    menuText = 'Syrup Creme Frappuccino';
    productPrice = '5.99';
    descriptionText = 'A syrup creme frappuccino is a blended beverage made with milk ice and any flavored syrup of your choice. It has a sweet and unique flavor depending on the syrup used.';
  } else if (id === '45') {
    imgSrc = require('../images/product/order_45.png');
    menuText = 'Blended Strawberry Frappuccino';
    productPrice = '5.99';
    descriptionText = 'A blended strawberry frappuccino is a blended beverage made with milk ice and strawberry puree. It has a sweet and refreshing strawberry flavor. ';
  } else if (id === '46') {
    imgSrc = require('../images/product/order_46.png');
    menuText = 'Mango Smoothie';
    productPrice = '4.99';
    descriptionText = 'A blend of mangoes and ice.';
  } else if (id === '47') {
    imgSrc = require('../images/product/order_47.png');
    menuText = 'Pomegranate Smoothie';
    productPrice = '4.99';
    descriptionText = 'A blend of pomegranate and ice.';
  } else if (id === '48') {
    imgSrc = require('../images/product/order_48.png');
    menuText = 'Blueberry Smoothie';
    productPrice = '4.99';
    descriptionText = 'A blend of blueberries and ice.';
  } else if (id === '49') {
    imgSrc = require('../images/product/order_49.png');
    menuText = 'Green Tea Smoothie';
    productPrice = '4.99';
    descriptionText = 'A blend of green tea and ice.';
  } else if (id === '50') {
    imgSrc = require('../images/product/order_50.png');
    menuText = 'Blueberry Green Tea Smoothie';
    productPrice = '4.99';
    descriptionText = 'A blend of blueberries green tea and ice.';
  } else if (id === '51') {
    imgSrc = require('../images/product/order_51.png');
    menuText = 'Pomegranate Green Tea Smoothie';
    productPrice = '4.99';
    descriptionText = 'A blend of pomegranate green tea and ice.';
  } else if (id === '52') {
    imgSrc = require('../images/product/order_52.png');
    menuText = 'Silk Almond Milk Vanilla';
    productPrice = '3.49';
    descriptionText = 'A dairy-free alternative to traditional milk with a hint of vanilla flavor.';
  } else if (id === '53') {
    imgSrc = require('../images/product/order_53.png');
    menuText = 'Silk Almond Milk Chocolate';
    productPrice = '3.49';
    descriptionText = 'A dairy-free alternative to traditional chocolate milk with a rich chocolate flavor.';
  } else if (id === '54') {
    imgSrc = require('../images/product/order_54.png');
    menuText = 'Aquafina Water';
    productPrice = '1.49';
    descriptionText = 'A refreshing bottled water with a pure and crisp taste.';
  } else if (id === '55') {
    imgSrc = require('../images/product/order_55.png');
    menuText = 'Liquid IV Hydration Multiplier';
    productPrice = '1.99';
    descriptionText = 'A powdered drink mix designed to hydrate and replenish electrolytes.';
  } else if (id === '56') {
    imgSrc = require('../images/product/order_56.png');
    menuText = 'Teavana Hibiscus Spice';
    productPrice = '3.99';
    descriptionText = 'A blend of hibiscus flowers cinnamon and cloves with a tart and spicy flavor.';
  } else if (id === '57') {
    imgSrc = require('../images/product/order_57.png');
    menuText = 'Teavana Classic Chai';
    productPrice = '4.49';
    descriptionText = 'A black tea blend with cardamom cinnamon ginger clove and black pepper with a bold and spicy flavor.';
  } else if (id === '58') {
    imgSrc = require('../images/product/order_58.png');
    menuText = 'Teavana Jasmine Citrus';
    productPrice = '3.99';
    descriptionText = 'A green tea blend with jasmine petals and citrus flavors with a refreshing and floral taste.';
  } else if (id === '59') {
    imgSrc = require('../images/product/order_59.png');
    menuText = 'Teavana Chamomile Blush';
    productPrice = '3.99';
    descriptionText = 'A caffeine-free herbal tea blend with chamomile rose petals and herbs with a sweet and calming flavor.';
  } else if (id === '60') {
    imgSrc = require('../images/product/order_60.png');
    menuText = 'Teavana Radiant Green';
    productPrice = '3.99';
    descriptionText = 'A green tea blend with lemongrass and spearmint with a light and refreshing taste.';
  } else if (id === '61') {
    imgSrc = require('../images/product/order_61.png');
    menuText = 'Teavana Modern Earl Grey';
    productPrice = '4.49';
    descriptionText = 'A black tea blend with bergamot and lavender with a modern twist on the classic Earl Grey flavor.';
  } else if (id === '62') {
    imgSrc = require('../images/product/order_62.png');
    menuText = 'Flat Cheese Pizza';
    productPrice = '12.99';
    descriptionText = 'Delicious cheese pizza with a crispy crust.';
  } else if (id === '63') {
    imgSrc = require('../images/product/order_63.png');
    menuText = 'Deep Dish Pepperoni Pizza';
    productPrice = '15.99';
    descriptionText = 'A thick crust pizza topped with pepperoni mozzarella cheese and tomato sauce.';
  } else if (id === '64') {
    imgSrc = require('../images/product/order_64.png');
    menuText = 'Peanut Butter Perfect Bar';
    productPrice = '2.49';
    descriptionText = 'A protein bar made with organic peanut butter and other wholesome ingredients.';
  } else if (id === '65') {
    imgSrc = require('../images/product/order_65.png');
    menuText = 'Sargento Balanced Breaks';
    productPrice = '3.99';
    descriptionText = 'A snack pack featuring natural cheese nuts and dried fruit.';
  } else if (id === '66') {
    imgSrc = require('../images/product/order_66.png');
    menuText = 'P3 Snack';
    productPrice = '1.99';
    descriptionText = 'A protein-packed snack featuring meat cheese and nuts.';
  } else if (id === '67') {
    imgSrc = require('../images/product/order_67.png');
    menuText = 'Dippin Sticks Sliced Apples';
    productPrice = '2.99';
    descriptionText = 'Sliced apples paired with a creamy caramel sauce for dipping.';
  } else if (id === '68') {
    imgSrc = require('../images/product/order_68.png');
    menuText = 'Italian Sub';
    productPrice = '7.99';
    descriptionText = 'A classic sub sandwich with ham salami provolone cheese lettuce tomato and Italian dressing.';
  } else if (id === '69') {
    imgSrc = require('../images/product/order_69.png');
    menuText = 'Cream Cheese';
    productPrice = '1.99';
    descriptionText = 'A smooth and creamy spread perfect for bagels and other breakfast items.';
  } else if (id === '70') {
    imgSrc = require('../images/product/order_70.png');
    menuText = 'Sargento Colby Jack Cheese';
    productPrice = '4.99';
    descriptionText = 'A blend of Colby and Monterey Jack cheeses with a smooth and mild flavor.';
  } else if (id === '71') {
    imgSrc = require('../images/product/order_71.png');
    menuText = 'Babybel Cheese Balls';
    productPrice = '4.99';
    descriptionText = 'Miniature cheese rounds with a creamy texture and mild flavor.';
  } else if (id === '72') {
    imgSrc = require('../images/product/order_72.png');
    menuText = 'Blueberry Muffin';
    productPrice = '2.49';
    descriptionText = 'A fluffy muffin studded with juicy blueberries.';
  } else if (id === '73') {
    imgSrc = require('../images/product/order_73.png');
    menuText = 'Chocolate Tuxedo Muffin';
    productPrice = '2.99';
    descriptionText = 'A decadent chocolate muffin with a creamy chocolate filling.';
  } else if (id === '74') {
    imgSrc = require('../images/product/order_74.png');
    menuText = 'Banana Nut Muffin';
    productPrice = '2.49';
    descriptionText = 'A moist and flavorful muffin made with ripe bananas and crunchy nuts.';
  } else if (id === '75') {
    imgSrc = require('../images/product/order_75.png');
    menuText = 'Glazed Donut';
    productPrice = '1.49';
    descriptionText = 'A classic donut coated in a sweet glaze.';
  } else if (id === '76') {
    imgSrc = require('../images/product/order_76.png');
    menuText = 'Butter Croissant';
    productPrice = '2.49';
    descriptionText = 'A flaky and buttery pastry perfect for breakfast or a snack.';
  } else if (id === '77') {
    imgSrc = require('../images/product/order_77.png');
    menuText = 'Gluten Free Brownie';
    productPrice = '3.49';
    descriptionText = 'A rich and chocolatey brownie made without gluten-containing ingredients.';
  } else if (id === '78') {
    imgSrc = require('../images/product/order_78.png');
    menuText = 'Chocolate Chip Cookie';
    productPrice = '1.99';
    descriptionText = 'A classic cookie with chunks of chocolate in every bite.';
  } else if (id === '79') {
    imgSrc = require('../images/product/order_79.png');
    menuText = 'Chewy Marshmallow';
    productPrice = '0.99';
    descriptionText = 'A soft and fluffy marshmallow treat with a sweet flavor.';
  } else if (id === '80') {
    imgSrc = require('../images/product/order_80.png');
    menuText = 'Salted Caramel Cookie';
    productPrice = '2.49';
    descriptionText = 'A chewy cookie with a sweet and salty flavor combination.';
  } else if (id === '81') {
    imgSrc = require('../images/product/order_81.png');
    menuText = 'Toffee Crunch Brownie';
    productPrice = '3.99';
    descriptionText = 'A decadent brownie loaded with crunchy toffee bits.';
  } else if (id === '82') {
    imgSrc = require('../images/product/order_82.png');
    menuText = 'Kind Bar (Caramel)';
    productPrice = '1.99';
    descriptionText = 'A protein bar made with nuts caramel and chocolate for a sweet and salty snack.';
  } else if (id === '83') {
    imgSrc = require('../images/product/order_83.png');
    menuText = 'Belvita Blueberry Breakfast Biscuits';
    productPrice = '3.49';
    descriptionText = 'A crunchy breakfast biscuit made with whole grains and real blueberries.';
  } else if (id === '84') {
    imgSrc = require('../images/product/order_84.png');
    menuText = 'Altoids (Peppermint)';
    productPrice = '1.49';
    descriptionText = 'A classic breath mint with a refreshing peppermint flavor.';
  } else if (id === '85') {
    imgSrc = require('../images/product/order_85.png');
    menuText = 'Koffie Straw';
    productPrice = '8.99';
    descriptionText = 'A reusable stainless steel straw with a silicone tip and a carrying case perfect for sipping coffee on the go.';
  } else if (id === '86') {
    imgSrc = require('../images/product/order_86.png');
    menuText = 'Starbucks Mug';
    productPrice = '12.99';
    descriptionText = 'A ceramic mug with the Starbucks logo and a large handle for comfortable grip.';
  } else if (id === '87') {
    imgSrc = require('../images/product/order_87.png');
    menuText = 'Starbucks Cup';
    productPrice = '8.99';
    descriptionText = 'A reusable plastic cup with a lid and straw featuring the Starbucks logo and a design inspired by their seasonal promotions.';
  } else if (id === '88') {
    imgSrc = require('../images/product/order_88.png');
    menuText = 'Starbucks Tumbler';
    productPrice = '19.99';
    descriptionText = 'A double-walled insulated tumbler with a screw-on lid and straw featuring a colorful design and the Starbucks logo.';
  } else if (id === '89') {
    imgSrc = require('../images/product/order_89.png');
    menuText = 'A&M Coffee Cup';
    productPrice = '6.99';
    descriptionText = 'A ceramic coffee cup with the Texas A&M University logo and colors.';
  }

  const [selectedOptionsArray, setSelectedOptionsArray] = useState([]);
  const [decafValue, setDecafValue] = useState(null);
  const [shotsValue, setShotsValue] = useState(null);
  const [syrupValue, setSyrupValue] = useState(null);
  const [milkValue, setMilkValue] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  

  const handleSizeButtonClick = (size) => {
    let sizeName = '';
    if (size === 'short') {
      setSizeImage(require('../images/product/size_s.png'));
      sizeName = 'Short';
    } else if (size === 'tall') {
      setSizeImage(require('../images/product/size_t.png'));
      sizeName = 'Tall';
    } else if (size === 'grande') {
      setSizeImage(require('../images/product/size_g.png'));
      sizeName = 'Grande';
    } else if (size === 'venti') {
      setSizeImage(require('../images/product/size_v.png'));
      sizeName = 'Venti';
    }
    setSelectedOptionsArray(prevState => [...prevState.filter(option => option !== 'Short' && option !== 'Tall' && option !== 'Grande' && option !== 'Venti'), sizeName]);
  };

  const [showOverlay, setShowOverlay] = useState(false);

  const [customTypeText, setCustomText] = useState('Edit');
  const [activeForm, setActiveForm] = useState(null);


  const handleButtonClick = (buttonType) => {
    switch(buttonType) {
      case 'decaf':
        setCustomText('Decaf');
        break;
      case 'shots':
        setCustomText('Shots');
        break;
      case 'syrup':
        setCustomText('Syrup');
        break;
      case 'milk':
        setCustomText('Milk');
        break;
      case 'custom':
        setCustomText('Custom');
        break;
      default:
        setCustomText('Customizations');
        break;
    }
    setActiveForm(buttonType);
    setShowOverlay(true);
    document.body.style.overflow = 'hidden';
  };

  function handleOptionChange(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  }
  const renderForm = () => {
    switch (activeForm) {
      case 'decaf':
        return (
          <form>
            <label>
              <input type="radio" name="decaf" value="Caffeinated" checked={decafValue === 'Caffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Caffeinated</text>
          </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="Decaffeinated" checked={decafValue === 'Decaffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Decaffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="Half Caffeinated" checked={decafValue === 'Half Caffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Half Caffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="Quarter Caffeinated" checked={decafValue === 'Quarter Caffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Quarter Caffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="Three Quarters Caffeinated" checked={decafValue === 'Three Quarters Caffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Three Quarters Caffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="One Third Caffeinated" checked={decafValue === 'One Third Caffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>One Third Caffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="Two Thirds Caffeinated" checked={decafValue === 'Two Thirds Caffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Two Thirds Caffeinated</text>
            </label>
          </form>
          
        );
        
      case 'shots':
        // render form for shots
        return (
        <form>
            <label>
              <input type="radio" name="shots" value="Standard Recipe" checked={shotsValue === 'Standard Recipe'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Standard Recipe</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="Solo Shot" checked={shotsValue === 'Solo Shot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Solo Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="Double Shot" checked={shotsValue === 'Double Shot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Double Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="Triple Shot" checked={shotsValue === 'Triple Shot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Triple Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="Quad Shot" checked={shotsValue === 'Quad Shot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Quad Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="Five Shot" checked={shotsValue === 'Five Shot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Five Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="Six Shot" checked={shotsValue === 'Six Shot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Six Shot</text>
            </label>
          </form>
        );
        break;
      case 'syrup':
        // render form for syrup
        return (
          <form>
              <label>
                <input type="radio" name="syrup" value="No Syrup / Standard Recipe" checked={syrupValue === 'No Syrup / Standard Recipe'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>No Syrup / Standard Recipe</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Vanilla" checked={syrupValue === 'Vanilla'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Vanilla</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Sugar Free Vanilla" checked={syrupValue === 'Sugar Free Vanilla'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Sugar Free Vanilla</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Caramel" checked={syrupValue === 'Caramel'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Caramel</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Raspberry" checked={syrupValue === 'Raspberry'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Raspberry</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Classic" checked={syrupValue === 'Classic'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Classic</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Toffe Nut" checked={syrupValue === 'Toffe Nut'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Toffe Nut</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Coconut" checked={syrupValue === 'Coconut'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Coconut</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Mocha" checked={syrupValue === 'Mocha'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Mocha</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="White Mocha" checked={syrupValue === 'White Mocha'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>White Mocha</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Caramel Sauce" checked={syrupValue === 'Caramel Sauce'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Caramel Sauce</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Chai" checked={syrupValue === 'Chai'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Chai</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Itaberco Blueberry" checked={syrupValue === 'Itaberco Blueberry'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Itaberco Blueberry</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Itaberco Mango" checked={syrupValue === 'Itaberco Mango'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Itaberco Mango</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Itaberco Pomegranate" checked={syrupValue === 'Itaberco Pomegranate'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Itaberco Pomegranate</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Itaberco Seasonal" checked={syrupValue === 'Itaberco Seasonal'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Itaberco Seasonal</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Sweetened" checked={syrupValue === 'Sweetened'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Sweetened</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Unsweetened" checked={syrupValue === 'Unsweetened'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Unsweetened</text>
              </label>
              <br/>
            </form>
          );
        break;
      case 'milk':
        // render form for milk
        return (
          <form>
            <label>
              <input type="radio" name="milk" value="Standard Recipe" checked={milkValue === 'Standard Recipe'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Standard Recipe</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="Two Percent" checked={milkValue === 'Two Percent'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Two Percent</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="Nonfat (Skim)" checked={milkValue === 'Nonfat (Skim)'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Nonfat (Skim)</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="Whole" checked={milkValue === 'Whole'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Whole</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="One Percent" checked={milkValue === 'One Percent'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>One Percent</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="Soy" checked={milkValue === 'Soy'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Soy</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="Half and Half (Breve)" checked={milkValue === 'Half and Half (Breve)'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Half and Half (Breve) </text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="Water" checked={milkValue === 'Water'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Water </text>
            </label>
            <br />
          </form>
        );
        break;
      case 'custom':
        // render custom form
        return (
          <form>
            <label>
              <input type="checkbox" name="custom" value="Standard Recipe" checked={selectedOptions.includes('Standard Recipe')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Standard Recipe</text>
              
            </label> 
            <br />
            <label>
              <input type="checkbox" name="custom" value="No Foam" checked={selectedOptions.includes('No Foam')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Foam</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Foam" checked={selectedOptions.includes('Add Foam')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Foam</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="No Whip" checked={selectedOptions.includes('No Whip')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Whip</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Whip" checked={selectedOptions.includes('Add Whip')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Whip</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="With Room" checked={selectedOptions.includes('With Room')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>With Room</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="No Room" checked={selectedOptions.includes('No Room')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Room</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Extra Ice" checked={selectedOptions.includes('Extra Ice')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Extra Ice</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Light Ice" checked={selectedOptions.includes('Light Ice')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Light Ice</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="No Ice" checked={selectedOptions.includes('No Ice')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Ice</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Water" checked={selectedOptions.includes('Add Water')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Water</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="No Water" checked={selectedOptions.includes('No Water')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Water</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Caramel Sauce on Top" checked={selectedOptions.includes('Caramel Sauce on Top')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Caramel Sauce on Top</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Caramel Sauce on Bottom" checked={selectedOptions.includes('Caramel Sauce on Bottom')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Caramel Sauce on Bottom</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="No Caramel Sauce" checked={selectedOptions.includes('No Caramel Sauce')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Caramel Sauce</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Chocolate Sauce on Top" checked={selectedOptions.includes('Chocolate Sauce on Top')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Chocolate Sauce on Top</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Chocolate Sauce on Bottom" checked={selectedOptions.includes('Chocolate Sauce on Bottom')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Chocolate Sauce on Bottom</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="No Chocolate Sauce" checked={selectedOptions.includes('No Chocolate Sauce')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Chocolate Sauce</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Nutmeg on Top" checked={selectedOptions.includes('Add Nutmeg on Top')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Nutmeg on Top</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Cinnamon on Top" checked={selectedOptions.includes('Add Cinnamon on Top')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Cinnamon on Top</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Sugar" checked={selectedOptions.includes('Add Sugar')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Sugar</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Splenda" checked={selectedOptions.includes('Add Splenda')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Splenda</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Equal" checked={selectedOptions.includes('Add Equal')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Equal</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Sweet and Low" checked={selectedOptions.includes('Add Sweet and Low')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Sweet and Low</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Sugar in the Raw" checked={selectedOptions.includes('Add Sugar in the Raw')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Sugar in the Raw</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Extra Hot" checked={selectedOptions.includes('Extra Hot')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Extra Hot</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Custom Temperature" checked={selectedOptions.includes('Custom Temperature')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Custom Temperature</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Double Blend" checked={selectedOptions.includes('Double Blend')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Double Blend</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Itaberco Energy" checked={selectedOptions.includes('Add Itaberco Energy')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Itaberco Energy</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Itaberco Matcha" checked={selectedOptions.includes('Add Itaberco Matcha')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Itaberco Matcha</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Itaberco Protein" checked={selectedOptions.includes('Add Itaberco Protein')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Itaberco Protein</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Honey" checked={selectedOptions.includes('Add Honey')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Honey</text>
            </label>
            <br />
            <label>
              <input type="checkbox" name="custom" value="Add Agave Syrup" checked={selectedOptions.includes('Add Agave Syrup')} onChange={handleOptionChange} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Agave Syrup</text>
            </label>
            <br />
          </form>
        );
        break;
      default:
        return null; // no form selected
    }
  };
  console.log("Size Value: ", selectedOptionsArray);
  console.log("Decaf Value: ",decafValue);
  console.log("Shots Value: ", shotsValue);
  console.log("Syrup Value: ", syrupValue);
  console.log("Milk Value: ", milkValue);
  console.log("Custom Values: ",selectedOptions);

  combinedValues = `${selectedOptionsArray.join(', ')} ${decafValue} ${shotsValue} ${syrupValue} ${milkValue} ${selectedOptions.join(', ')}`;
 
  console.log("String: ", combinedValues);

  const handleCloseClick = () => {
    setShowOverlay(false);
    document.body.style.overflow = 'auto';
  };

  const [buttonPressed, setbuttonPressed] = useState(false);

  const handleClick = () => {
    setbuttonPressed(true);
    console.log("Button product", buttonPressed);
    navigate('/orderem', { state: { menuText: menuText, combinedValues: combinedValues ,productPrice: productPrice, buttonPressed: true}});

  }

  return (
    
    <>
      <div style={{marginTop: '20px'}}>
        <text style={{marginLeft: '125px', fontFamily: 'Helvetica Neue, sans-serif', fontSize: '15px'}}>Menu / {menuText}</text>
      </div>
      <TopDiv>
        <img src={imgSrc} style={{ width: '1200px'}}/>
      </TopDiv>
      <CustomizationDiv>
        <SizesDiv>
          <SizesOptionsDiv>
            <SizesText>Size options</SizesText>
            <div style={{position: 'relative'}}>
            <img src={sizeImage} style={{ position: 'absolute', marginTop: '10px', marginLeft: '50px', marginRight: '50px', width: '70%', zIndex: '0'}} />
              <div style={{marginLeft: '42px' }}>
                <SizeButton onClick={() => handleSizeButtonClick('short')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('tall')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('grande')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('venti')}></SizeButton>
              </div>
            </div>
          </SizesOptionsDiv>
        </SizesDiv>
        <OptionsDiv>
          <OptionsCustomDiv>
            <CustomText>Customizations</CustomText>
              <div >
                
                <button onClick={() => handleButtonClick('decaf')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '60px 0 30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Decaf</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={() => handleButtonClick('shots')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Shots</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={() => handleButtonClick('syrup')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Syrup</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={() => handleButtonClick('milk')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Milk</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={() => handleButtonClick('custom')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Custom</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
              </div>
          </OptionsCustomDiv>
        </OptionsDiv>
        <Overlay showOverlay={showOverlay}>
          <CloseButton onClick={handleCloseClick}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
            <labelClose className="close">close</labelClose>
          </CloseButton>
          <selectionDiv style={{display: 'flex', flexFlow: 'column' , backgroundColor: 'white', height: '800px', width: '550px', margin: 'auto'}} >
            <customOrderText style={{fontSize: '32px', fontFamily: 'Helvetica Neue, sans-serif', fontWeight: 'bold'}}>{customTypeText}</customOrderText>
            <div  style={{marginTop: '100px', height: '700px', overflow: 'auto'}}>
            {renderForm()}
            </div>
          </selectionDiv>
          <DoneButton
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '30px',
            border: 'none', 
            background: '#00754a',
            color: 'white',
            cursor: 'pointer',
            height: '50px',
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            padding: '10px 20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
           onClick={handleCloseClick}>Done</DoneButton>
        </Overlay>
      </CustomizationDiv>
      <BottomDiv>
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
          }} onClick={handleClick}>
          Add to Order
        </button>
        <BottomButton />
      </BottomDiv>
    </>
  );
  
};

const TopDiv = styled.div`
  height: 330px;
  width: 100%;
  background-color: #1e3932;
  margin-top: 20px;
  display: flex;
  align-items: center;
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

const CustomizationDiv  = styled.div`
  height: 520px;
  width: 100%;
  background-color: pink;
  display: flex;
`;

const SizesDiv = styled.div`
  height: 520px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionsDiv  = styled.div`
  height: 520px;
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const SizesOptionsDiv  = styled.div`
  margin-top: 30px;
  height: 520px;
  width: 60%;
  background-color: white;
`;

const OptionsCustomDiv  = styled.div`
  margin-top: 30px;
  height: 520px;
  width: 60%;
  background-color: white;
  margin-left: 30px;
`;

const SizesText = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px; /* add margin-bottom to move the line further down */
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #d4e9e2;
  }
`;

const CustomText = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px; /* add margin-bottom to move the line further down */
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #d4e9e2;
  }
`;

const SizeButton = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: inline-block;
  padding: 0px;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  margin-left: 26px;
  margin-top: 28px;
  
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 52%;
  background-color: white;
  z-index: 999;
  transition: transform 0.3s ease-out;
  transform: ${({ showOverlay }) =>
    showOverlay ? 'translateX(0)' : 'translateX(100%)'};
    overflow-y: auto;
  
    label {
      display: flex;
      align-items: center;
      justify-content: space-between; /* this will push the radio input to the right */
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 10px;
      border: 2px solid black;
      height: 40px;
      width: 480px;
      cursor: pointer;
    }
    form input[type="radio"] {
      order: 2; /* this will move the radio input to the end of the flex container */
    }

    form input[type="radio"]::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      margin-left: -5px;
      margin-top: -5px;
      border-radius: 100%;
      border: 2.5px solid #00754a;
      background-color: white;
    }
    
    form input[type="radio"]:checked::before {
      background-color: #00754a; 
    }

    label input {
      order: 2;
      margin-left: 5px;
    }
    
    form input[type="checkbox"] {
      order: 2; /* this will move the checkbox input to the end of the flex container */
    }
    
    form input[type="checkbox"]::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      margin-left: -5px;
      margin-top: -5px;
      border-radius: 50%;
      border: 2.5px solid #00754a;
      background-color: white;
    }
    
    form input[type="checkbox"]:checked::before {
      background-color: #00754a;
    }
    
`;

const CloseButton = styled.div`
  position: relative;
  margin: auto;
  width: 30px;
  height: 30px;
  margin-top: 30px;
  margin-right: 50px;
  cursor: pointer;

  .leftright {
    height: 4px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: #00754a;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all .3s ease-in;
  }

  .rightleft {
    height: 4px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: #00754a;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all .3s ease-in;
  }

  .close {
    color: black;
    font-family: Helvetica, Arial, sans-serif; 
    font-size: .6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all .3s ease-in;
    opacity: 0;
    margin: 50px 0 0px -2.5px;
    position: absolute;
  }

  &:hover .leftright {
    transform: rotate(-45deg);
    background-color: #1e3932;
  }

  &:hover .rightleft {
    transform: rotate(45deg);
    background-color: #1e3932;
  }

  &:hover .close {
    opacity: 1;
  }
`;

const DoneButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default Product;
