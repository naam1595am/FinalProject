import React, { useState } from 'react';
import styled from 'styled-components';

// Define a functional component named Product that takes in props as input
const Product = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
  };

  return (
  // The root element of the component is a div with a class name of "product-container"
  <div className="product-container">
    {/* This section contains the product image and its name */}
    <div className="menu-section">
      <h3>Menu</h3>
    </div>
    <StyledImageSection>
      <StyledImage src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630" alt="Product Image" />
      <StyledText>Caffe Americano</StyledText>
    </StyledImageSection>
    {/* This section contains options for the user to customize the product */}
    <StyledOptionsSection>
      <StyledOption>
        {/* The size options section */}
        <StyledTextSizeContainer>
          <StyledTextSize>Size options</StyledTextSize>
        </StyledTextSizeContainer>
        <ImageContainer>
          {/* Each option is an OptionContainer, which contains the image and its details */}
          <OptionContainer>
            <StyledImageChoice src="https://www.starbucks.com/app-assets/0295bad53506b2b3c22b7e5a16fd1554.svg" alt="Product Image" />
            <OptionText>Short</OptionText>
            <OptionTextAmount>8 fl oz</OptionTextAmount>
          </OptionContainer>
          <OptionContainer>
            <StyledImageChoice src="https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d3f83bb851eb6.svg" alt="Product Image" />
            <OptionText>Tall</OptionText>
            <OptionTextAmount>12 fl oz</OptionTextAmount>
          </OptionContainer>
          <OptionContainer>
            <StyledImageChoice src="https://www.starbucks.com/app-assets/f1c3892d2d28cade899a1b6bd4ca5684.svg" alt="Product Image" />
            <OptionText>Grande</OptionText>
            <OptionTextAmount>16 fl oz</OptionTextAmount>
          </OptionContainer>
          <OptionContainer>
            <StyledImageChoice src="https://www.starbucks.com/app-assets/8f4f6108fbeefb3455f09a631489b294.svg" alt="Product Image" />
            <OptionText>Venti</OptionText>
            <OptionTextAmount>20 fl oz</OptionTextAmount>
          </OptionContainer>
        </ImageContainer>
      </StyledOption>
      <StyledOption>
        {/* The customizations section */}
        <StyledTextSizeContainer>
          <StyledTextSize>Customizations</StyledTextSize>
        </StyledTextSizeContainer>
        {/* Buttons for each customization option */}
        <ButtonContainer>
          <button onClick={handleButtonClick}>Decaf</button>
          <button onClick={handleButtonClick}>Shots</button>
          <button onClick={handleButtonClick}>Syrup</button>
          <button onClick={handleButtonClick}>Milk</button>
          <button onClick={handleButtonClick}>Custom</button>
        </ButtonContainer>
        <Overlay showOverlay={showOverlay}>
          <CloseButton onClick={handleCloseClick}>X</CloseButton>
          <DoneButton onClick={handleCloseClick}>Done</DoneButton>
        </Overlay>
      </StyledOption>
    </StyledOptionsSection>
    <BottomDiv>
    </BottomDiv>
  </div>
);
};

// StyledImageSection component with some styling
const StyledImageSection = styled.div`
  background-color: #1e3932;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  width: 100%;
`;

// OptionContainer component with some styling
const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// OptionText component with some styling
const OptionText = styled.div`
  font-size: 14px;
  color: #000;
  margin-top: 8px;
  padding-right: 25px;
  font-weight: bold;
`;

// OptionTextAmount component with some styling
const OptionTextAmount = styled.div`
  font-size: 14px;
  color: #000;
  margin-top: 8px;
  padding-right: 25px;
`;

// StyledImage component with some styling
const StyledImage = styled.img`
  max-width: 250px;
  height: auto;
`;

// StyledText component with some styling
const StyledText = styled.div`
  color: #fff;
  font-size: 30px;
  padding-right: 500px;
  font-weight: bold;
`;

// StyledTextSizeContainer component with some styling
const StyledTextSizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-bottom: 3.5px solid #d4e9e2;
`;

// StyledTextSize component with some styling
const StyledTextSize = styled.div`
  color: #000;
  font-size: 22px;
  white-space: nowrap;
  width: 250px;
  padding-bottom: 10px
`;

// StyledOptionsSection component with some styling
const StyledOptionsSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

// StyledOption component with some styling
const StyledOption = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  width: 50%;
  position: relative;
  padding-bottom: 10px;
  padding-left: 150px;
`;

// ImageContainer component with some styling
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 22px;
`;

// StyledImageChoice component with some styling
const StyledImageChoice = styled.img`
  padding-top: 40px;
  max-width: 65px;
  height: auto;
  margin-right: 28px;
`;

// ButtonContainer component with some styling
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  & > button {
    margin: 10px;
    height: 30px;
    width: 320px;
    background-color: white;
    border-radius: 20px;
    margin-right: 260px;
  }
`;

// BottomDiv component with some styling
const BottomDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #1e3932;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background-color: white;
  z-index: 999;
  transition: transform 0.3s ease-out;
  transform: ${({ showOverlay }) =>
    showOverlay ? 'translateX(0)' : 'translateX(100%)'};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const DoneButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default Product;