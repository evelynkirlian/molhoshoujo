
// Use variáveis para os elementos. Nesse caso, pra modal
var modal1 = document.getElementById('modal1');

// Botão de abrir a modal (variável)
var btn1 = document.getElementById('btn1');

// elemento que fecha a modal (variável)
var fecha1 = document.getElementsByClassName("close")[0];

// O que acontece quando clica no botão? A modal aparece. 
btn.onclick = function() {
    modal.style.display = "block";
}

// o que acontece quando clica em <fecha> (x)? A modal desaparece.
fecha.onclick = function() {
    modal.style.display = "none";
}

// E se clicar fora da modal? some tbm. Nesse caso abaixo se clicar na modal n acontece nada.
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}