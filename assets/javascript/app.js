var Concert = require("./concert");
var Spotify=require("./spotify");
var Movies=require("./movies");

require("dotenv").config();
var fs = require("fs");

var keys = require("./keys.js");
var Spotifyreq = require('node-spotify-api');
var spotify = new Spotifyreq(keys.spotify);


var search = process.argv[2];
console.log(search)

var concert= new Concert ();
var movies=new Movies();


var term = process.argv.slice(3).join(" ");
console.log(term)

if (search === "concert-this") {
   
    concert.findShow(term);
  } else if (search==="spotify-this-song") {
    spotifyFun(term)
   
  }else if (search==="movie-this") {
    movies.findMovie(term);
   
  }else if (search==="do") {
    fs.readFile("random.txt", "utf8", function(error, data) {
      if (error) {
        return console.log(error);
      }
      var dataArr = data.split(",");
        console.log(dataArr)
    });
  }

function spotifyFun () {
  if (!term) {
    term = "The Sign by Ace of Base";
  }
    spotify.search (
        {
            type: "track",
            query: term
        },
    function (err, response) {
        if (err) {
            throw err
        }

        var artist=response.tracks.items[0].artists[0].name
        var name=response.tracks.items[0].name
        var link=response.tracks.items[0].external_urls.spotify
        var album=response.tracks.items[0].album.name
       

        console.log("Artist:" + artist)
        console.log("Track Name:" + name)
        console.log("Link:" + link)
        console.log("Album:" + album)
    }
    );
    
}

