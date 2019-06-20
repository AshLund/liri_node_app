var Concert = require("./concert");

require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var search = process.argv[2];
console.log(search)

var concert= new Concert ();


var term = process.argv.slice(3).join(" ");
console.log(term)

if (search === "concert") {
    console.log("concert");
    concert.findShow(term);
  } else if (search==="spotify") {
    console.log("spotify")
    // tv.findActor(term);
   
  }else if (search==="movie") {
      console.log("movie")
  }else if (search==="do") {
      console.log("do")
  
}
