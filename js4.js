document.getElementById('btnCarta').addEventListener('click', () => {

  const existingCarta = document.getElementById('cartaPopup');
  if (existingCarta) existingCarta.remove();


  conteudo.innerHTML = `
    <h2 style="color:#ff4fa1; margin-bottom:20px;">💖 Nosso Bloco de Amor 💖</h2>
    <div class="listaAmorContainer">
      <div class="listaAmor">
        <div class="item"><span>🌹</span> Teu sorriso ilumina meus dias.</div>
        <div class="item"><span>💫</span> Contigo tudo se torna mágico.</div>
        <div class="item"><span>🌸</span> Cada momento contigo é inesquecível.</div>
        <div class="item"><span>💌</span> Amo o jeito que me fazes feliz todos os dias.</div>
        <div class="item"><span>🌈</span> Fazes meu mundo mais colorido e alegre.</div>
        <div class="item"><span>✨</span> Contigo, meu coração é completo.</div>
        <div class="item"><span>🌺</span> Cada abraço teu é meu lar.</div>
        <div class="item"><span>💖</span> Amo como me olhas com ternura.</div>
        <div class="item"><span>🎀</span> Teus gestos tornam a vida mais doce.</div>
        <div class="item"><span>🌟</span> Contigo aprendi o verdadeiro amor.</div>
        <div class="item"><span>💞</span> Teu carinho é meu refúgio seguro.</div>
        <div class="item"><span>💐</span> Cada dia contigo é um presente.</div>
      </div>
      <button id="btnMostrarCarta">Carta</button>
    </div>
  `;

  // Estilos
  const style = document.createElement('style');
  style.innerHTML = `
    .listaAmorContainer {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
    }
    .listaAmor {
      background: linear-gradient(135deg, #ffe6f2, #ffb6f3);
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      gap: 15px;
      font-size: 20px;
      color: #333;
      flex: 1;
      text-align: left;
      animation: fadeIn 1s ease forwards;
    }
    .listaAmor .item {
      background-color: rgba(255,255,255,0.8);
      padding: 12px 20px;
      border-radius: 10px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .listaAmor .item:hover {
      transform: translateX(10px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    }
    .listaAmor .item span {
      font-size: 24px;
    }
    #btnMostrarCarta {
      background-color: #ff4fa1;
      color: white;
      border: none;
      border-radius: 10px;
      padding: 15px 20px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      height: fit-content;
      align-self: flex-start;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    #btnMostrarCarta:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px);}
      to { opacity: 1; transform: translateY(0);}
    }
    #cartaPopup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #ffb6f3, #ffd1dc);
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      font-size: 28px;
      color: white;
      font-weight: 700;
      text-align: center;
      animation: pulsar 1s infinite alternate;
      z-index: 1000;
    }
    #btnFecharCarta {
      margin-top: 20px;
      padding: 12px 25px;
      font-size: 20px;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      background-color: white;
      color: #ff4fa1;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    #btnFecharCarta:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    }
    @keyframes pulsar {
      0% { transform: translate(-50%, -50%) scale(1); }
      100% { transform: translate(-50%, -50%) scale(1.1); }
    }
  `;
  document.head.appendChild(style);

  
  document.getElementById('btnMostrarCarta').addEventListener('click', () => {
    if (!document.getElementById('cartaPopup')) {
      const carta = document.createElement('div');
      carta.id = 'cartaPopup';
      carta.innerHTML = `
        💖 Feliz aniversário de 1 ano que Deus nos abençoe te amo muito, e que essa data se repita mais vezes és uma grande mulher a mulher perfeita pra mim, te amo muito, és a melhor do mundo Gabriela
        te amo muito, que continuemos assim a lutar um pelo outro te amo.💖
        <br>
        <button id="btnFecharCarta">Fechar</button>
      `;
      document.body.appendChild(carta);

      
      document.getElementById('btnFecharCarta').addEventListener('click', () => {
        carta.remove();
      });
    }
  });
});


