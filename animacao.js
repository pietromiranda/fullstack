const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "../img/personagem.png";

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

const tamanho = 50;

// pega movimento do mouse
canvas.addEventListener("mousemove", function(event) {
    const rect = canvas.getBoundingClientRect();

    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
});

// função para impedir sair do canvas
function limitar(valor, min, max) {
    return Math.max(min, Math.min(max, valor));
}

// loop de animação
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = limitar(mouseX, tamanho / 2, canvas.width - tamanho / 2);
    let y = limitar(mouseY, tamanho / 2, canvas.height - tamanho / 2);

    // desenha centralizado
    ctx.drawImage(img, x - tamanho / 2, y - tamanho / 2, tamanho, tamanho);

    requestAnimationFrame(animar);
}

img.onload = function() {
    animar();
};
img.src = "img.png"