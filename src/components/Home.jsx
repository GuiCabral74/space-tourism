import { Background, Section, Div, H4, H1, Paragraph, Btn } from "./style/styles";


const Home = () => {
  return(
    //<BrowserRouter>
      <Background>
      <Section>
        <Div>
        <H4>SO, YOU WANT TO TRAVEL TO</H4>
        <H1>SPACE</H1>
        <Paragraph>Let's face it; if you want to go to space, you might as well genuinely to go outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this word experience!</Paragraph>
        </Div>
        <div><Btn>EXPLORE</Btn></div>
        </Section>
      </Background>
    //</BrowserRouter>
  )
}

export default Home;