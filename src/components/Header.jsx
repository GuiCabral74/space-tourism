import { Menu, Line, List, Img, NumBold, LinkStyle } from "./style/styles";
import LogoImg from "./image/assets/shared/logo.svg"


const Header = () => {
  return(
    <Menu>
      <Img src={LogoImg} alt="Logo" />
      <Line />
      <List>
        <LinkStyle to="/"><NumBold>00</NumBold> HOME</LinkStyle>
        <LinkStyle to="destination"><NumBold>01</NumBold> DESTINATION</LinkStyle>
        <LinkStyle to="crew"><NumBold>02</NumBold> CREW</LinkStyle>
        <LinkStyle to="technology"><NumBold>03</NumBold> TECHNOLOGY</LinkStyle>
      </List>
    </Menu>
  )
}

export default Header;