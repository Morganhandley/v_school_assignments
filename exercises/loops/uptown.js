var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];



////****************** PRINT LYRICS NORMAL ***********************


//function addLyricsTogether() {
//    var allLyrics = "";
//    for (var i = 0; i < lyrics.length; i++) {
//        allLyrics += lyrics[i] + " ";
//    }
//    console.log(allLyrics);
//}
//
//addLyricsTogether(lyrics);


//****************** PRINT LYRICS REVERESED ***********************


//function addLyricsTogether() {
//    var allLyrics = "";
//    for (var i= lyrics.length; i >= 0; i--) {
//        allLyrics += lyrics[i] + " ";
//    }
//}
//
//console.log(lyrics.reverse().join(" "));


//****************** PRINT LYRICS EVERY-OTHER-WORD ***********************


//function addLyricsTogether() {
//    var allLyrics = "";
//    for (var i = 0; i < lyrics.length; i += 2) {
//        allLyrics += lyrics[i] + " ";
//    }
//    console.log(allLyrics);
//}
//
//addLyricsTogether(lyrics);

//****************** PRINT LYRICS REVERSE-EVERY-TWO-WORDS ***********************

//
//
function addLyricsTogether(lyrics) {
    var allLyrics = "";
    for (var i = 1, j = 0; i <= lyrics.length; i += 2, j += 2) {
        allLyrics += lyrics[i] += lyrics[j] + " ";
    }

    
    console.log(allLyrics);
}


addLyricsTogether(lyrics);




