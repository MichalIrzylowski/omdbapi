import React from "react";

import * as S from "./loader.styled";

export interface LoaderProps {
    fullPage?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ fullPage }) => {
    return <S.Loader fullPage={fullPage}>Loading</S.Loader>;
};
