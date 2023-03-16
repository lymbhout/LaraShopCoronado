export const documentoDeCambioLoad = document.addEventListener('DOMContentLoaded', () => {

    // Lista de urls que deseas precargar
    const LIST_IMAGES_PRELOAD = Array.from(document.querySelectorAll(".wait-loading"));
    // Elemento visual del loading
    const LOADING = document.querySelector('.loading');
    // Tiempo de espera entre revisiones en ms
    const SLEEP_CHECK = 50;
  
    // Herramienta para esperar un tiempo determinado en una función asíncrona
  
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    // Comprueba de forma recursiva si todas las imágenes se han completado
    // Si todas estan descargadas, quitará la clase 'loading--show' a 'loading' para ocultarlo
  
    async function checkIfAllImagesCompleted() {
  
      // Obtiene todas las imágenes sin completar
      const NO_COMPLETES = LIST_IMAGES_PRELOAD.filter((video) => {
          return !video.complete;
      });
  
      if (NO_COMPLETES.length !== 0) {
        // Vuelve a iterar si existe alguna sin completar
        await sleep(SLEEP_CHECK);
        return checkIfAllImagesCompleted();
      } else {
        // Oculta el loading
        LOADING.classList.remove('loading--show');
      } 
      return true;
    }
  
  
    // Inicia
    
    checkIfAllImagesCompleted();
  
  });