function getInputValue() {
    fetch("./rlin1_Activity08_MoviesFromJSON.json")
        .then(response => response.json())
        .then(myMovies => loadMovies(myMovies));
    let movieName = document.forms["my_form"]["inputMovieName"];
    let inputMovieName = movieName.value;

    function loadMovies(myMovies) {
        var mainContainer = document.getElementById("goodmovies");
        for (var i = 0; i < myMovies.movies.length; i++) {
            if (myMovies.movies[i].title === inputMovieName) {
                let div = document.createElement("div");
                div.innerHTML = `<br>
                Movie Id : ${myMovies.movies[i].movieId} <br>
                Movie Title : ${myMovies.movies[i].title} <br>
                Year : ${myMovies.movies[i].year}
                <img src="${myMovies.movies[i].url}" alt="${myMovies.movies[i].title}" style="width:200px;"><br>`;
                mainContainer.appendChild(div);
                break;
            }
        }
    }
}
