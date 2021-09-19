import React from "react";
import ReactDOM from "react-dom";

// Packages here/////////////////////
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

// Import Card here////////////////////
import Card from "./CardSlider/card";
import "./styles.css";

// Image////////////////////////////
import Sofa from "./images/sofa.jpg";

// Card Slider properties here //////////////////////////
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
];

// Styled Components starts here ////////////////////
const AboutStyled = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 90px;
  @media (max-width: 1100px) {
    display: block;
    margin: 0 auto;
  }
`;

const AboutTextsStyled = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0;
  @media (max-width: 1100px) {
    display: block;
    margin: 0 auto 20px;
  }
`;

const AboutTitleStyled = styled.h2`
  font-size: 60px;
  line-height: 1.067em;
  font-family: "old standard tt", serif;
  color: #2d2e32;
  @media (max-width: 500px) {
   font-size: 40px;
  }
`;
const AboutContentStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.667em;
  font-weight: 400;
  letter-spacing: 0;
  color: #7b7b7b;
  margin: 20px 0;
`;
const AboutButtonStyled = styled.button`
  color: #2d2e32;
  line-height: 1em;
  letter-spacing: 0.025em;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  background: none;
&:hover {
  background-color: #bf931098;
  transition: 0.4s;
  border-radius: 4px;
}
  & span {
    font-size: 18px;
    display: inline-block;
  }
`;

const AboutImageStyled = styled.img`
  max-width: 650px;
  width: 100%;
  @media (max-width: 1100px) {
    display: block;
    margin: 0 auto;
  }
`;

const AboutCarouselStyled = styled.div`
  width: 48%;
  padding: 50px 2%;
  position: absolute;
  top: 42%;
  left: 15%;
  background: white;
  border: 1px solid #f8eae8;
  box-shadow: 0 5px 14.56px 1.44px rgb(225 241 209 / 23%);
  @media (max-width: 1320px) {
    top: 59%;
  }
  @media (max-width: 1100px) {
    position: relative;
    max-width: 605px;
    width: 100%;
    diplay: block;
    margin: 0 auto;
    left: 0;
  }
 
}
`;

// Components here /////////////////////////
function CardSlider() {
  return (
    <>
      <AboutStyled>
        <AboutTextsStyled>
          <AboutTitleStyled>Architecture with people in mind.</AboutTitleStyled>
          <AboutContentStyled>
            Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum
            auctor nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
            nibh vulpu tate cursus amet lorem mauris.
          </AboutContentStyled>
          <AboutButtonStyled className="aboutBtn">
            READ MORE <span>&raquo;</span>
          </AboutButtonStyled>
        </AboutTextsStyled>
        <AboutImageStyled src={Sofa} />
        <AboutCarouselStyled>
          {/*///////////// Carousel plugin starts here////////////////// */}
          <Carousel breakPoints={breakPoints}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Carousel>
        </AboutCarouselStyled>
      </AboutStyled>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CardSlider />, rootElement);
