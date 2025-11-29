const audio = new Audio();
const botaoPlay = document.getElementById('botaoPlay');
const proxMusica = document.getElementById('proxMusica');
const voltarMusica = document.getElementById('voltarMusica');
const botaoPause = document.getElementById('botaoPause');
let anterior = false;

botaoPlay.addEventListener('click', tocar);
botaoPause.addEventListener('click', tocar);
proxMusica.addEventListener('click', trocaBotao);
voltarMusica.addEventListener('click', trocaBotao);

function trocaBotao() {
  if (audio.paused == true && audio.src != ''){
    botaoPlay.classList.toggle('desativa');
    botaoPause.classList.toggle('desativa');
  }
}

async function tocar() {
  botaoPlay.classList.toggle('desativa');
  botaoPause.classList.toggle('desativa');
  if (!audio.paused) {
    audio.pause();
  } else if (audio.src != '') {
    audio.play();
  }  else {
  let playListMusicas = 1;
  while(playListMusicas <= 15) {
    anterior = false;
    if (playListMusicas < 1 || playListMusicas > 15) {
      playListMusicas = 1;
    };
    audio.src = `./musicas/${playListMusicas}.mp3`;
    await tocarAudio(audio);
    voltarMusica.addEventListener('click', rodar => {
      anterior = true;
    });
    proxMusica.addEventListener('click', teste => {
      if (playListMusicas == 15) {
        playListMusicas = 1;
      }
    })
    if (anterior == true){
      playListMusicas--;
    } else {
      playListMusicas++;
    }
  }}
  playListMusicas = 0;

}

function tocarAudio (musica, status){
  return new Promise(promessa => {
    musica.play();
    musica.onended = promessa;
    proxMusica.addEventListener('click', promessa);
    voltarMusica.addEventListener('click', promessa);
  })
}



gsap.from(".menu", {
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.1
});

gsap.from(".container", {
  scrollTrigger: ".container",
  opacity: 0,
  y: 50,
  duration: 1,
  delay:0.9
});



gsap.from(".texto", {
  scrollTrigger: ".texto",
  opacity: 0,
  y: 20,
  stagger: 0.2,
  duration: 0.8,
  delay:2
});

gsap.from(".container .container-images-banner3", {
  duration: 0.9,
  scale: 0.9,
  y: 20,
  opacity: 0,
  stagger: 0.12,
  ease: "back.out(1.2)",
  delay:5
});

