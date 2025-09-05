function inicializarGaleria() {
  console.log("Página cargada, inicializando galería...");
  
  let imagenes = document.querySelectorAll(".galeria img");

  // Bucle para asignar tabindex y eventos
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].setAttribute("tabindex", "0");

    // Eventos con ratón
    imagenes[i].addEventListener("mouseover", mostrarImagen);
    imagenes[i].addEventListener("mouseleave", ocultarImagen);

    // Eventos accesibles con teclado
    imagenes[i].addEventListener("focus", mostrarImagen);
    imagenes[i].addEventListener("blur", ocultarImagen);

    // Evento de click o enter
    imagenes[i].addEventListener("click", ampliarImagen);
    imagenes[i].addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        ampliarImagen.call(this, e);
      }
    });
  }

  // Cerrar visor al hacer click fuera de la imagen
  document.getElementById("visor").addEventListener("click", function() {
    this.style.display = "none";
    this.setAttribute("aria-hidden", "true");
  });
}

// Funciones
function mostrarImagen() {
  console.log("Mostrando preview de: " + this.alt);
}

function ocultarImagen() {
  console.log("Ocultando preview");
}

function ampliarImagen() {
  let visor = document.getElementById("visor");
  let imgGrande = document.getElementById("imagenGrande");
  
  imgGrande.src = this.src;
  imgGrande.alt = this.alt;
  visor.style.display = "flex";
  visor.setAttribute("aria-hidden", "false");
}