['btnMemorias','btnEla','btnCriacao'].forEach(btn => {
  document.getElementById(btn).addEventListener('click', () => {
    const existingCarta = document.getElementById('cartaPopup');
    if (existingCarta) existingCarta.remove();
  });
});





    document.getElementById('btnMemorias').addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>📸 Nossas Memórias 💕</h2>
    <div class="galeria">
      <div class="foto">
        <img src="foto4.jpg" alt="nós dois">
        <p>💕 O meu sorriso favorito 💕</p>
      </div>
      <div class="foto">
        <img src="foto2.jpg" alt="aniversário">
        <p>🎂 O nosso dia feliz 🎂</p>
      </div>
      <div class="foto">
        <img src="foto3.jpg" alt="beijo">
        <p>😘 O teu olhar que me derrete 😘</p>
      </div>
      <div class="foto">
        <img src="foto12.jpg" alt="momentos">
        <p>🌈 Pequenos momentos, grandes lembranças 🌈</p>
      </div>
      <div class="foto">
        <img src="foto5.jpg" alt="abraço">
        <p>🤗 O abraço que é o meu lar 🤗</p>
      </div>
      <div class="foto">
        <img src="foto6.jpg" alt="amor">
        <p>💗 Sempre nós 💗</p>
      </div>
      <div class="foto">
        <img src="foto7.jpg" alt="amor">
        <p>💕 Cada momento contigo é meu favorito 💕</p>
      </div>
      <div class="foto">
        <img src="foto8.jpg" alt="amor">
        <p>💗 Sempre nós, juntos e felizes 💗</p>
      </div>
      <div class="foto">
        <img src="foto9.jpg" alt="amor">
        <p>🌻 Com você, a vida tem mais cor 🌻</p>
      </div>

      <!-- Video com som -->
      <div class="foto" style="position: relative;">
        <video id="videoComSom" autoplay loop playsinline style="width: 100%; border-radius: 10px 10px 0 0; height: 230px; object-fit: cover;">
          <source src="video.mp4" type="video/mp4">
          O teu navegador não suporta vídeos.
        </video>
        <button id="somBtn" style="
          position: absolute;
          bottom: 12px;
          right: 12px;
          background-color: rgba(255,79,161,0.9);
          color: white;
          border: none;
          border-radius: 50%;
          width: 35px;
          height: 30px;
          cursor: pointer;
          font-size: 20px;
        ">🔇</button>
        <p>💗 Emoção por lhe apresentar na minha irmã 💗</p>
      </div>

      <!-- Video sem som -->
      <div class="foto">
        <video autoplay loop muted playsinline style="width: 100%; border-radius: 10px 10px 0 0; height: 230px; object-fit: cover;">
          <source src="IMG_4041.mp4" type="video/mp4">
          O teu navegador não suporta vídeos.
        </video>
        <p>💖 O mundo é mais bonito contigo 💖</p>
      </div>

      <div class="foto">
        <img src="foto13.jpg" alt="amor">
        <p>🌺 Florescem sonhos quando estamos juntos 🌺</p>
      </div>
    </div>
  `;

  const video = document.getElementById('videoComSom');
  const somBtn = document.getElementById('somBtn');
  video.muted = false; 
  somBtn.textContent = '🔊'; 

  somBtn.addEventListener('click', () => {
    if(video.muted){
      video.muted = false;
      somBtn.textContent = '🔊';
    } else {
      video.muted = true;
      somBtn.textContent = '🔇';
    }
  });
});

document.getElementById('btnEla').addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>📸 Ela 💕</h2>
    <div class="galeria">
      <div class="foto">
        <img src="1.jpg" alt="nós dois">
        <p>💖 Teu sorriso ilumina meu mundo 💖</p>
      </div>
      <div class="foto">
        <img src="2.jpg" alt="aniversário">
        <p>🎀 Cada dia contigo é um presente 🎀</p>
      </div>
      <div class="foto">
        <img src="3.jpg" alt="beijo">
        <p>😘 Teu olhar é meu porto seguro 😘</p>
      </div>
      <div class="foto">
        <img src="4.jpg" alt="momentos">
        <p>🌸 Momentos contigo valem uma vida inteira 🌸</p>
      </div>
      <div class="foto">
        <img src="5.jpg" alt="abraço">
        <p>🤍 Teus abraços são meu lar 🤍</p>
      </div>
      <div class="foto">
        <img src="6.jpg" alt="amor">
        <p>💎 Meu tesouro mais precioso 💎</p>
      </div>
      <div class="foto">
        <img src="7.jpg" alt="amor">
        <p>🌟 Contigo tudo brilha mais 🌟</p>
      </div>
      <div class="foto">
        <img src="8.jpg" alt="amor">
        <p>💌 Te amar é minha maior alegria 💌</p>
      </div>
      <div class="foto">
        <img src="9.jpg" alt="amor">
        <p>🌷 Cada instante contigo é um sonho 🌷</p>
      </div>
      <div class="foto">
        <img src="10.jpg" alt="amor">
        <p>💫 Minha felicidade tem teu nome 💫</p>
      </div>
      <div class="foto">
        <img src="11.jpg" alt="amor">
        <p>❤️ Com você, o mundo é perfeito ❤️</p>
      </div>
      <div class="foto">
        <img src="12.jpg" alt="amor">
        <p>🌹 Teu amor é meu lugar favorito 🌹</p>
      </div>
    </div>

    <!-- Música romântica -->
    <audio id="audioEla" src="musica2.mp3" autoplay loop></audio>
  `;


  setTimeout(() => {
  const audio = document.getElementById('audioEla');
  if (audio) {
    audio.currentTime = 40;
    audio.play().catch(err => {
      console.warn("Autoplay bloqueado pelo navegador:", err);
    });

    audio.addEventListener('timeupdate', () => {
      if (audio.currentTime >= 59) {
        audio.currentTime = 40;
        audio.play();
      }
    });
  }
}, 0);
});


  document.getElementById('btnCriacao').addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2 style="color:#ff4fa1; font-size:28px; margin-bottom:20px; text-shadow: 1px 1px 2px #fff;">💻 Criação do Nosso Amor 💖</h2>
    <p style="font-size:18px; margin-bottom:25px; color:#333; line-height:1.5;">
      Aqui ficará o vídeo mostrando todo o cuidado e carinho que coloquei neste site para ti.<br>
      Um pequeno registro de como nosso amor inspira cada detalhe 💗
    </p>
    <div id="videoCriacaoContainer" style="
      display:flex; 
      flex-direction:column; 
      align-items:center; 
      justify-content:center; 
      background: linear-gradient(135deg, #ffe3f0, #ffd1dc);
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      max-width: 900px;
      margin: auto;
      transition: transform 0.3s ease;
    ">
      <video id="videoCriacao" controls autoplay style="
        width: 100%;
        height:500px ;
        border-radius: 15px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        background-color: black;
      ">
        <source src="video2.mp4" type="video/mp4">
        O teu navegador não suporta vídeos.
      </video>
      <p style="
        margin-top:15px; 
        color:#ff4fa1; 
        font-weight:500; 
        font-size:17px;
        text-align:center;
      ">
        Cada detalhe aqui foi pensado e feito por mim, para ti.
      </p>
    </div>
  `;

  const video = document.getElementById('videoCriacao');
  video.addEventListener('timeupdate', () => {
    if (video.currentTime >= 22) {
      video.pause();
    }
  });
});
