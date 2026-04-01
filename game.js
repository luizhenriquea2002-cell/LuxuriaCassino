const canvas = document.getElementById("roleta");
const ctx = canvas.getContext("2d");

const cores = ["red","black","green","black","red","black"];
let angulo = 0;

function desenharRoleta() {
  const fatia = (2 * Math.PI) / cores.length;

  for (let i = 0; i < cores.length; i++) {
    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.arc(150,150,150, angulo + i*fatia, angulo + (i+1)*fatia);
    ctx.fillStyle = cores[i];
    ctx.fill();
  }
}

function girarRoleta() {
  let velocidade = Math.random() * 0.3 + 0.3;

  const spin = setInterval(() => {
    angulo += velocidade;
    velocidade *= 0.97;

    ctx.clearRect(0,0,300,300);
    desenharRoleta();

    if (velocidade < 0.002) {
      clearInterval(spin);
      resultadoRoleta();
    }
  }, 16);
}

function resultadoRoleta() {
  const index = Math.floor(Math.random() * cores.length);
  alert("Resultado: " + cores[index]);
}
