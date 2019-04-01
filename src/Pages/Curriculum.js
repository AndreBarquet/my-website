import React, { Component } from 'react';
import './Curriculum.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { SocialIcon } from 'react-social-icons';

class App extends Component {

  render() {
    return (
      <div className="body-background">
        <header>
          <Fade bottom>
            <div id="intro">
                <h2>André Luiz Barquet Moreira</h2>
                <p> Sou aluno formando do curso de Análise e Desenvolvimento de sistemas no
                    IFTM - Campus Uberaba Parque Tecnológico. Moro em Uberaba MG, sou apaixonado
                    por desenvovimento web e mobile.
                </p>
            </div>  
          </Fade>
        </header>

        {/* div separator */}
        <div className="separator"></div>
        {/* div separator */}

        <div className="infoSection">
          <Fade bottom>
            <div className="infobox">
                <h2>Um Pouco Sobre Mim</h2>
                <p> Amo desenvolvimento web e mobile, principalmente o front-end que é onde tenho mais experiencia
                   e onde mais gosto de programar,
                   possuo bastante conhecimento no back-end também, e procuro sempre evoluir e descobrir
                   coisas novas em ambos.
                   Tenho bastante conhecimento sobre várias linguagens de programação e alguns frameworks,
                   pacote office e um pouco sobre edição de imagens.
                </p>
            </div>  
          </Fade>
          <Zoom>
            <div className="infobox">
                <img src={require('../Pictures/andre.jpg')} />
            </div>  
          </Zoom>
        </div>

        <div className="infoSection">
          <Zoom>
            <div className="infobox">
                <h2>Graduação</h2>
                <p>Tecnólogo em Análise e Desenvolvimento de Sistemas - (Em andamento)</p>
                <p>Início: Fevereiro/2016</p>
                <p>Conclusão/Previsão: Julho/2019</p>
            </div>  
          </Zoom>
          <Fade bottom>
            <div className="infobox" id="skillbox">
                <h2>Habilidades</h2>
                <div className="skillBox">
                  <p>HTML &nbsp; - &nbsp; &nbsp; 90%</p>
                  <div className="skill">
                    <div className="skill_level" id="html"/>
                  </div>
                </div>
                <div className="skillBox">
                  <p>CSS &nbsp; - &nbsp; &nbsp; 90%</p>
                  <div className="skill">
                    <div className="skill_level" id="css"/>
                  </div>
                </div>
                <div className="skillBox">
                  <p>JavaScript &nbsp; - &nbsp; &nbsp; 75%</p>
                  <div className="skill">
                    <div className="skill_level" id="js"/>
                  </div>
                </div>
                <div className="skillBox">
                  <p>Java &nbsp; - &nbsp; &nbsp; 85%</p>
                  <div className="skill">
                    <div className="skill_level" id="java"/>
                  </div>
                </div>
                <div className="skillBox">
                  <p>PHP &nbsp; - &nbsp; &nbsp; 80%</p>
                  <div className="skill">
                    <div className="skill_level" id="php"/>
                  </div>
                </div>
                <div className="skillBox">
                  <p>C# &nbsp; - &nbsp; &nbsp; 70%</p>
                  <div className="skill">
                    <div className="skill_level" id="csharp"/>
                  </div>
                </div>
                
            </div>  
          </Fade>
        </div>

        <div className="infoSection">
          <Fade bottom>
              <div className="infobox">
                  <h2>Frameworks e Bibliotecas</h2>
                  <div className="skillBox">
                    <p>Bootstrap &nbsp; - &nbsp; &nbsp; 80%</p>
                    <div className="skill">
                      <div className="skill_level" id="bootstrap"/>
                    </div>
                  </div>
                  <div className="skillBox">
                    <p>React &nbsp; - &nbsp; &nbsp; 75%</p>
                    <div className="skill">
                      <div className="skill_level" id="react"/>
                    </div>
                  </div>
                  <div className="skillBox">
                    <p>Node &nbsp; - &nbsp; &nbsp; 70%</p>
                    <div className="skill">
                      <div className="skill_level" id="node"/>
                    </div>
                  </div>
              </div>  
            </Fade>
            <Zoom>
              <div className="infobox">
                <h2>Atividades Extracurriculares</h2>
                  <p>Iniciação Científica - Projeto RAE</p>
                  <p>Início: Setembro/2017</p>
                  <p>Conclusão: Março/2018</p>
              </div>  
            </Zoom>
        </div>
        <div className="infoSection">
          <Zoom>
            <div className="infobox" id="PersonalInfo">
                <h2>Informações Pessoais</h2>
                <p>Data de nascimento: 17/07/1997</p>
                <p>Email: andreluiz97.bm@gmail.com</p>
                <p>Celular/WhatsApp: (34) 99801-6422</p>
                <p>Cidade: Uberaba - MG</p>
            </div>  
          </Zoom>
          <Fade bottom>
            <div className="infobox">
                <h2>Idiomas</h2>
                <div className="skillBox">
                  <p>Portugês &nbsp; - &nbsp; &nbsp; 100%</p>
                  <div className="skill">
                    <div className="skill_level" id="Portugues"/>
                  </div>
                </div>
                <div className="skillBox">
                  <p>Inglês &nbsp; - &nbsp; &nbsp; 70%</p>
                  <div className="skill">
                    <div className="skill_level" id="Ingles"/>
                  </div>
                </div>
            </div>  
          </Fade>
        </div>

        <footer>
          <SocialIcon className="socialIcon" url="https://www.linkedin.com/in/andr%C3%A9-luiz-barquet-moreira-b5986b180/" target="_blank"/>
          <SocialIcon className="socialIcon" url="https://www.instagram.com/andrebarquet/" target="_blank"/>
          <SocialIcon className="socialIcon" url="https://www.facebook.com/andreluiz.barquet" target="_blank"/>
        </footer>
      </div>
    );
  }
}

export default App;