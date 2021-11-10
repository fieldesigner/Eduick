import styled from "styled-components";

export const Container = styled.footer`
    background: var(--white);
    color: #343434;
    font-size: 14px;
    text-align: center;
    padding: 20px 0;
    margin-top: 30px;

    @media(max-width: 550px) {
        span{display: none}
    }
`