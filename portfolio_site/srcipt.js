// ===== BOTÃO WHATSAPP APARECE COM SCROLL =====

// Pega o botão pelo ID
const botao = document.getElementById("btnWhatsapp");

// Quando a página carregar
window.addEventListener("load", () => {
  // Começa escondido
  botao.style.opacity = "0";
  botao.style.transition = "0.5s";
});

// Quando o usuário rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    botao.style.opacity = "1"; // aparece
  } else {
    botao.style.opacity = "0"; // some
  }
});