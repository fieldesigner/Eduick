import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --purpleclear: #7A57FD;
        --purplecleargradient: #6135D7;
        --purpledark: #200E64;
        --purpletxtbutton: #6F48EC;
        --purplebgmodal: rgba(32,14,100,0.8);
        --purplemodal: #6A40E4;
        --yellow: #FFD74F;
        --yellowclear: #FFEAA4;
        --white: #ffffff;
        --bgdash: #E5E5E5;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        position: relative;
        list-style: none;
        border: none;
    }
    html{
        scroll-behavior: smooth;        
    }
    body{
        background: var(--bgdash);
        color: var(--purpledark);
        font-size: 0.85rem;
        overflow-x: hidden;
        font-family: 'Open Sans', sans-serif, Calibri;
        font-size: 14px;
        
    }
    html, body, #root{ min-height:100% }
    button{
        font-family: 'Open Sans', sans-serif, Calibri;
    }
    a{text-decoration: none}
    .w100{ width: 100%; }
    .centro{
        margin: 0 auto;
        max-width: 1140px;
    }

    @media(max-width: 1226px) { 
        .centro{ margin: 0 40px }
    }
`

export const DashStyle = createGlobalStyle`
    .main{ min-height: calc(100vh - 187px); }
    @media(max-width: 585px) {
        
       body{margin-top: 98px};
    }
    @media(max-width: 550px) {
        .main{ min-height: calc(100vh - 174px); }
        .centro{ margin: 0 20px }
        body{margin-top: 85px};
    }
`

export const LandStyle = createGlobalStyle`
    html{ height: 100% }
    body{
        background: var(--purpledark); 
        height: 100%;
        color: var(--white);
    }
    #root{ min-height:100% }

    input{
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.35);
        box-sizing: border-box;
        border-radius: 4px;   
        color: var(--white);
        padding: 10px 20px;
        font-size: 14px;
        line-height: 191.68%;
        width: 100%;

        ::placeholder { 
            color: var(--white);
            opacity: 0.7; 
        }
    }
    fieldset{
        margin: 20px 0 5px 0;
        font-size: 14px;
    }   
    .botao{
        background: var(--yellow);
        color: var(--purpletxtbutton);
        border: none;
        border-radius: 4px;
        box-shadow: 1px 3px 11px -3px rgba(255, 231, 150, 0.45);
        font-weight: 700;
        padding: 14px 44px;
        font-size: 14px;
        cursor: pointer;
        z-index: 200;

        &:hover{
            background: var(--yellowclear);
            box-shadow: 1px 3px 11px -3px rgba(0, 0, 0, 0.45);
        }
    }
`