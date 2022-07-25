import { Link } from "react-router-dom";
import { BurgerContainer } from "./style";
import React from 'react'
import { useNavigate } from "react-router-dom";

const BurgerMenu = () => {
  const navigate = useNavigate();
  return (
    <BurgerContainer>
      <label htmlFor="check" className="bar">
        <input id="check" type="checkbox" />
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
        <div className="mobile-menu">
          <ul className="menu-items">
            <li
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 524);
              }}
            >
              Sobre
            </li>
            <li
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 3599);
              }}
            >
              Contato
            </li>
            <li
              onClick={() => {
                navigate("/projetos");
                window.scrollTo(0, 0);
              }}
            >
              Projetos
            </li>
            <li>
              <a
                target={"_blank"}
                href="https://drive.google.com/file/d/1SqAM0VZTf_r1eDowagdvjrAqT9zni97H/view?usp=sharing"
              >
                Currículo
              </a>
            </li>
          </ul>
        </div>
      </label>
    </BurgerContainer>
  );
};

export default BurgerMenu;
