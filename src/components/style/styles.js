import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import BackgroundImage from "../image/assets/home/background-home-desktop.jpg"
import Destination from "../image/assets/destination/background-destination-desktop.jpg"
import Crew from "../image/assets/crew/background-crew-desktop.jpg"
import Tech from "../image/assets/technology/background-technology-desktop.jpg"
import { Link } from "react-router-dom";

/**GLOBALS */

export const GloblaStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

/**HOME */

export const Background = styled.section`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 40px;
  position: absolute;
`

export const Img = styled.img`
  width: 48px;
  height: 48px;
  padding: 24px 0 0 55px;
`

export const Line = styled.div`
  content: "";
  display: block;
  width: 473px;
  height: 1px;
  background: #ffff;
  margin: 48px 10px 0 64px;
  opacity: 0.25;
`

export const List = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  color: white;
  width: 830px;
  height: 57px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  padding-top: 39px;
`

export const LinkStyle = styled(Link)`
  color: #fff;
  text-decoration: none;
`

export const NumBold = styled.em`
    font-style: normal;
    font-weight: bold;
    margin-right: 11px;
`

/**CONTENT MENU */

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
`

export const Div = styled.div`
  width: 450px;
  height: 382px;
  color: white;
  margin: 256px 386px 131px 0;
`

export const H4 = styled.h4`
  font-size: 20px;
  color: #D0D6F9;
  line-height: 33,6px;
  letter-spacing: 4.725px;
`

export const H1 = styled.h1`
  font-size: 150px;
  margin: 0;
`

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #D0D6F9;
`

export const Btn = styled.button`
  font-size: 32px;
  width: 274px;
  height: 274px;
  border: none;
  border-radius: 50%;
  margin: 364px 0 131px 0;
  &:hover{
    cursor: pointer;
    box-shadow: 0 0 200px 88px #979797;
//    opacity: 0.25;
  }
`

/**DESTINATION PAGE */

export const BackgroundDestination = styled.section`
  background-image: url(${Destination});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

export const Title = styled.h1`
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #fff;
  padding: 212px 0 64px 220px;
  margin: 0;
`

export const NumBlur = styled.em`
  font-style: normal;
  opacity: 0.25;
`

export const NavDestination = styled.nav`
  height: 478px;
  padding-bottom: 112px;
  position: relative;
  color: #fff;
`

export const UlStyle = styled.ul`
`

export const LiStyle = styled.li`
  float: left;
  list-style: none;
`

export const InputStyle = styled.input`
  display: none;
  &:checked ~ label{
    &::after{
      content: "";
      display: block;
      width: 41px;
      height: 3px;
      background: #D0D6F9;
      margin-top: 12px;
    }
  }
  &:checked ~ div {
    display: block;
  }
`

export const LabelStyle = styled.label`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #D0D6F9;
  display: block;
  cursor: pointer;
  width: 285.5px;
`

export const Container = styled.div`
  display: none;
  bottom: 50px;
  left: 40px;
  position: absolute;
`

export const SectionDestination = styled.section`
  display: flex;
  justify-content: space-around;
`

export const DivImg = styled.div`
  width: 445px;
  height: 445px;
  margin-right: 200px;
`

export const DivInfos = styled.div`
  width: 445px;
  height: 472px;
`

export const PlanetTitle = styled.h1`
  font-size: 100px;
  line-height: 115px;
  margin: 37px 0 14px;
`

export const ParagraphDestination = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  &::after{
    content:"";
    display: block;
    width: 444px;
    height: 1px;
    background: #383b4b;
    margin: 54px 0 28px;
  }
`

export const Tr1 = styled.tr`
  font-size: 14px;
  line-height: 17px;
  color: #d0d6f9;
  margin-bottom: 12px;
`

export const Tr2 = styled.tr`
  font-size: 28px;
  line-height: 32px;
`

/**CREW PAGE */

export const BackgroundCrew = styled.section`
  background-image: url(${Crew});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

/**TECHNOLOGY */

export const BackgroundTech = styled.section`
  background-image: url(${Tech});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`