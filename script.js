// Lógica del formulario
document.getElementById('check-compatibility').addEventListener('click', () => {
  const person1Name = document.getElementById('person1-name').value.trim();
  const person2Name = document.getElementById('person2-name').value.trim();
  const person1Email = document.getElementById('person1-email').value.trim();
  const person2Email = document.getElementById('person2-email').value.trim();

  // Validar que todos los campos estén completos
  if (!person1Name || !person2Name || !person1Email || !person2Email) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Simular cálculo de compatibilidad
  const compatibilityScore = Math.floor(Math.random() * 101);
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ""; // Limpia resultados previos

  let animationHTML;

  if (compatibilityScore < 40) {
    animationHTML = `
      <div class="broken-heart">
        <svg viewBox="0 0 50 45">
          <path d="M25,42.5L5,25C-3,15,8,2.5,20,7.5C23,9,25,12.5,25,12.5C25,12.5,27,9,30,7.5C42,2.5,53,15,45,25L25,42.5Z"/>
        </svg>
      </div>`;
  } else if (compatibilityScore < 70) {
    animationHTML = `
      <div class="beating-heart">
        <svg viewBox="0 0 50 45">
          <path d="M25,42.5L5,25C-3,15,8,2.5,20,7.5C23,9,25,12.5,25,12.5C25,12.5,27,9,30,7.5C42,2.5,53,15,45,25L25,42.5Z"/>
        </svg>
      </div>`;
  } else {
    animationHTML = `
      <div class="arrow-heart">
        <svg viewBox="0 0 50 45">
          <path d="M25,42.5L5,25C-3,15,8,2.5,20,7.5C23,9,25,12.5,25,12.5C25,12.5,27,9,30,7.5C42,2.5,53,15,45,25L25,42.5Z"/>
        </svg>
        <div class="arrow"></div>
      </div>`;
  }
  

  // Mostrar la animación
  resultsContainer.innerHTML = animationHTML;
  resultsContainer.classList.remove('hidden');

  // Mostrar los resultados después de 2.5 segundos (después de la animación)
  setTimeout(() => {
    resultsContainer.innerHTML = `
      <p>Compatibilidad: ${compatibilityScore}%</p>
      <p>Cosas en común: Música, Películas, Comida, Salidas, Pasa tiempos, Mascotas</p>
      <p>Cosas diferentes: Estilo de vida, Opinión política, Hobbies, Destinos, Cultura Popular</p>
      <p>Tasa de éxito: ${
        compatibilityScore > 70 ? "Alta" : compatibilityScore > 40 ? "Media" : "Baja"
      }</p>
      <button id="reset">Reiniciar</button>
    `;

    // Configurar el botón de reinicio
    document.getElementById('reset').addEventListener('click', resetApp);
  }, 2500); // Tiempo en milisegundos (2.5 segundos)
});

// Función para reiniciar la aplicación
function resetApp() {
  document.getElementById('compatibility-form').reset();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = "";
  resultsContainer.classList.add('hidden');
}

// Lluvia de corazones
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
