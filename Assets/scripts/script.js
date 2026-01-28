const botaoMenu = document.getElementById("menu-hamburguer");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
