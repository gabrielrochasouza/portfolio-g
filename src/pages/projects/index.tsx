import { Container } from "./style";
import mainProjects from "../../components/projects-section/projects";
import ProjectCard from "../../components/project-card";
import Footer from "../../components/footer";
import ContactSection from "../../components/contact-section";
import React from 'react'
import {useNavigate} from  'react-router-dom'

const Projects = () => {
    const navigate = useNavigate()
  return (
    <>
      <Container>
        <div className="box">
          <span>Veja Todos os meus projetos</span>
          <h3>Todos os Projetos já Realizados</h3>
        </div>

        {mainProjects.map((project, i) => (
          <ProjectCard key={`Projeto-n°:${i}`} {...project} />
        ))}
        <div className="button-box">
          <button onClick={()=>{
              window.scrollTo(0,0)
              navigate('/')
          }}>Voltar</button>
        </div>
      </Container>
      <ContactSection />
      <Footer />
    </>
  );
};
export default Projects;
