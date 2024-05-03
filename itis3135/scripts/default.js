var name = prompt("Whats your name");
document.getElementById("name") = name;
var mood = prompt("How are you feeling?");
document.getElementById("mood") = mood;
function myFunction(){
    var date = new Date();
    document.getElementById("clock").innerHTML =  date;
}

function noCss (){
    document.querySelectorAll('link[rel=stylesheet]').forEach(
        function(e){
            e.setAttribute('href', '');
    }
    );
}