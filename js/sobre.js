// Slider da pagina Sobre nos, sem bibliotecas.
const propositoSlider = document.querySelector('.proposito-slider');

if (propositoSlider) {
  const faixa = propositoSlider.querySelector('.proposito-track');
  const slides = propositoSlider.querySelectorAll('.proposito-card');
  const indicadores = propositoSlider.querySelectorAll('[data-slide]');
  const pausa = propositoSlider.querySelector('.proposito-pausa');
  const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');
  let atual = 0;
  let pausado = movimentoReduzido.matches;
  let temporizador;

  function mostrarSlide(numero) {
    atual = (numero + slides.length) % slides.length;
    faixa.style.transform = 'translateX(-' + atual * 100 + '%)';
    slides.forEach(function (slide, indice) {
      slide.setAttribute('aria-hidden', String(indice !== atual));
      slide.inert = indice !== atual;
    });
    indicadores.forEach(function (botao, indice) {
      if (indice === atual) botao.setAttribute('aria-current', 'true');
      else botao.removeAttribute('aria-current');
    });
  }

  function iniciarContagem() {
    clearInterval(temporizador);
    if (!pausado && !document.hidden) {
      temporizador = setInterval(function () {
        mostrarSlide(atual + 1);
      }, 6000);
    }
  }

  function trocarSlide(numero) {
    mostrarSlide(numero);
    iniciarContagem();
  }

  propositoSlider.querySelector('.proposito-anterior').addEventListener('click', function () {
    trocarSlide(atual - 1);
  });
  propositoSlider.querySelector('.proposito-proximo').addEventListener('click', function () {
    trocarSlide(atual + 1);
  });
  indicadores.forEach(function (botao, indice) {
    botao.addEventListener('click', function () { trocarSlide(indice); });
  });
  pausa.addEventListener('click', function () {
    pausado = !pausado;
    pausa.textContent = pausado ? 'Reproduzir' : 'Pausar';
    iniciarContagem();
  });
  document.addEventListener('visibilitychange', iniciarContagem);
  movimentoReduzido.addEventListener('change', function () {
    pausado = movimentoReduzido.matches;
    pausa.textContent = pausado ? 'Reproduzir' : 'Pausar';
    iniciarContagem();
  });

  propositoSlider.classList.add('is-ready');
  propositoSlider.querySelector('.proposito-controles').hidden = false;
  pausa.textContent = pausado ? 'Reproduzir' : 'Pausar';
  mostrarSlide(0);
  iniciarContagem();
}
