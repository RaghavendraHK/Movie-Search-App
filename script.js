const apiKey = "4a210b04"; // Get free key from http://www.omdbapi.com/

function searchMovie() {
    const movieName = document.getElementById("movieInput").value;
    const resultDiv = document.getElementById("movieResult");

    if (movieName === "") {
        resultDiv.innerHTML = "<p>Please enter a movie name ❗</p>";
        return;
    }

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "False") {
                resultDiv.innerHTML = "<p>Movie not found 😢</p>";
            } else {
                resultDiv.innerHTML = `
                    <img src="${data.Poster}" alt="Movie Poster">
                    <h2>${data.Title}</h2>
                    <p><strong>Year:</strong> ${data.Year}</p>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>IMDB Rating:</strong> ⭐ ${data.imdbRating}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                `;
            }
        })
        .catch(() => {
            resultDiv.innerHTML = "<p>Error fetching data ⚠️</p>";
        });
}
