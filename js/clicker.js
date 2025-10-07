let contRigby = 0;
var contenidorRigby = document.getElementById("rigby").addEventListener('click', function(){
    contRigby ++
    document.getElementById("contRigby").innerHTML = "tens " + contRigby + " rigbys";
})

let contGumbus = 0;
var contenidorGumbus = document.getElementById("gumbus").addEventListener('click', function(){
    contGumbus ++
    document.getElementById("contGumbus").innerHTML = "tens " + contGumbus + " gumbuses";
})