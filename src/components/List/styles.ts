import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns:  33.33% 33.33% 33.33%;
    margin: -15px;


    .box{
        background: var(--white);
        border-radius: 4px;
        padding: 12px;
        box-shadow: 0px 32px 60px rgba(84, 95, 122, 0.08);
        margin: 15px;

        img{
            width: 100%;
            border-radius: 4px;
        }

        .status{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0
        }
        
        .lessons{
            background: rgba(0,0,0,0.1);
            color: #000;
            padding: 5px 8px;
            text-transform: uppercase;
            font-size: 10px;
            border-radius: 3px;
        }

        .title{
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 160%;
        }
    }

    @media(max-width: 890px) { 
        grid-template-columns:  50% 50%;
    }

    @media(max-width: 550px) { 
        grid-template-columns:  100%;
    }
`