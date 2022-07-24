import Logo from "../logo";
import { Container } from "./style";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "../burger-menu";


let lastScrollTop = 0;

const eventOnScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollType = false;
  if (scrollTop > lastScrollTop) {
    scrollType = true;
  } else {
    scrollType = false;
  }
  lastScrollTop = scrollTop;
  console.log(scrollType)
  return scrollType;
};


export const Header = () => {

  const navigate = useNavigate();
  const [scrollDown, setScrollDown] = useState(false);
  

  useEffect(() => {
    return () =>window.addEventListener('scroll', ()=>setScrollDown(eventOnScroll()));
  }, []);


  return (
    <Container scroll={scrollDown}>
      <div className="container">
        <div
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          data-aos="fade-down"
          data-aos-offset="-100"
          data-aos-once={"True"}
          className="logo"
        >
          <Logo />
        </div>

        <nav>
          <ul>
            <li
              data-aos="fade-down"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 624);
              }}
              data-aos-offset="-100"
              data-aos-once={"True"}
              data-aos-delay="150"
            >
              Sobre
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="-100"
              data-aos-once={"True"}
              data-aos-delay="250"
              onClick={() => {
                navigate("/projetos");
                window.scrollTo(0, 0);
              }}
            >
              Projetos
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="-100"
              data-aos-once={"True"}
              data-aos-delay="300"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 3400);
              }}
            >
              Contato
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="-100"
              data-aos-once={"True"}
              data-aos-delay="350"
            >
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://drive.google.com/file/d/1SqAM0VZTf_r1eDowagdvjrAqT9zni97H/view?usp=sharing"
              >
                CV
              </a>
            </li>
          </ul>
          <BurgerMenu />
        </nav>
      </div>
    </Container>
  );
};
