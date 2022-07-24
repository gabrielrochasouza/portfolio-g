import ProjectCard from "../project-card";
import { SectionContainer } from "./style";
import mainProjects from "./projects";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ReactIcon from "../../assets/svg/react-icon.svg"

interface IProjects {
  title: string;
  image: string;
  description: string;
  urlRepo: string;
  urlProject: string;
  technologies: string[];
}

const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer icon={ReactIcon} id="projetos">
      <div className="box">
        <span data-aos="fade-in" data-aos-delay="400" data-aos-once={false} data-aos-duration="1000">
          Veja alguns de meus projetos
        </span>
        <h3 data-aos="fade-in" data-aos-delay="700" data-aos-once={false} data-aos-duration="1000">
          Projetos realizados
        </h3>
      </div>

      {mainProjects.slice(0, 4).map((project, i) => (
        <ProjectCard
          key={`Projeto-n°:${i}`}
          {...project}
        />
      ))}
      <div className="button-box">
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/projetos");
          }}
        >
          Ver Todos os projetos
        </button>
      </div>
    </SectionContainer>
  );
};
export default ProjectSection;
