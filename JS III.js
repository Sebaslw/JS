function init() {

    let contenedor = document.getElementById("resultado");

    // parrafos

    let h1 = document.createElement("h1");
    let h1Texto = document.createTextNode("Title 1");
    h1.appendChild(h1Texto);
    
    
    let p1 = document.createElement("p");
    let p1Texto = document.createTextNode("Parrafo 1");
    p1.appendChild(p1Texto);

    let p2 = document.createElement("p");
    let p2Texto = document.createTextNode("Parrafo 2");
    p2.appendChild(p2Texto);

    let p3 = document.createElement("p");
    let p3Texto = document.createTextNode("Parrafo 3");
    p3.appendChild(p3Texto);

    contenedor.appendChild(h1);
    contenedor.appendChild(p1);
    contenedor.appendChild(p2);
    contenedor.appendChild(p3);
  /* window.onload = init; significa que apenas abra se habra la ventana se ejecute el init*/
  window.onload = init;
}

