
function handler(e) {
    e.preventDefault();

    let movie = document.querySelector('.form__input').value;

    if(movie){


        const _url = `https://www.omdbapi.com/?s=${movie}&apikey=fb40b8c9`;
        const _options = {
            method: 'get',
            mode: 'cors',
            redirect: 'follow',
            cache: 'default'
        }

        fetch(_url, _options)
        .then(function(response) {
            
            // tratamento do erro
            if(!response.ok) throw new error('erro ao executar função');
        
            //retorne um objeto no formato json
            return response.json();
        })

        .then(function(data){
        //console.log(data);
            let newContent ='';
            for(let i = 0; i < data.Search.length; i++){
                newContent += `<li class="app-movies-all_card">`;  
                newContent += `<figure class="app-movies-all_figure">`;   
                newContent += `<img class="app-movies-all-thumb"   src="${data.Search[i].Poster}"/>`;
                newContent += `</figure>`;
                newContent += `<legend class="app-movies-all__legend">`;
                newContent += `<span class="app-movies-all__year">${data.Search[i].Year}</span>`;
                newContent += `<h2 class="app-movies-all__title">${data.Search[i].Title}</h2>`;
                newContent += `</legend>`;
                newContent += `</li>`;


            }

            document.getElementById('movies').innerHTML = newContent

        
        
        })
        
    } else {
        alert('digite um nome de filme ou serie')
    }

}






window.onload = () => {
    const submit = document.querySelector('.form__submit');
    submit.addEventListener('click', handler);
}