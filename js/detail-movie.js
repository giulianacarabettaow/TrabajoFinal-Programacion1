    let query= location.search
    let ObjQuery= new URLSearchParams(query)
    let id=ObjQuery.get('id')
    console.log(id)

let detailMovies=document.querySelector(".detalles");
    detailMovies.style.display="flex";
    detailMovies.style.flexWrap="wrap";

let titulo=document.querySelector('.tituloMovie')


fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        titulo.innerText=data.original_title
        
        /*let favoritos=getStorage
        let estaMiPelicula = favoritos.includes(data.id)
        let textoInicial = ''
        if (estaMiPelicula){
            textoInicial = "Sacar de Favoritos"
        } else{
            textoInicial = 'Añadir a Favoritos'
        }
        
        function getStorage(){
            let storage = localStorage.getItem('favoritos')
    
            if(storage !== null && storage !== undefined){
                return JSON.parse(storage)
            } else {
                return []
            }
        }*/
        let detalles=`
        <img class='interstellarscreen' src='https://image.tmdb.org/t/p/w500/${data.poster_path}'>
        /////*<button>${textoInicial}</button>*//////
        <p>Sinopsis: ${data.overview}</p> 
        <ul class="ulDetail">
        <li>Fecha de lanzamiento:${data.release_date}</li>
        <li>Calificación: ${data.vote_average} </li>
        <li>Duración: ${data.runtime} minutos </li>
        </ul>
        `
        detailMovies.innerHTML=detalles

    })

    .catch(function(error){
        console.log("Error: " + error);
    })



  let ulGenero=document.querySelector(".detallesGen")

  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.genres)

        let liGenero= ' '

        for(let i=0; i<data.genres.length;i++){
            renderizado=data.genres[i].name
            liGenero+= `<li>${renderizado}</li>`
            
            ulGenero.innerHTML=liGenero
        }

        })
        
    
    .catch(function(error){
        console.log("Error: " + error);
    })



    let ulProvider=document.querySelector(".provider") 

    fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=c71f5b75c8e3c6372967558c16ff597f`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let provider=''
        for(let i=0;i<data.results.US.flatrate.length; i++){
            provider += `<li><img src=https://image.tmdb.org/t/p/w500/${data.results.US.flatrate[i].logo_path} ></li>`

            ulProvider.innerHTML=provider
        }
        console.log(data.results.US.flatrate)
    })
    





    /*
    fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=c71f5b75c8e3c6372967558c16ff597f`)
        .then(function(response){
        return response.json()
        })
        .then(function(data){

            console.log(data);
        })
        fetch('https://www.themoviedb.org/movie/882598-smile/watch?locale=US')
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)

            console.log(data)
            console.log(data)


            let provider= ''

                for (let i=0; i> data.results.length; i++){
                    provider += `<li class= "provider"> Encontrala en: ${data.results.US.flatrate[i].logo_path}</li>`
                }
                
                provider.innerHTML= provider
            })
            
           */
        
