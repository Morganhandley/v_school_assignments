$(document).ready(function () {});

var $newListEntry = $('<tr><td id="output-name">${newEntryName}</td></tr>');

var newEntryName = 42;

function addTable() {

    if (document.getElementById('auto-trash').checked) {
        var trashTalk = [
    'Ha, ha take that!',
     'How you like them apples!?!',
     'Go big or go HOME!!',
     'Get out da Kitchen!',
     '...but we can still be friends'];
        var roll = Math.floor(Math.random() * (5));
        var trash = trashTalk[roll];
        console.log('checked')
    } else {
        trash = "This is my New Score";
    }


var newEntryName = document.getElementById('user-name').value;
var newEntryGame = document.getElementById('user-game').value;
var newEntryDate = document.getElementById('user-date').value;
var newEntryScore = document.getElementById('user-score').value;
console.log(newEntryName);
$("#table1").append(`<tr>
            <td>${newEntryName}</td>
            <td>${newEntryGame}</td>
            <td>${newEntryDate}</td>
            <td>${newEntryScore}</td>
            <td>${trash}</td>
        </tr>`);
document.getElementById('user-name').value = "";
document.getElementById('user-game').value = "";
document.getElementById('user-date').value = "";
document.getElementById('user-score').value = "";
};





//
// function randomGenerator(start, end) {
//     Math.floor((Math.random() * end) + start);
// }
//
// var trashOptions = [
'Ha, ha take that!',
'How you like them apples!?!',
'Go big or go HOME!!',
'Get out da Kitchen!',
'...but we can still be friends'
// ];
//
// function generateTrashTalk() {
//     var trashIndex = randomGenerator(0,4);
//     var randomTrash = trashOptions[trashIndex];
//     console.log(randomTrash);
// };
//
// generateTrashTalk();