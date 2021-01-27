import { createReducer, ActionType } from "typesafe-actions";
import { ShortMovie } from "../../types/movie";
import * as actions from "./actions";

interface MoviesReducer {
    initialMovies: ShortMovie[];
    loading: boolean;
    error?: string;
    searchedMovies?: ShortMovie[];
    swipedMovie: number;
}

type Actions = ActionType<typeof actions>;

const initialState: MoviesReducer = {
    initialMovies: [],
    loading: false,
    swipedMovie: 0,
};

export const movies = createReducer<MoviesReducer, Actions>(initialState)
    .handleAction(actions.fetchInitialMovies.request, (state) => ({ ...state, loading: true }))
    .handleAction(actions.fetchInitialMovies.success, (state, { payload }) => ({ ...state, loading: false, initialMovies: payload }))
    .handleAction(actions.fetchInitialMovies.failure, (state, { payload }) => ({ ...state, error: payload.message }))
    .handleAction(actions.setSwipedMovie, (state, { payload }) => ({ ...state, swipedMovie: payload }));
