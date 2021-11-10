import styled from "styled-components";

export const Container = styled.div`
    background: var(--purpledark);
    background: linear-gradient(180deg, var(--purpleclear) 0%, var(--purplecleargradient) 100%);
    background: -moz-linear-gradient(top,  var(--purpleclear) 0%, var(--purplecleargradient) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  var(--purpleclear) 0%, var(--purplecleargradient) 100%); /* Chrome10-25,Safari5.1-6 */
    box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: auto;

    .centro{
        margin: 0 auto;
        max-width: 1167px;
    }
    .lateraleffect{
        position: absolute;
        left: 80%;
        bottom: -18px;
        z-index: 0;
        -webkit-transition: all 0.25s linear;
    }

    #checkbox-toggle{ display: none }
    .menucel{ 
        display: none;
        float: left;
        margin: 22px 30px 0 13px;
        z-index: 900;
        cursor: pointer;
    }
    .menucel span{ display: block; width: 28px; height: 2px; margin:7px; background: #fff; -webkit-transition: .2s ease-in;  }
    .menucel span:nth-child(2){ width: 18px; }
    .menucel:hover span{ background: var(--yellow); }
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 28px 0;
        z-index: 9;

        .logoemenu{
            display: flex;

            img{
                margin-right: 50px;
            }

            nav ul li{
                display: inline-block;

                a{
                    color: var(--white);
                    padding: 10px 20px;

                    &:hover{
                        color: var(--yellow);
                    }
                }
            }
        }
    }

    @media(max-width: 2190px) { .lateraleffect{ left: 84%; }}
    @media(max-width: 2020px) { .lateraleffect{ left: 89%; }}
    @media(max-width: 1740px) { .lateraleffect{ left: 93%; }}
    @media(max-width: 1440px) { .lateraleffect{ left: 1415px; }}
    @media(max-width: 1253px) { .lateraleffect{ display: none }}
    @media(max-width: 1300px) { .centro{ margin: 0 50px; }}    
    @media(max-width: 710px) { 
        .centro{ margin: 0; height: 100% }

        .logoemenu{ nav{ display: none; }}
        .menucel{ display: inline-block; }
        button{ display: none; }
        
        input[type=checkbox]:checked ~ .menucel span:first-child {
            transform: rotate(-45deg);
            top: 12px;
            position: relative;
        }
        input[type=checkbox]:checked ~ label span:nth-child(3) {
            transform: rotate(45deg);
            top: 3px;
            position: relative;
        }
        input[type=checkbox]:checked ~ label span:nth-child(2) {
            display: none;
        }        
        input[type=checkbox]:checked ~ header{
            display: block;
            position: fixed;
            width: 100%;
            height: calc(100% + 26%);
            background: var(--purpledark);
        }
        input[type=checkbox]:checked ~ header .logoemenu{
            display: block;
            padding:  0 30px;  
            img{
                margin-left: 55px;
            }          
            nav{
                display: block;
                margin: 40% 0 0 0;            
            }
            nav ul li{
                display: block;

                a{
                    display:block;
                    padding: 10px 20px;
                    text-align: center;
                    font-size: 21px;                
                }
            }            
        }
        input[type=checkbox]:checked ~ header button{
            display: block;
            width: calc(100% - 60px);
            margin: 30px;

        }
    }

`

export const Section = styled.section`
    display: flex;
    bottom: -180px;
    flex-direction: row-reverse;

    @media(max-width: 1220px) { bottom: -138px; }
    @media(max-width: 900px) { bottom: -80px; }
    @media(max-width: 790px) { display: block; }

    @media(max-width: 710px) { padding: 0 14px;}

`

