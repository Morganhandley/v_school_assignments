var count = 0;

$('#buttonAdd').click (additems);

function addItems() {
    var input = $('#input1').val();
    console.log(input);
    var newItem = `<li id=\'list${count}\'>${input} <button class="btn btn-danger glyphicon glyphicon-trash" id="buttonDelete" onclick="deleteItem(${count})"></button></li>`;
    $('#list-of-stuff').append(newItem)
    $('#list-of-stuff').css("list-style", "none");
    count ++;
}

function deleteItem(count) {
    console.log(count);
    document.getElementById(`list${count}`).remove();
}