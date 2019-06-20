var axios = require("axios");




var Movies = function() {
    this.findMovie=function(term) {
        movieURL= "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
    

        axios.get(movieURL).then(function(response) {
            var title=response.data.Title
            var year=response.data.Year
            var rating=response.data.imdbRating
            var tomato=response.data.Ratings[1].Value
            var country=response.data.Country
            var plot=response.data.Plot
            var language=response.data.Language
            var actors=response.data.Actors

           console.log("Title::" + title)
           console.log("Year:" + year)
           console.log("IMBD Rating:" + rating)
           console.log("Rotten Tomatoes Rating:" + tomato)
           console.log("Country:" + country)
           console.log("Plot:" + plot)
           console.log("Language:" + language)
           console.log("Actors:" + actors)

           
    })
}
}

module.exports = Movies;
