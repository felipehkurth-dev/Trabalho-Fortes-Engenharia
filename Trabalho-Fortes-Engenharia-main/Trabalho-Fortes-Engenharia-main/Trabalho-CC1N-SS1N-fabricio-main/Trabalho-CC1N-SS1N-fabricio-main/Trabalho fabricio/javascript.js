function login(){

    var login = new nome()

    let result = document.getElementById ("Login bem sucedido")
 
    let usuario = document.getElementById ("usuario"). valor;
    let senha = document.getElementById ("senha"). valor;

    if (usuario <= 12) {
        alert ("insira um usuario válido de 12 digitos.")
    }

    if (senha <= 12) {
        alert ("insira uma senha válida de 12 digitos.")
    }

}

