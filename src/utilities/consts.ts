export const omdb = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBAPI}&`;
export const search = (search: string) => `s=${search}`;
export const title = (title: string) => `t=${title}`;
