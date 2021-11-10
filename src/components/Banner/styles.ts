import styled from "styled-components";

export const Container = styled.div`
    background: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
    margin-bottom: 30px;


    .texto{
        color: #343434;
        font-size: 14px;
        line-height: 160%;        
        margin-bottom: 10px;
        .titulobanner{
            font-family: 'Poppins';
            font-size: 21px;
            line-height: 160%;
            margin-bottom: 10px;
            span{
                color: var(--yellow);
            }
        }
    }

    .yelbol{
        position: absolute;
        width: 132px;
        height: 132px;
        background: linear-gradient(180deg,rgba(255,199,0,0.6) 0%,#FFC700 100%);
        border-radius: 0 50% 50% 50%;
        z-index: 4;
        top: -24px;
        left: -148px;

        &::before{
            content: '';
            position: absolute;
            width: 60px;
            height: 60px;
            background: #FFB800;
            border-radius: 0 50% 50% 50%;
            z-index: 4;
            top: -23px;
            left: 14px;
        }
    }

    @media(max-width: 800px) { 
        img{
            width: 45%;
        }
    }

    
    @media(max-width: 560px) { 
        img{ display: none; }
        .yelbol {
            width: 58px;
            height: 58px;
            left: unset;
            right: -6%;

            &::before {
                width: 31px;
                height: 31px;
                top: -12px;
                left: 8px;
            }
        }
    }

`