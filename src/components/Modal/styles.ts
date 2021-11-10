import styled from "styled-components";

export const Container = styled.div<{ show: boolean }>`
    background: var(--purplebgmodal);
    position: absolute;
    top: 0;
    left: 0;
    display: ${props => props.show ? 'flex' : 'none'};
    width: 100%;
    height: 100%;
    z-index: 900;
    justify-content: center;
    align-items: center;

    @media(max-width: 710px) { 
        background: var(--purplemodal);
    }
`

export const Modalbox = styled.div`
    background: var(--purplemodal);
    border-radius: 4px;
    padding: 20px;

    @media(max-width: 710px) { 
        width: 100%;
        height: 100%;
        background: transparent;
    }
`

export const Close = styled.button`
    background: var(--purpledark);
    border-radius: 50%;
    padding: 20px;
    border: none;
    position: absolute;
    top: -17px;
    right: -17px;
    cursor: pointer;
    -webkit-transition: .2s ease-in;
    z-index: 300;

    &::before{
        content: '✕';
        position: absolute;
        color: var(--white);
        font-size: 21px;
        line-height: 1px;
        left: 11.5px;
    }

    &:hover{
        background: var(--yellow);
        &::before{
            color: var(--purpledark);
        }
    }

    @media(max-width: 710px) { 
        background: none;
        top: 10px;
        right: 10px;
    }
`

export const Titulo =  styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 118.5%;
    letter-spacing: -0.05em;
    margin-bottom: 30px;

    span{
        font-weight: 700;
        display: block;
        color: var(--yellowclear);
        text-transform: uppercase;
        font-size: 36px;
    }
`