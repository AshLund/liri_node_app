var axios = require("axios");
var moment = require("moment");
moment().format();

var Concert = function() {
    this.findShow=function(term) {
        console.log(term + " here is the term")
        concertURL= "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp" 

        axios.get(concertURL).then(function(response) {

            // var jsonData = response.data;

            // if (!jsonData.length) {
            //     console.log("No results found for " + term);
            //     return;
            //   }
         
            //   console.log("Upcoming concerts for " + term + ":");
            // console.log(response.data[0])
            var venue=response.data[0].venue.name
            var location=response.data[0].venue.city
            var rawDate=response.data[0].datetime
            // var bandsFormat="YYYY-MM-DD"
            var convertedDate=moment(rawDate).format("MM/DD/YYYY")
           
    
            console.log("Venue:" + " " + venue)
            console.log("City:" + " " + location)
            console.log("Date:" + " " + convertedDate)

    })
}
}

module.exports = Concert;