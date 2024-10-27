// function disableAOSForSmallScreens() {
//   if (window.innerWidth <= 800) {
//     document.querySelectorAll('[data-aos]').forEach(function(element) {
//       element.removeAttribute('data-aos');
//       element.removeAttribute('data-aos-duration');
//     });
//     AOS.init({ disable: true }); // Desativa AOS para telas pequenas
//   } else {
//     AOS.init(); // Inicializa o AOS normalmente para telas maiores
//   }
// }

// // Chama a função ao carregar a página
// disableAOSForSmallScreens();

// // Chama a função ao redimensionar a janela
// window.addEventListener('resize', disableAOSForSmallScreens);