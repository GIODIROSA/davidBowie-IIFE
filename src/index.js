//import cosas por hacer
import cosasHacer from "./app";

//btn- evento que llama a la funcion pública de cine
cine.addEventListener("click", () => {
  // alert("si funciono cine");
  cosasHacer.metodoCine();
});

// btn- evento que llama a la funcion pública y a su vez a la privada
musica.addEventListener("click", () => {
  // alert("si funciono musica");
  cosasHacer.metodoMusica();
});

//btn- evento que llama a la función pública
comida.addEventListener("click", () => {
  // alert("si funciono comida");
  cosasHacer.metodoComida();
});
