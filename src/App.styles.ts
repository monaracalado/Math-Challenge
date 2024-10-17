import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background-color: #000;
    color: #FFF;
`;

export const Box = styled.div`
    width: 800px;
    height: 800px;
    background-image: url('/assets/background.jpg');
    background-position: left top;
    background-size: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Map = styled.div`
    width: 480px;
    height: 480px;
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size: 100%;
    border-radius: 5%;
`;

export const Memoria = styled.div`
    width: 650px;
    height: 480px;
    background-color: #00000060;
    background-position: left top;
    background-size: 100%;
    border-radius: 5%;
`;

export const Home = styled.div`
    width: 480px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Final = styled.div`
    background-image: url('/assets/fogos.gif');
    background-size: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    align-items: center;
`;

export const Button = styled.button`
    width: 300px;
    height: 72px;
    color: white;
    background-color: #FF7043;
    font-family: "Chewy", system-ui;
    text-shadow: 3px 4px 4px #000;
    font-size: 38px;
    border-radius: 26px;
    border: none;
    box-shadow: 3px 4px 4px #000;
    margin-top: 40px;
    cursor: pointer;

    :hover{
        transform: scale(1.02);
    }
`;

