import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    grid-column: 6 / end;
    height: 100%;
`;

const shared = css`
    border: 1px solid gray;
    border-radius: 5px;
    height: 42px;
    padding: 5px;
    font-size: 20px;
    color: black;
    margin-right: 20px;
`;

export const Input = styled.input`
    ${shared}
`;

export const Button = styled.button`
    ${shared}
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
