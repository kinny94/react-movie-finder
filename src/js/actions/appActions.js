var AppDispatcher = require('../dispatcher/appDispatcher');
var AppConstants = require('../constants/appConstants');

var AppActions = {
     searchMovies: function(movie){

        console.log("Searching for movies " + movie.title);
         AppDispatcher.handleViewAction({
             actionType: AppConstants.SEARCH_MOVIES,
             movie: movie
         });
     }
}

module.exports = AppActions;