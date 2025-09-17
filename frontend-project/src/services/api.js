const API_KEY="0d913126f53506a71e55c07a5f7119de";
CONST base_url = "https://api.themoviedb.org/3";

export const getPopularMovies = async() => {
    const response = await fetch(`${base_url}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async(query) => {
    const response = await fetch(
        `${base_url}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json();
    return data.results;
};