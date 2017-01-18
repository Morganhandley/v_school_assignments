var addSubmit = document.getElementById("submit-add");

addSubmit.addEventListener("click", function(){
    var value1 = document.getElementById("add-input1").value;
    var value1 = document.getElementById("add-input2").value;
    var total = value1 + value2;
    
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    
    var output = document.getElementById("add-output")
    console.log(output);
    
    output.textContent = total;
})

//document.getElementById("submit-add").addEventListener<"click", function(){
//    
//})






////var header = document.getElementById("welcome");
//
//header.textContent = "Hi Bob";
//
//header.style.backgroundColor = "red";
//
//header.addEventListener("click", alertUser);
//
//var paras = document.getElementsByClassName("comments");
//console.log(paras);
//for (var i=0; i < paras.length; i++){
//    paras[i].style.color = "green";
//}
//
//<p class="comments">
//var firstName = document.getElementById("firstName").value;
//console.log(firstName)