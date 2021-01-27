import { createAsyncAction, createAction } from "typesafe-actions";

import { ShortMovie } from "../../types/movie";

const FETCH_INITIAL_MOVIES_REQUEST = "MOVIES/FETCH_INITIAL_MOVIES_REQUEST";
const FETCH_INITIAL_MOVIES_SUCCESS = "MOVIES/FETCH_INITIAL_MOVIES_SUCCESS";
const FETCH_INITIAL_MOVIES_FAILURE = "MOVIES/FETCH_INITIAL_MOVIES_FAILURE";

const SET_SWIPED_MOVIE = "MOVIES/SET_SWIPED_MOVIE";

export const fetchInitialMovies = createAsyncAction(
    FETCH_INITIAL_MOVIES_REQUEST,
    FETCH_INITIAL_MOVIES_SUCCESS,
    FETCH_INITIAL_MOVIES_FAILURE,
)<void, ShortMovie[], Error>();

export const setSwipedMovie = createAction(SET_SWIPED_MOVIE)<number>();
