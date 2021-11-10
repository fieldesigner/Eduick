import styled from "styled-components";

export const Container = styled.div`
    width: 500px;

    .posbotao{
        display: block;
        text-align: right;
        margin-top: 30px;
        margin-bottom: 18px;
    }

    @media(max-width: 710px) { 
        width: 100%;

        .posbotao{
            display: block;
            text-align: center;

            .botao{
                width: 100%;
                display: block;
            }
        }
    }

`
export const IconPass = styled.div`
    border:none;
    background: transparent;    
    opacity: 0.8;
    position: absolute;
    width: 50px;
    right: 0px;
    margin-top: -48px;
    text-align: center;
    height: 48px;
    line-height: 55px;
    cursor: pointer;
   
    span{
        font-size: 16px;
        color: var(--white);
    }
`