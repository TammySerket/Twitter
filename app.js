const boton = document.getElementById("btn");

boton.addEventListener("click", () => {
let comments = document.getElementById("texto1").value
document.getElementById("texto1").value = "";
const cont = document.getElementById("cont");
const newComments = document.createElement("div");
const contenedorElemento = document.createElement("p");
let textNewComment = document.createTextNode(comments);//se le asigna a comments el valor que es de texto
contenedorElemento.appendChild(textNewComment);
newComments.appendChild(contenedorElemento);
cont.appendChild(newComments);
})
