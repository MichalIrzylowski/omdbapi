import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { ShortMovie } from "../../types/movie";

import { omdb, search } from "../../utilities/consts";
import { MovieCard } from "../movie-card";

import * as S from "./main-content.styled";

export const MainContent = () => {
    const { swipedMovie, initialMovies } = useSelector((state) => state.movies);
    const [movie, setMovie] = useState<ShortMovie | null>(null);
    const [title, setTitle] = useState("");
    const [movies, setMovies] = useState<ShortMovie[]>([]);

    useEffect(() => {
        setMovie(initialMovies[swipedMovie]);
    }, [swipedMovie, initialMovies]);

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            fetch(`${omdb}${search(title)}`)
                .then((res) => res.json())
                .then((res) => setMovies(res.Search));
        },
        [title],
    );

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }, []);

    if (!movie) return null;

    return (
        <S.Wrapper>
            <h1>Hello there</h1>
            <h3>Here you can find some of my favourite movies:</h3>
            <h2>{movie.Title}</h2>
            <h4>You can search for the movies that you like:</h4>
            <form onSubmit={handleSubmit}>
                <S.Input value={title} onChange={handleChange} />
                <S.Button>Search!</S.Button>
            </form>
            <S.CardsWrapper>
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} {...movie} />
                ))}
            </S.CardsWrapper>
        </S.Wrapper>
    );
};
