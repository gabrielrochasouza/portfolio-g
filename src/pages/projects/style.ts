import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  max-width: var(--max-c-w);
  padding: 120px 20px 60px;
  @media (max-width:768px) {
    padding: 50px 0 60px;
  }
  > .box {
    text-align: center;
  }
  .box > span {
    color: var(--green-color);
    font-family: var(--t-s);
    font-size: 0.8rem;
    display: block;
  }
  h3 {
    display: inline-block;
    position: relative;
    margin: 0 0 40px;
    text-align: center;
    @media (max-width:768px) {
        padding: 0 10px;
    }
  }
  .button-box {
    text-align: center;
  }
  button {
    margin: 50px auto;
    border: 0.25em solid var(--glow-color);
    padding: 1em 3em;
    color: var(--glow-color);
    font-size: 15px;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 1em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
    text-shadow: 0 0 0.5em var(--glow-color);
    position: relative;
    transition: all 0.3s;
  }

  button::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  button:hover {
    color: var(--btn-color-text);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  button:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;
