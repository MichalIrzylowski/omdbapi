import styled, { css } from "styled-components";

import { LoaderProps } from "./loader";

const adjustableLoader = css`
    width: 100%;
    width: 100%;
`;

const fullPage = css`
    width: 100vw;
    height: 100vh;
`;

export const Loader = styled.div<LoaderProps>`
    ${(props) => (props.fullPage ? fullPage : adjustableLoader)}

    display: flex;
    justify-content: center;
    align-items: center;
`;
