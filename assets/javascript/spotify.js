var axios = require("axios");

var Spotify = function() {
    this.findArtist=function(term) {
        spotURL="https://api.spotify.com/v1/search?q=" + term + "&type=track"

        axios.get(spotURL).then(function(response) {
            console.log(response)
       

    })
}
}




module.exports = Spotify;