//Seleção dos elementos
const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const bgImageEl = document.getElementById("bg-image");

// Recupera o modo salvo
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

// Atualiza o tema da página
function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
        bodyEl.style.color = "white";
    } else {
        bodyEl.style.backgroundColor = "white";
        bodyEl.style.color = "black";
    }
}

// Detecta mudança no botão
inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

// Salva a preferência do usuário
function updateLocalStorage() {
    localStorage.setItem(
        "mode",
        JSON.stringify(inputEl.checked)
    );
}

// Detecta rolagem da página
window.addEventListener("scroll", () => {
    updateImage();
});

// Atualiza efeito da imagem
function updateImage() {
    bgImageEl.style.opacity =
        1 - window.pageYOffset / 900;

    bgImageEl.style.backgroundSize =
        160 - window.pageYOffset / 12 + "%";
}


// Seleciona os elementos do HTML
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

// Abre a barra lateral ao clicar nos 3 pontos
openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// Fecha a barra lateral ao clicar no 'X'
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
