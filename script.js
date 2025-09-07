function inicializarGaleria() {
  console.log("Página cargada, inicializando galería...");
  
  let imagenes = document.querySelectorAll(".galeria img");
  let imagenGrande = document.getElementById("imagenGrande");
  let textoGrande = document.getElementById("textoGrande");

  // Texto y fondo original (rígidos para restaurar)
  const textoOriginal = "Selecciona una imagen";
  const fondoOriginal = "";

  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].setAttribute("tabindex", "0");

    // Eventos de ratón
    imagenes[i].addEventListener("mouseover", function() {
      imagenGrande.src = this.src;
      textoGrande.textContent = this.alt;
    });
    imagenes[i].addEventListener("mouseleave", function() {
      imagenGrande.src = fondoOriginal;
      textoGrande.textContent = textoOriginal;
    });

    // Eventos de accesibilidad con teclado
    imagenes[i].addEventListener("focus", function() {
      imagenGrande.src = this.src;
      textoGrande.textContent = this.alt;
    });
    imagenes[i].addEventListener("blur", function() {
      imagenGrande.src = fondoOriginal;
      textoGrande.textContent = textoOriginal;
    });
  }
}
