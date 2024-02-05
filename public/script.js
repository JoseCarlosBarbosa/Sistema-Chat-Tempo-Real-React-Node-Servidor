const botaoEnviar = document.getElementById('enviar');
const texto = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (texto.value !== "") {
        socket.emit('nova mensagem', texto.value);
        texto.value = "";
    }
});

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li'); // cria uma tag <li></li>
    elementoMensagem.classList.add('mensagem') // adiciona uma classe do css
    elementoMensagem.textContent = msg;  // <li> mensagens </li>
    chat.appendChild(elementoMensagem); //coloca os elementos como filho, dentro do <div class='mensagem'><li> mensagens </li></div>
});