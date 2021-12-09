import { BackgroundDestination } from "./style/styles";
import {
  Title,
  NumBlur,
  NavDestination,
  UlStyle,
  LiStyle,
  InputStyle,
  LabelStyle,
  Container,
  SectionDestination,
  DivImg,
  DivInfos,
  PlanetTitle,
  ParagraphDestination,
  Tr1,
  Tr2,
} from "./style/styles";
import Moon from "./image/assets/destination/image-moon.png";
import Mars from "./image/assets/destination/image-mars.png";
import Europa from "./image/assets/destination/image-europa.png";
import Titan from "./image/assets/destination/image-titan.png";

const Destination = () => {
  return (
    <BackgroundDestination>
      <Title>
        <NumBlur>01</NumBlur> PICK YOUR DESTINATION
      </Title>
      <NavDestination>
        <UlStyle>
          <LiStyle>
            <InputStyle type="radio" name="tabs" id="tab1" defaultChecked />
            <LabelStyle for="tab1">MOON</LabelStyle>
            <Container>
              <SectionDestination>
                <DivImg>
                  <img src={Moon} alt="Moon" />
                </DivImg>
                <DivInfos>
                  <PlanetTitle>MOON</PlanetTitle>
                  <ParagraphDestination>
                    See our planet as you've never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you're there, take in some history by
                    visitingthe Luna 2 and Apollo 11 landing sites.
                  </ParagraphDestination>
                  <div>
                    <table>
                      <Tr1>
                        <div style={{ marginRight: "79px" }}>
                          <td>AVG. DISTANCE</td>
                        </div>
                        <td>EST. TRAVEL TIME</td>
                      </Tr1>
                      <Tr2>
                        <div style={{ marginRight: "79px" }}>
                          <td>384,400 KM</td>
                        </div>
                        <td>3 DAYS</td>
                      </Tr2>
                    </table>
                  </div>
                </DivInfos>
              </SectionDestination>
            </Container>
          </LiStyle>
          <LiStyle>
            <InputStyle type="radio" name="tabs" id="tab2" />
            <LabelStyle for="tab2">MARS</LabelStyle>
            <Container>
              <SectionDestination>
                <DivImg>
                  <img src={Mars} alt="Mars" />
                </DivImg>
                <DivInfos>
                  <PlanetTitle>MARS</PlanetTitle>
                  <ParagraphDestination>
                    Don’t forget to pack your hiking boots. You’ll need them to
                    tackle Olympus Mons, the tallest planetary mountain in our
                    solar system. It’s two and a half times the size of Everest!
                  </ParagraphDestination>
                  <div>
                    <table>
                      <Tr1>
                        <div style={{ marginRight: "79px" }}>
                          <td>AVG. DISTANCE</td>
                        </div>
                        <td>EST. TRAVEL TIME</td>
                      </Tr1>
                      <Tr2>
                        <div style={{ marginRight: "79px" }}>
                          <td>225 MIL. km</td>
                        </div>
                        <td>9 months</td>
                      </Tr2>
                    </table>
                  </div>
                </DivInfos>
              </SectionDestination>
            </Container>
          </LiStyle>
          <LiStyle>
            <InputStyle type="radio" name="tabs" id="tab3" />
            <LabelStyle for="tab3">EUROPA</LabelStyle>
            <Container>
              <SectionDestination>
                <DivImg>
                  <img src={Europa} alt="Europa" />
                </DivImg>
                <DivInfos>
                  <PlanetTitle>EUROPA</PlanetTitle>
                  <ParagraphDestination>
                    The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover’s dream. With an icy surface, it’s
                    perfect for a bit of ice skating, curling, hockey, or simple
                    relaxation in your snug wintery cabin.
                  </ParagraphDestination>
                  <div>
                    <table>
                      <Tr1>
                        <div style={{ marginRight: "79px" }}>
                          <td>AVG. DISTANCE</td>
                        </div>
                        <td>EST. TRAVEL TIME</td>
                      </Tr1>
                      <Tr2>
                        <div style={{ marginRight: "79px" }}>
                          <td>628 MIL. km</td>
                        </div>
                        <td>3 years</td>
                      </Tr2>
                    </table>
                  </div>
                </DivInfos>
              </SectionDestination>
            </Container>
          </LiStyle>
          <LiStyle>
            <InputStyle type="radio" name="tabs" id="tab4" />
            <LabelStyle for="tab4">TITAN</LabelStyle>
            <Container>
              <SectionDestination>
                <DivImg>
                  <img src={Titan} alt="Titan" />
                </DivImg>
                <DivInfos>
                  <PlanetTitle>TITAN</PlanetTitle>
                  <ParagraphDestination>
                    The only moon known to have a dense atmosphere other than
                    Earth, Titan is a home away from home (just a few hundred
                    degrees colder!). As a bonus, you get striking views of the
                    Rings of Saturn.
                  </ParagraphDestination>
                  <div>
                    <table>
                      <Tr1>
                        <div style={{ marginRight: "79px" }}>
                          <td>AVG. DISTANCE</td>
                        </div>
                        <td>EST. TRAVEL TIME</td>
                      </Tr1>
                      <Tr2>
                        <div style={{ marginRight: "79px" }}>
                          <td>1.6 BIL. km</td>
                        </div>
                        <td>7 years</td>
                      </Tr2>
                    </table>
                  </div>
                </DivInfos>
              </SectionDestination>
            </Container>
          </LiStyle>
        </UlStyle>
      </NavDestination>
    </BackgroundDestination>
  );
};

export default Destination;
