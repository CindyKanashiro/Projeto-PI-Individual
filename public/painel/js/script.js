// arquivo para ser chamado onde quiser/ funções globais
window.addEventListener("load", function(event) { // adicionar um evento(clicar,carregar,etc)
    if(typeof sessionStorage.NOME_USUARIO == "undefined") {
        alert("Usuário não logado")
        setTimeout(function () {
            window.location = "login.html";
        }, 1000);
    }
    nome_usu.innerHTML = `Olá ${sessionStorage.NOME_USUARIO}`;
})

function sair() {
    sessionStorage.EMAIL_USUARIO = undefined;
    sessionStorage.NOME_USUARIO = undefined;
    sessionStorage.ID_USUARIO = undefined;
    sessionStorage.VIEW_USUARIO = undefined;

    window.location = "login.html"
}