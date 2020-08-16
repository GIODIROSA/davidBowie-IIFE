const cosasHacer = (() => {
  //función IIFE

  // function private
  let miVideoPrivado = () => {
    // alert("estoy aqui en privado");
    const data = document.getElementById("data");
    data.innerHTML = `
            <h1 class="title_video">DAVID BOWIE<h1>
            <h4 class="title_video2">LIFE ON MARS<h4>
            <iframe id="videoBowie" src="https://www.youtube.com/embed/UipTt-qqZOE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            `;
  };
  //return objeto- function publicas
  return {
    //funciones publicas
    metodoCine: () => {
      // alert("si funciono cine desde app");
      const data = document.getElementById("data");
      data.innerHTML = `
            <img src="./img/post1.jpg" alt="bowie-movie" class="post">
            `;
    },
    metodoMusica: () => {
      // alert("si funcino musica desde app");
      miVideoPrivado();
    },
    metodoComida: () => {
      // alert("si funciono comida desde app");
      const data = document.getElementById("data");
      data.innerHTML = `
            <h4 class="title_video2">SHEPHERD´S PIE<h4>
            <img src="./img/bowiefood.jpg" alt="comida" class="post">
            
            `;
    },
  };
})();

export default cosasHacer;
