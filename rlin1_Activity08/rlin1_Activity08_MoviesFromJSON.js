function loadMovies(myMovies) {
    var mainContainer = document.getElementById("goodmovies");
    for (var i = 0; i < myMovies.movies.length; i++) {
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;
        console.log(`Title: ${title}, Year: ${year}, URL: ${url}`);
        let div = document.createElement("div");
        div.innerHTML = `
    <h3>${title}</h3> <br>
    ${year} <br>
    <img src=${url} width="200"> <br> <br>
    `;
        mainContainer.appendChild(div);
    }
}

fetch("./rlin1_Activity08_MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));