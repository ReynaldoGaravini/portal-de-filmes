const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3/';

//Função que cria os cards dos filmes
function MostraFilmesEmCartaz () {
    //Executar requisição AJAX

    //Passar a URL ENDPOINT BASE + /movie/now_playing
    $.ajax({
        url: TMDB_ENDPOINT_BASE + 'movie/now_playing',
        data: {
            api_key: '0ed669004962ec3a7cb8926074ca18ee'
        }
    })
    //Receber o JSON
    .done(function (data) {

        let codigo_html = '';
        //Montar os Cards

        for(i = 0; i < data.results.length; i++) {
            //Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            sinopse = data.results[i].overview;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;

            link = 'https://www.themoviedb.org/movie/' + data.results[i].id;

            codigo_html += `<div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div class="card">
                <img src="${imagem}" class="card-img-top" alt="filme: ${titulo}">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${sinopse}</p>
                    <a href="${link}" class="btn btn-primary">Abrir filme</a>
                </div>
            </div>
        </div>`;
        }

        //Repassar os Cards para a página
        $('#em_cartaz').html(codigo_html);
    });
}

function MostraFilmesPopulares () {
    //Executar requisição AJAX

    //Passar a URL ENDPOINT BASE + /movie/popular
    $.ajax({
        url: TMDB_ENDPOINT_BASE + 'movie/popular',
        data: {
            api_key: '0ed669004962ec3a7cb8926074ca18ee'
        }
    })
    //Receber o JSON
    .done(function (data) {

        let codigo_html = '';
        //Montar os Cards

        for(i = 0; i < data.results.length; i++) {
            //Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            sinopse = data.results[i].overview;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;

            link = 'https://www.themoviedb.org/movie/' + data.results[i].id;

            codigo_html += `<div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div class="card">
                <img src="${imagem}" class="card-img-top" alt="filme: ${titulo}">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${sinopse}</p>
                    <a href="${link}" class="btn btn-primary">Abrir filme</a>
                </div>
            </div>
        </div>`;
        }

        //Repassar os Cards para a página
        $('#populares').html(codigo_html);
    });
}

function MostraMelhoresSeries () {
    //Executar requisição AJAX

    //Passar a URL ENDPOINT BASE + /movie/now_playing
    $.ajax({
        url: TMDB_ENDPOINT_BASE + 'tv/popular',
        data: {
            api_key: '0ed669004962ec3a7cb8926074ca18ee'
        }
    })
    //Receber o JSON
    .done(function (data) {

        let codigo_html = '';
        //Montar os Cards

        for(i = 0; i < data.results.length; i++) {
            //Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].name;
            sinopse = data.results[i].overview;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;

            link = 'https://www.themoviedb.org/tv/' + data.results[i].id;

            codigo_html += `<div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div class="card">
                <img src="${imagem}" class="card-img-top" alt="filme: ${titulo}">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${sinopse}</p>
                    <a href="${link}" class="btn btn-primary">Abrir filme</a>
                </div>
            </div>
        </div>`;
        }

        //Repassar os Cards para a página
        $('#series').html(codigo_html);
    });
}

function pesquisarFilme() {
    //Executar requisição AJAX

    //Passar a URL ENDPOINT BASE + /movie/now_playing
    $.ajax({
        url: TMDB_ENDPOINT_BASE + 'search/movie',
        data: {
            api_key: '0ed669004962ec3a7cb8926074ca18ee',
            query: document.getElementById('search').value
        }
    })
    //Receber o JSON
    .done(function (data) {

        let codigo_html = `<div id="subtitulo" class="col-12">
            <h2>Você pesquisou: ${document.getElementById('search').value}</h2>
        </div>`;
        //Montar os Cards
        let numInicial = codigo_html.length

        for(i = 0; i < data.results.length; i++) {
            //Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].original_title;
            sinopse = data.results[i].overview;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;

            link = 'https://www.themoviedb.org/movie/' + data.results[i].id;

            codigo_html += `<div class="col-12 col-sm-12 col-md-6 col-lg-3" id="pesquisados">
            <div class="card">
                <img src="${imagem}" class="card-img-top" alt="filme: ${titulo}">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${sinopse}</p>
                    <a href="${link}" class="btn btn-primary">Abrir filme</a>
                </div>
            </div>
        </div>`;
        }

        if(numInicial == codigo_html.length) {
            codigo_html +=  `<div id="zero-resultados" class="col-12">
            <p>Zero resultados encontrados para sua pesquisa!</p>
    </div>`
        }

        //Repassar os Cards para a página
        $('#pesquisados').html(codigo_html);
    });
}

$(document).ready(function() {
    MostraFilmesEmCartaz();

    MostraFilmesPopulares();

    MostraMelhoresSeries();

    $('#btn-pesquisar').click(pesquisarFilme);
})


//link yt trailer : https://api.themoviedb.org/3/movie/ID_DO_FILME/videos?api_key=0ed669004962ec3a7cb8926074ca18ee

//https://www.themoviedb.org/settings/api