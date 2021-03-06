const addMovieBtn = document.getElementById("add-movie-btn");
const addSearchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
};

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (
        title.trim() === "" ||
        extraName.trim() === "" ||
        extraValue.trim() === ""
    ) { 
        return;
    }
    
    const newMovie = {
        info: {
            title,
            [extraName]: extraValue,
        },
        id: Math.random(),
    };

    movies.push(newMovie);
    console.log(movies);
};

addMovieBtn.addEventListener("click", addMovieHandler);
