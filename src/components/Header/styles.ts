import styled from "styled-components";

export const Topo = styled.header`
    background: var(--purpleclear);
    padding: 15px 0;
    margin-bottom: 30px;
    z-index: 9;

    .logo{ margin-right: 48px }

    .thumbspace{
        margin-left: 28px;
        cursor: pointer;

        .thumb{
            width: 34px;
            height: 34px;
            border-radius: 50%;
            z-index: 1;
        }
        .newnotific{
            background: var(--yellow);
            width: 10px;
            height: 10px;
            position: absolute;
            z-index: 12;
            right: 0;
            border-radius: 50%;
        }        
    }



    .centro{
        display: flex;
        justify-content: space-between;
        align-items: center;

        > div{
            display: flex;
            align-items: center;
        }
    }

    a{ 
        color: var(--white);
        &:hover{
            color: var(--yellow);
        }
    }

    .btntopo{
        background: rgba(0,0,0,0.2);
        text-transform: uppercase;
        border-radius: 4px;
        font-style: normal;
        font-weight: bold;
        font-size: 11px;
        line-height: 15px;
        letter-spacing: -0.02em;
        padding: 9px 17px;
        cursor: pointer;
        color: var(--white);

        &:hover{
            background: rgba(0,0,0,0.5);
            color: var(--yellow)
        }
    }

    .arrows {
        display: none;
    }

    @media(max-width: 585px) {
        position: fixed;
        width: 100%;
        top: 0;

        .thumbspace{
            margin-left: 10px;
        }
        .btntopo{
            display: none;
        }
        .arrows {
            display: inline-block;
            cursor: pointer;
            padding: 0 8px;            
            line-height: 11px;
        }
        .myclasses{
            display: none;
        }
    }

    @media(max-width: 550px) {
        padding: 10px 0;
        .logo{ margin-right: 0px }
    }

`

export const Drop = styled.div<{ open : boolean }>`
    background: rgba(255,255,255,0.8);
    display: block;
    width: 100%;
    height: ${props => props.open ? '100%' : '0%'};
    position: fixed;
    z-index: 8;
    top: 0;
    -webkit-transition: .2s ease-in;
    overflow: hidden;

    .content{
        background: var(--white);
        padding: 15px; 
        margin-top: ${props => props.open ? '68px' : '0'};
        -webkit-transition: .3s ease-in;
        box-shadow: 0px 32px 60px rgba(84, 95, 122, 0.12);

        a{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--purpleclear);

            span{color: #2E3A59}

            &:hover{
                color: #2E3A59;
                span{color: var(--purpleclear)}
            }
        }
    }

    @media(min-width: 585px) {
        height: 0;
    }
    @media(max-width: 550px) {
        .content{
            margin-top: ${props => props.open ? '58px' : '0'};
        }
    }
`