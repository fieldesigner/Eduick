import React,{ useState } from 'react';
import { GlobalStyle, LandStyle } from '../../styles/global';
import { Container, Section, Effect, Content } from './styles';
import logo from '../../assets/eduick-white.png';
import woman from '../../assets/woman.png'
import Modal from '../../components/Modal';
import Login from '../../components/Forms/Login';

const LandingPage: React.FC = () => {

  const [openmodal, setOpenModal] = useState(false);

  return (
  <>
    <Container>
      <div className="centro">
          <input type="checkbox" id="checkbox-toggle" />
          <label htmlFor="checkbox-toggle" className="menucel"><span></span><span></span><span></span></label>
          <header>          
          <div className="logoemenu">
            <img src={logo} alt="Eduick" height="23" />
            <nav>
              <ul>
                <li><a href="https://fieldesigner.com.br" title="How it works">How it works</a></li>
                <li><a href="https://fieldesigner.com.br" title="About Us">About Us</a></li>
              </ul>
            </nav>
          </div>
          <button className="botao" onClick={() => setOpenModal(!openmodal)}>Get Started</button>
        </header>

        <Section>
            <Content>
              <h1>Find your <span>best teacher</span></h1>

              <p>
                Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!
              </p>

              <form action="">
                <input type="text" className="w100" placeholder="Type here what are you looking for" />

                <div className="flex3 opcoes">
                  <div>
                    <div className="opcao pr20">
                      <input type="radio" value="0" name="type" id="teacher" />
                      <label htmlFor="teacher">i’m a teacher</label>
                      <div className="check"></div>
                    </div>

                    <div className="opcao">
                      <input type="radio" value="1" name="type" id="student" />
                      <label htmlFor="student">i’m a student</label>
                      <div className="check"></div>
                    </div>
                  </div>
                  
                  <button className="botao">SEARCH</button>               
                </div>

              </form>

            </Content>

            <Effect>
              <div className="yelbol"></div>
              <img src={woman} alt="Eduick" />
              <div className="gradientrot"></div>
              <div className="gradient"></div>
              <div className="pontos">
                <div className="horizontal_dotted_line"></div>
                <div className="horizontal_dotted_line"></div>
              </div>
            </Effect>
        </Section>
      </div>

      <div className="lateraleffect">
        <Effect>             
          <div className="gradientrot"></div>
          <div className="gradient"></div>        
        </Effect>
      </div>
    </Container>
    <Modal open={openmodal} children={<Login />} openclose={(e: boolean) => setOpenModal(e)} />
    <GlobalStyle />
    <LandStyle />

  </>    
  );
}

export default LandingPage;