function generate(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?"
    const qtd = parseInt(document.getElementById("qtdcaracteres").value)

    if (qtd < 8) {
        alert("O comprimento da senha deve ser no mínimo 8 caracteres.");
        return;
    }

    let senha = ""

    for (let i = 0; i < qtd; i++) {
        const pass = Math.floor(Math.random() * 77);
        senha += caracteres[pass];
    }

    document.getElementById("password").value = senha
}

function copy(){
    const valor = document.getElementById("password").value

    if(valor){
        navigator.clipboard.writeText(valor)
        alert("Senha copiada para a área de transferência!")
    }else{
        alert("Erro ao copiar a senha.")
    }
}