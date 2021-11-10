import styled from "styled-components";

export const Container = styled.div< { load: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 43px;

    .lds-ring {
        display: ${props => props.load ? 'inline-block' : 'none'} ;
        position: relative;
        width: 43px;
        height: 43px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 34px;
        height: 34px;
        margin: 6px;
        border: 6px solid var(--purpleclear);
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--purpleclear) transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`