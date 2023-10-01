function init() {

    let contenedoR = document.getElementById("resultado");
  
      /// pedimos el promt ///
    
    let parrafo1 = prompt("Parrafo1");
  
    let p1 = document.createElement("p");
    let p1texto = document.createTextNode("Parrafo1");
  
    p1.appendChild(p1texto);
  
    contenedoR.appendChild(p1);
  
  }
window.onload = init;

/*function init(){

    let contenedor = document.getElementById("resultado");

    let h1A = document.createElement("h1");
    let texto =document.createTextNode(prompt("agrega el texto"));
    h1A.appendChild(texto);

    contenedor.appendChild(h1A);

    
  }

window.onload = init;*/