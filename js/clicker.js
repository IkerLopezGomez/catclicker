let data = {
    gatosActivos: 0,
    gatos: [
        {name: "rigby", image: "media/rigby.jpeg", nclicks: 0},
        {name: "gumbus", image: "media/gumbus.jpeg", nclicks: 0},
        {name: "purrito", image: "media/purrito.jpeg", nclicks: 0},
        {name: "gatitofeo", image: "media/gatitofeo.jpeg", nclicks: 0},
    ]
};
//LEEMOS EL JSON Y CREAMOS LA LISTA DE GATITOS
let htmlString = "";
for (let i = 0; i < data.gatos.length; i++){
    htmlString += `<l1 id = "${i}">${data.gatos[i].name}</l1><br>`;
}

document.getElementById("catlist").innerHTML = htmlString;

//HACEMOS QUE CADA GATITO REACCIONE A LOS CLICKS
document.getElementById("catlist").addEventListener('click', function(e){
    console.log("Has acariciado a " + e.target.id);
    data.gatosActivos = e.target.id;
    pintarGatoActivo();
});

//PINTAMOS AL GATITO ACARICIADO
function pintarGatoActivo(){
    document.getElementById("gatito").src = data.gatos[data.gatosActivos].image;
    document.getElementById("nombre").innerHTML = data.gatos[data.gatosActivos].name;
    document.getElementById("caricias").innerHTML = data.gatos[data.gatosActivos].nclicks;
}

//HACEMOS QUE EL GATITO REACCIONA A LAS CARICIAS
document.getElementById("gatito").addEventListener('click', function(e){
    data.gatos[data.gatosActivos].nclicks++;
    pintarGatoActivo();
});
