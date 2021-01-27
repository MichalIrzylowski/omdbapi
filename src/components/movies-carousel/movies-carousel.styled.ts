import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.div`
    grid-column: 1/6;
    height: 100%;
    overflow: hidden;
`;

export const Sticky = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
`;

export const Img = styled(animated.img)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform opacity;
`;
