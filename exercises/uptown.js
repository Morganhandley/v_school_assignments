var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function addLyricsTogether(lyrics) {
    var allLyrics = "";
    for (var i = 0; i < lyrics.length; i++) {
        allLyrics += lyrics[i] + " ";
    }
    return allLyrics;
}

console.log(addLyricsTogether);



//function findLowestNumber(arraryOfTen){
//    var lowest = arraryOfTen[0];
//    for (var i = 1; i < arraryOfTen.length; i++){
//        if (arraryOfTen[i] < lowest) {
//            lowest = arraryOfTen[i];
//        }
//    }
//    return lowest;
//}
//
//console.log(findLowestNumber([2, 5, 16, 77, 89, 107, 456, 3, 22, 103]));