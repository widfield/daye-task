import React from "react";
import styled from "styled-components";

const Theme = {
  background: "#fdfbe7",
  text: "#0d3a21",
  cardBg: "#faead6",
  cardBgAlt: "#faeeea",
  secondary: "#e9a522",
  tertiery: "#fdfbe7",
  lightGreen: "#c4e2c0",
};

const OptionsMap = {
  regular: "Regular",
  small: "Small",
  none: "None",
  GBP: "£",
};

const Image = styled.img`
  width: 200px;
  heigth: 202px;
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  background-color: ${Theme.cardBg};
  color: ${Theme.text};
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
`;

const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  padding: 15px;

  & > div {
    padding: 0 15px;
  }
`;

const OptionsWrapper = styled.div`
  flex: 1;
  margin-bottom: 10px;
  font-family: "Raleway", sans-serif;
  display: flex;
  gap: 15px;
  width: 100%;
`;

const Option = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  border-radius: 6px;
  background: ${Theme.lightGreen};
  width: 50px;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    opacity: 0.7;
  }
`;

const OptionHeading = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 4px;
  justify-content: center;
`;

const AmountWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: ${Theme.lightGreen};
  border-radius: 0 10px 0 10px;
  padding: 5px;
`;

const Item = ({ price, currency, productImage, tampons, key }) => {
  return (
    <Wrapper key={key}>
      <Image src={productImage} />
      <PriceWrapper>
        <div>{`${OptionsMap[currency]} ${price.toFixed(2)}`}</div>
      </PriceWrapper>
      <OptionsWrapper>
        {Array.isArray(tampons) ? (
          <>
            <OptionHeading>
              <span>Amount</span>
              <span>Size</span>
              <span>Coating</span>
            </OptionHeading>
            {tampons.map((tampon, i) => (
              <Option key={i}>
                <div>
                  <span>{tampon.amount}</span>
                </div>
                <div>
                  <span>{OptionsMap[tampon.size] || tampon.size}</span>
                </div>
                <div>
                  <span>{OptionsMap[tampon.coating] || tampon.coating}</span>
                </div>
              </Option>
            ))}
          </>
        ) : (
          <>
            <OptionHeading>
              <span>Size</span>
              <span>Coating</span>
            </OptionHeading>
            <Option>
              <div>
                <span>{OptionsMap[tampons.size] || tampons.size}</span>
              </div>
              <div>
                <span>{OptionsMap[tampons.coating] || tampons.coating}</span>
              </div>
            </Option>
            <AmountWrapper>{`${tampons.amount} in pack`}</AmountWrapper>
          </>
        )}
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Item;
