const botaoMenu = document.querySelector("#botaoMenu");

const linksMenu = document.querySelector("#linksMenu");


botaoMenu.addEventListener("click", function () {

    linksMenu.classList.toggle("ativo");

});