// Animação exercicio de respiração e citações personalizadas para cada sentimento

    const citacoesPorSentimento = {
        feliz: [
            { texto: "A alegria está na jornada, não apenas no destino final.", autor: "Anônimo" },
            { texto: "Felicidade é a única coisa que se multiplica quando dividida.", autor: "Albert Schweitzer" },
            { texto: "Escolher ser otimista e ter gratidão faz toda a diferença.", autor: "Anônimo" }
        ],
        chateado: [
            { texto: "Permita-se sentir. As emoções difíceis são parte do processo de crescimento.", autor: "Anônimo" },
            { texto: "A dor é inevitável, mas o sofrimento é opcional. Respire fundo.", autor: "Buddha" },
            { texto: "Dias ruins existem para que os dias bons valham a pena.", autor: "Anônimo" }
        ],
        surpreso: [
            { texto: "A vida está cheia de surpresas maravilhosas, basta estar aberto a elas.", autor: "Anônimo" },
            { texto: "O inesperado é onde a magia acontece.", autor: "Anônimo" },
            { texto: "Mantenha a mente aberta, as melhores surpresas estão a caminho.", autor: "Anônimo" }
        ],
        ansioso: [
            { texto: "A ansiedade é o juros que se paga por um problema que ainda não ocorreu.", autor: "William Ralph Inge" },
            { texto: "Viva um dia de cada vez, um momento de cada vez.", autor: "Anônimo" },
            { texto: "Respire. Tudo ficará bem no final. Se não estiver bem, ainda não é o final.", autor: "Anônimo" }
        ],
        contente: [
            { texto: "A gratidão transforma o que temos em suficiente.", autor: "Melody Beattie" },
            { texto: "Contentamento não é a satisfação das necessidades, mas a limitação das necessidades.", autor: "Anônimo" },
            { texto: "A verdadeira riqueza é a paz de espírito e o contentamento.", autor: "Anônimo" }
        ],
        entediado: [
            { texto: "O tédio é o início da criatividade. Use este tempo para imaginar algo novo.", autor: "Anônimo" },
            { texto: "Não há tempo desperdiçado, apenas tempo usado para descanso ou reflexão.", autor: "Anônimo" },
            { texto: "Mude sua rotina. Uma pequena mudança pode trazer uma nova energia.", autor: "Anônimo" }
        ]
    };

    const estadoSentimentos = {
        feliz: 0, chateado: 0, surpreso: 0, ansioso: 0, contente: 0, entediado: 0
    };

    function atualizarCitacao(sentimento) {
      
        const indexAtual = estadoSentimentos[sentimento];
        const novaCitacao = citacoesPorSentimento[sentimento][indexAtual];
        

        const textoCitacaoEl = document.getElementById('textoCitacao');
        const textoAutorEl = document.getElementById('textoAutorCitacao');

        if (textoCitacaoEl && textoAutorEl) {
            textoCitacaoEl.textContent = `"${novaCitacao.texto}"`;
            textoAutorEl.textContent = novaCitacao.autor;
        }
        estadoSentimentos[sentimento] = (indexAtual + 1) % 3;
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        const barraTempo = document.getElementById('barraTempo');
        const botao = document.getElementById('botao');
        const textoInspirar = document.getElementById('inspirar');
        const textoExpirar = document.getElementById('expirar');
      
        
        if (textoExpirar) textoExpirar.style.opacity = 0;

        let tl = null; 
        let isRunning = false; 

        function criarAnimacaoRespiracao() {
            if (typeof gsap === 'undefined' || !barraTempo) return;
            
            gsap.set(barraTempo, { width: '0%', backgroundColor: '#8087F2' });

            tl = gsap.timeline({
                repeat: -1, 
                paused: true, 
                onRepeat: () => {
                    gsap.set(barraTempo, { width: '0%' });
                    gsap.to(textoInspirar, { opacity: 1, duration: 0.5 });
                    gsap.to(textoExpirar, { opacity: 0, duration: 0.5 });
                }
            });
           
            tl.to(barraTempo, {
                duration: 4,
                width: '100%',
                ease: "power1.in",
                onComplete: () => {
                    gsap.to(textoInspirar, { opacity: 0, duration: 0.5 });
                    gsap.to(textoExpirar, { opacity: 1, duration: 0.5 });
                }
            });

            tl.to(barraTempo, {
                duration: 6,
                width: '0%',
                ease: "power1.out"
            });
        }

        function gerenciarRespiracao() {
            if (!isRunning) {
                if (!tl) {
                    criarAnimacaoRespiracao();
                }
                if (tl) {
                    tl.resume();
                    isRunning = true;
                    botao.textContent = "Parar Respiração";
                }
            } else {
                if (tl) {
                    tl.pause();
                    isRunning = false;
                    botao.textContent = "Iniciar Respiração";
                    gsap.to(barraTempo, { width: '0%', duration: 0.5 });
                    gsap.to(textoInspirar, { opacity: 1, duration: 0.5 });
                    gsap.to(textoExpirar, { opacity: 0, duration: 0.5 });
                }
            }
        }

        
        if (botao) {
            botao.addEventListener('click', gerenciarRespiracao);
            criarAnimacaoRespiracao(); 
        }

        const imagensSentimentos = document.querySelectorAll('.containerSentimentos img');

        imagensSentimentos.forEach(img => {
            img.addEventListener('click', () => {
                const id = img.id;
                const sentimento = id.split('-')[1]; 
                
                if (sentimento && citacoesPorSentimento[sentimento]) {
                    atualizarCitacao(sentimento);
                }
            });
        });

        atualizarCitacao('feliz'); 
    });

