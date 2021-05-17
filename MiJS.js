loadLDocA("libro.xml", "xml")

 function gestionarFicheroXML(fichero) {

alert(fichero)

let capaVacia = document.querySelector("#ficheroXML")
let libros = xmlDoc.querySelectorAll("libro")

for(let i=0; i<libros.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"




}