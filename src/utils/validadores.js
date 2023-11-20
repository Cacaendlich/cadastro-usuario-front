function validarNome(nome){
    if (!nome || nome.trim() === "") {
        return false;
    }
    const regexSenha = /^.{3,}$/;
    return regexSenha.test(nome);
}

function validarEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValido = regexEmail.test(email);

    return email && email.trim() !== "" && emailValido;
}

function validarSenha(senha){
    const regexSenha = /^.{4,}$/;
    const senhaValida = regexSenha.test(senha);

    return senha?.toString() && senha.toString().trim() !== "" && senhaValida ;
}

function validarConfirmarSenha(senha, confirmarSenha){
    return validarSenha(senha) && senha === confirmarSenha;
}

export{
    validarNome,
    validarEmail,
    validarSenha,
    validarConfirmarSenha
}