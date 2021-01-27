import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { SearchResult } from "./types/movie";

import { MoviesCarousel } from "./components/movies-carousel";
import { MainContent } from "./components/main-content";
import { Loader } from "./components/loader";
import { fetchInitialMovies } from "./store/movies/actions";

import { omdb, search } from "./utilities/consts";

import * as S from "./app.styled";

export const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector((store) => store.movies.loading);

    useEffect(() => {
        dispatch(fetchInitialMovies.request());

        fetch(`${omdb}${search("star wars")}`)
            .then((res) => res.json())
            .then((res: SearchResult) => dispatch(fetchInitialMovies.success(res.Search)))
            .catch((error) => dispatch(fetchInitialMovies.failure(error)));
    }, []);

    if (loading) return <Loader fullPage />;

    return (
        <S.AppWrapper className="App">
            <MoviesCarousel />
            <MainContent />
        </S.AppWrapper>
    );
};
