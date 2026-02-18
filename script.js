let textoOriginal = "";

// Cargar syllabus
fetch("syllabus.txt")
.then(res => res.text())
.then(data => {

textoOriginal = data;
document.getElementById("contenido").innerText = textoOriginal;

});

// Buscador
document.getElementById("search")
.addEventListener("input", function(){

let palabra = this.value.trim();

// Si no hay nada escrito
if(palabra === ""){
document.getElementById("contenido").innerText = textoOriginal;
document.getElementById("resultados").textContent = "";
return;
}

let regex = new RegExp(`(${palabra})`, "gi");

let coincidencias = (textoOriginal.match(regex) || []).length;

document.getElementById("resultados")
.textContent = coincidencias + " resultados encontrados";

let resaltado = textoOriginal.replace(regex,
`<span class="highlight">$1</span>`);

document.getElementById("contenido").innerHTML = resaltado;

});



