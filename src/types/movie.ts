export interface ShortMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface Movie extends ShortMovie {
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Ratings: [{ Source: string; Value: string }, { Source: string; Value: string }, { Source: string; Value: string }];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface SearchResult {
    Response: string;
    Search: ShortMovie[];
    totalResults: string;
}
