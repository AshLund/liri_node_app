var axios = require("axios");
var moment = require('moment');
moment().format();

var Concert = function() {
    this.findShow=function(term) {
        concertURL="https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";

        axios.get(concertURL).then(function(response) {
            console.log(response.data)
            var venue=response.data[0].venue.name
            var location=response.data[0].venue.city
            var rawDate=response.data[0].datetime
            var bandsFormat="YYYY-MM-DD"
            var convertedDate=moment(rawDate).format("MM/DD/YYYY")
           
    
            console.log("Venue::" + " " + venue)
            console.log("City:" + " " + location)
            console.log("Date:" + " " + convertedDate)

    })
}
}

module.exports = Concert;