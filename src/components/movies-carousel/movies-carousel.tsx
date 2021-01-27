import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTransition } from "react-spring";

import { setSwipedMovie } from "../../store/movies/actions";

import * as S from "./movies-carousel.styled";

export const MoviesCarousel = () => {
    const [index, set] = useState(0);
    const movies = useSelector((state) => state.movies.initialMovies);
    const dispatch = useDispatch();
    const transitions = useTransition(index, (p) => p, {
        from: { opacity: 0, transform: "translate3d(100%,0,0)" },
        enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
        leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    });

    useEffect(() => {
        const next = index + 1;

        const timeout = setTimeout(() => {
            if (next < movies.length) {
                dispatch(setSwipedMovie(next));
                set(next);
            } else {
                dispatch(setSwipedMovie(0));
                set(0);
            }
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [index, movies.length, dispatch]);

    const posters = movies.map((movie) => movie.Poster);

    const backgroundImages = transitions.map(({ item, props, key }) => {
        const backgroundImage = posters[item];

        return <S.Img key={key} src={backgroundImage} style={{ ...props }} />;
    });

    return (
        <S.Wrapper>
            <S.Sticky>{backgroundImages}</S.Sticky>
        </S.Wrapper>
    );
};