export const Effect = styled.div`
    width: 384px;
    height: 767px;     

    .gradient{
        background: linear-gradient(180deg, rgba(255, 234, 164, 0) 3.65%, #FFEAA4 100%);
        width: 100%;
        height: 100%;
        border-radius:0% 100% 0% 100%/0% 50% 30% 50%;
        z-index: 1;
        top: 0;
        position: absolute;
        left: -62px;
    }
    
    .gradientrot{
        background: linear-gradient(180deg, #864EFD 0%, rgba(134, 78, 253, 0) 100%);
        transform: rotate(-21.37deg);
        width: 100%;
        height: 100%;
        border-radius:0% 100% 0% 100%/0% 50% 30% 50%;
        bottom: -79px;
        left: -45px;
        position: absolute;
        z-index: 2;
    }

    img{
        z-index: 3;
        bottom: 32px;
    }

    .yelbol{
        position: absolute;
        width: 193px;
        height: 193px;
        background: linear-gradient(180deg, rgba(255, 199, 0, 0.6) 0%, #FFC700 100%);
        border-radius: 0 50% 50% 50%;
        z-index: 4;
        bottom: 132px;
        right: -85px;
    }

    .pontos{
        z-index: 1;
        position: absolute;
        right: 0;
        right: -122px;
        bottom: 225px;
    }
    .horizontal_dotted_line{
        border-bottom: 6px dotted rgba(255,255,255,0.2);
        width: 70px;
        margin-bottom: 16px;
        

        &::before{
            content: '';
            border-bottom: 6px dotted rgba(255,255,255,0.2);
            width: 70px;
            z-index: 1;
            top: 11px;
            display: block;
            position: absolute;
        }
    } 


    @media(max-width: 1220px) { 
        width: 288px;
        height: 575px; 
        img{
            width: 288px;
            height: 575px;
        } 
        .gradient{ left: -42px; }
        .gradientrot{
            bottom: -65px;
            left: -29px;
        }
        .yelbol{
            bottom: 106px;
            right: -62px;
            width: 144px;
            height: 144px;
        }
        .pontos {
            right: -87px;
            bottom: 174px;
        }
        .horizontal_dotted_line{
            border-bottom: 4px dotted rgba(255,255,255,0.2);
            width: 47px;
            margin-bottom: 12px;            

            &::before{
                content: '';
                border-bottom: 4px dotted rgba(255,255,255,0.2);
                width: 47px;                
                top: 8px;                
            }
        } 
    }

    @media(max-width: 900px) { 
        width: 216px;
        height: 431px; 
        img{
            width: 216px;
            height: 431px;
        } 
        .gradient{ left: -32px; }
        .gradientrot{
            bottom: -37px;
            left: -28px;
        }
        .yelbol{
            bottom: 89px;
            right: -45px;
            width: 108px;
            height: 108px;
        }
        .pontos {
            right: -70px;
            bottom: 108px;
        }
    }

    @media(max-width: 790px) { margin: 30px auto  }

    @media(max-width: 710px) {         
        .pontos, .yelbol{ display: none }
    }
`

export const Content = styled.div`
    padding-left: 12%;
    top: -43px;
    z-index: 4;

    button{ display: block}

    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 48px;
        line-height: 55px;
        letter-spacing: -0.05em;
        margin-bottom: 60px;
        span{
            font-weight: 700;
            display: block;
            color: var(--yellowclear);
            text-transform: uppercase;
        }
    }

    p{
        font-size: 16px;
        line-height: 191.68%;
        margin-bottom: 60px;
    }

    .flex3{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input{
        padding: 12px 28px;
        font-size: 16px;
        line-height: 191.68%;
    }

    .opcoes{ margin-top: 20px}
    .opcoes input[type=radio]{
        position: absolute;
        visibility: hidden;
    }
    .opcao{
        display: inline-block;
        width: 189px
    }
    .pr20{ margin-right: 20px}
    .opcoes label{
        display: block;
        position: relative;
        font-weight: 700;
        padding: 12px 25px 12px 60px;
        margin: 0 auto;

        z-index: 90;
        cursor: pointer;
        -webkit-transition: all 0.25s linear;
        font-size:14px;
        color: var(--white);
        text-transform: uppercase;
        line-height: 23px;
    }

    .check{
        display: block;
        position: absolute;
        background: rgba(255,255,255,0.12);
        border: 1px solid transparent;
        border-radius: 4px;
        height: 47px;
        width: 100%;
        top: 0px;
        transition: border .25s linear;
        -webkit-transition: border .25s linear;
    }

    .opcao:hover .check {
        border: 1px solid rgba(255,255,255,0.35);
    }

    .check::before {
        display: block;
        position: absolute;
        content: "";
        border-radius: 100%;
        height: 18px;
        width: 18px;
        top: 13px;
        left: 14px;
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
        background: rgba(255,255,255,0.3);
        color: #B68300;
        text-align: center
    }

    .opcoes input[type=radio]:checked ~ .check {
        border: 1px solid rgba(255,255,255,0.35);
        
    }

    .opcoes input[type=radio]:checked ~ .check::before{
        background: var(--yellow);
        content: "✔";
    }

    @media(max-width: 1220px) {
        h1, p{
            margin-bottom: 30px;
        }
    }

    @media(max-width: 1065px) {
        .flex3{ display: block; }
        .flex3 > div{ display: flex; margin-bottom: 20px }
        .opcao { width: 50%; }
        .flex3 button{width:100%}
    }

    @media(max-width: 900px) {
        h1 {
            font-size: 41px;
            line-height: 43px;
        }
        p { font-size: 14px }
        h1, p{
            margin-bottom: 17px;
        }
        input { font-size: 14px;}
        .opcoes { margin-top: 10px; }
        .flex3 > div{ margin-bottom: 10px }
        .pr20 { margin-right: 10px; }
    }

    @media(max-width: 790px) { padding-left: 0; }

    @media(max-width: 710px) {         
        h1{ font-size: 28px; line-height: 31px;}
        p{ display: none }
        .opcoes label {
            padding: 12px 2px 12px 38px;
            font-size: 12px;
        }
    }
`