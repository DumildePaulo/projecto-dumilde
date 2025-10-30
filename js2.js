const senhaInput = document.getElementById('senha');
const botoes = document.querySelectorAll('.button');
const apagar = document.getElementById('apagar');
const confirmar = document.getElementById('confirmar');
const senhaCorreta = "01112024";


botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.textContent.trim();
    if (!isNaN(valor)) {
      senhaInput.value += valor;
    }
  });
});


apagar.addEventListener('click', () => {
  senhaInput.value = senhaInput.value.slice(0, -1);
});


confirmar.addEventListener('click', () => {
  const valor = senhaInput.value.trim();

  if (valor === "") {
    alert("Digite a palavra mágica, princesa 💌");
    return;
  }

  if (valor === senhaCorreta) {
    transicaoFlor(() => {
      window.location.href = "pagina2.html"; 
    });
  } else {
    alert("Palavra-passe errada só eu e a minha princesa soubemos.💌");
  }
});

function transicaoFlor(callback) {
  const flor = document.createElement("div");
  flor.classList.add("flor");
  flor.textContent = "🌸";
  document.body.appendChild(flor);

  setTimeout(() => {
    if (callback) callback();
  }, 2600); 
}

// Corações flutuando
function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const emojis = ["💖", "💘", "💞", "💕", "💓", "💗", "❤️‍🔥", "💝","😍","🥰","❤️","💞","💓","💖","💘","💕"];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heart.style.opacity = Math.random() * 0.6 + 0.4;
  heart.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

setInterval(criarCoracao, 400);

