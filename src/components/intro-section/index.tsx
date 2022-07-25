import { IntroSec } from "./style";
import React from 'react'
import Icon from "../dev-pic/dev-pic";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const IntroSection = () => {
  return (
    <IntroSec>
      <div
        className="col-left"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="500"
      >
        <p data-aos="fade-right" data-aos-delay="1000" data-aos-duration="500">
          Olá, meu nome é
        </p>
        <h1 data-aos="fade-right" data-aos-delay="1200" data-aos-duration="500">
          Gabriel Rocha{"\n"}
          <span className="second-line">Desenvolvedor Full Stack</span>
        </h1>

        <p
          className="desc"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="500"
        >
          Eu sou um desenvolvedor web Full Stack Brasil,
          estudei na Kenzie Academy, e desenvolvi vários projetos
          e tive várias experiências trabalhando em grupo, no total
          foram mais 2000 horas de curso.
          Atualmente estou em busca de uma oportunidade na área.{" "}
        </p>

        <div className="icons">
          <a href="https://github.com/gabrielrochasouza" target={"_blank"}>
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-da-rocha-de-souza/"
            target={"_blank"}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5524998913379"
            target={"_blank"}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div
        className="col-right"
        data-aos="flip-right"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        <Icon />
      </div>
    </IntroSec>
  );
};
