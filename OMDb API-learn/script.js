function listMovie()
{
    $('#movie-list').html('')
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: 
        {
            'apikey' : '5ba8bf5e',
            's' : $('#search-input').val()
        },
        success : function (res) {
            if(res.Response == "True")
            {
                let movies = res.Search
                    $.each(movies, function(i, movie)
                    {
                        $('#movie-list').append(`

                        <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="`+ movie.Poster +`" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${movie.Title}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>

                              <a href="#" class="">See detail</a>
                            </div>
                          </div>
                    </div>

                        `)
                    })
                // console.log(movies)

                $('#search-input').val('')
            }
            else
            {
                $('#movie-list').append(`
                   <div class="col">
                   <p class="text-center">${res.Error}</p>
                   </div>
                `)
            }
        }

    })
}
$ ('#search-button').on('click', function ()
{
    listMovie()

})

$('#search-input').on('keyup', function(e)
{
    if(e.keyCode == 13)
    {
        listMovie()
    }
})