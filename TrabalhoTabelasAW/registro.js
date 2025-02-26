
function adicionarRegistro() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let tabela = document.getElementById('tabelaUsuarios');
    let novaLinha = tabela.insertRow();
    let celulaNome = novaLinha.insertCell(0);
    let celulaEmail = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    document.getElementById('cadastroForm').reset();
}
