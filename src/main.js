const inputElement = document.querySelector(".searchTerm");
const buttonElement = document.querySelector(".searchButton");

function sortByScore(a, b){
    return b.rating - a.rating /*it should show movies listed by its highest rating*/
}

function searchMovies (){
    fetch('https://api.themoviedb.org/3/movie/550?api_key=49e519cb9a42ce99dfb4d115438f1326')
            .then((response) => response.json())
            .then((data) => {
                let movieList = data.results
                return movieList
            })
}