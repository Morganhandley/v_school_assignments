document.getElementById("finalTotalButton").addEventListener("click", function () {
    var goombaCount = document.getElementById("goombaInput").value
    var goombaTotal = goombaCount * 5;
    document.getElementById("goombaOutput").textContent = goombaTotal;
   
    var bobOmbCount = document.getElementById("bobOmbInput").value
    var bobOmbTotal = bobOmbCount * 7;
    document.getElementById("bobOmbOutput").textContent = bobOmbTotal;


    var cheepaCount = document.getElementById("cheepaInput").value
    var cheepaTotal = cheepaCount * 11;
    document.getElementById("cheepaOutput").textContent = cheepaTotal;

    var totalDue = goombaTotal + bobOmbTotal + cheepaTotal;
    
    document.getElementById("finalOutput").textContent = totalDue;
    })

