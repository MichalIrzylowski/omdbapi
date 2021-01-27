import React from "react";

import { ShortMovie } from "../../types/movie";

import * as S from "./movie-card.styled";

export const MovieCard: React.FC<ShortMovie> = ({ Poster, Title, Year }) => {
    return (
        <S.Wrapper>
            <S.Img src={Poster} alt={Title} />
            <S.TitleWrapper>
                <h3>{Title}</h3>
                <p>Release year: {Year}</p>
            </S.TitleWrapper>
        </S.Wrapper>
    );
};
