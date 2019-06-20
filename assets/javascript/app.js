var Concert = require("./concert");
var Spotify=require("./spotify");
var Movies=require("./movies");

require("dotenv").config();

var keys = require("./keys.js");
var Spotifyreq = require('node-spotify-api');
var spotify = new Spotifyreq(keys.spotify);


var search = process.argv[2];
console.log(search)

var concert= new Concert ();
// var spotify=new Spotify();
var movies=new Movies();


var term = process.argv.slice(3).join(" ");
console.log(term)

if (search === "concert") {
   
    concert.findShow(term);
  } else if (search==="spotify") {
    spotifyFun(term)
   
  }else if (search==="movie") {
    movies.findMovie(term)
   
  }else if (search==="do") {
    
  
}

function spotifyFun () {
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

