var AppActions = require('../actions/AppActions');

module.exports = {
    searchMovies:  function(movie){
        console.log(movie);
        $.ajax({
            url: `http://www.omdbapi.com/?s=${movie.title}&apikey=2e5cf0ab`,
            dataType: 'json',
            cache: false,
            success: function(){
                AppActions.receiveMovieResults(data.Search);
            }.bind(this),
            error: function(xhr, status, err){
                alert("Error!!");
            }.bind(this)   
        });
    }
}

