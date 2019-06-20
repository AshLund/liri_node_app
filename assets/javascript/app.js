var Concert = require("./concert");
var Spotify=require("./spotify");
var Movies=require("./movies");

require("dotenv").config();

var keys = require("./keys.js");
var Spotify1 = require('node-spotify-api');
var spotify2 = new Spotify(keys.spotify);

var search = process.argv[2];
console.log(search)

var concert= new Concert ();
var spotify=new Spotify();
var movies=new Movies();


var term = process.argv.slice(3).join(" ");
console.log(term)

if (search === "concert") {
   
    concert.findShow(term);
  } else if (search==="spotify") {
    spotify.findArtist(term)
   
  }else if (search==="movie") {
    movies.findMovie(term)
   
  }else if (search==="do") {
    
  
}
