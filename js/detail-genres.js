let queryG=location.search
let ObjQueryG=new URLSearchParams(queryG)
let id=ObjQueryG.get('id')
console.log(id)


let endpoint="https://api.themoviedb.org/3/discover/movie"
let api_key="?api_key=c71f5b75c8e3c6372967558c16ff597f"
let keyword=id

let detailGenres=document.querySelector(".titleDetailGenre h3")
let detailGenresSelection=document.querySelector(".subTitleGenre")
let detailGenresList=document.querySelector(".favoritelist")


fetch(`${endpoint}${api_key}&query=${keyword}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        for(let i=0;i<data.results.length;i++){
            let genreListaM=''
            genreListaM+=`<ul><li>${data.results[i].original_title}</li>
                            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                        </ul>`
        detailGenresList.innerHTML=genreListaM
        }
    })