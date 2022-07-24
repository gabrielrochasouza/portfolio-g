import styled from "styled-components";

export const IconContainer = styled.a`
    position: fixed;
    right: 20px;
    bottom:20px;
    z-index: 40;
    /* animation-delay: 4000ms;
    animation: fadeIn 500ms; */
    svg{
        background-color: var(--whatsapp-color);
        color: var(--text-primary);
        font-size: 60px;
        padding: 5px;
        border-radius: 50%;
        position: relative;
        border: 1px solid var(--text-primary);
    }
    .whats-container{
        display: flex;
        align-items: center;
        gap: 10px;
        
        .box{
            padding: 10px;
            border-radius: 10px;
            background-color: #fff;
            color: #000;
        }
    }
`
