function validarLogim() {
    let nome = document.getElementById("nome");
    let senha = document.getElementById("senha");
    let erro = document.getElementById("Erro");
    
    nome.style.border = '';
    senha.style.border = '';
    erro.innerText = '';

    let valid = true;

    if (nome.value === '') {
        erro.innerText = 'Campo usuário não foi preenchido.';
        nome.style.border = '2px solid red';
        valid = false;
        nome.focus();
    } else if (nome.value !== 'admin') {
        erro.innerText = 'Nome errado';
        nome.style.border = '2px solid red';
        valid = false;
        nome.focus();
        nome.value = "";
    } else if (senha.value === '') {
        erro.innerText = 'Campo senha não preenchido';
        senha.style.border = '2px solid red';
        valid = false;
        senha.focus();
    } else if (senha.value !== 'admin') {
        erro.innerText = 'Senha errada';
        senha.style.border = '2px solid red';
        valid = false;
        senha.focus();
    }

    if (valid) {
        window.location.href = 'IndexAgenda.html';
    }
}


let contatos = [];
let currentIndex = -1;
let incluirClicado = false;
let editando = false;

function incluir() {
    if (!incluirClicado) {
        incluirClicado = true;
        editando = false;

        let Nome = document.getElementById("Nome");
        let Sobrenome = document.getElementById("Sobrenome");
        let Email = document.getElementById("Email");
        let Telefone = document.getElementById("Telefone");

        Nome.disabled = false;
        Sobrenome.disabled = false;
        Email.disabled = false;
        Telefone.disabled = false;
        Nome.focus();

        Nome.style.border = "2px solid #000";
        Sobrenome.style.border = "2px solid #000";
        Email.style.border = "2px solid #000";
        Telefone.style.border = "2px solid #000";

        let Incluir = document.getElementById("incluir");
        let Editar = document.getElementById("editar");
        let Salvar = document.getElementById("salvar");
        let Cancelar = document.getElementById("cancelar");
        let Excluir = document.getElementById("excluir");

        Incluir.disabled = true;
        Salvar.disabled = false;
        Cancelar.disabled = false;
        Excluir.disabled = true;
        Incluir.style.backgroundColor = "#fff";
        Incluir.style.borderColor = "#000";
        Salvar.style.backgroundColor = "#04C9F4";
        Cancelar.style.color = "#04C9F4";
        Cancelar.style.borderColor = "#04C9F4";
        Editar.style.backgroundColor = "#fff";
        Editar.style.borderColor = "#000";
        Excluir.style.backgroundColor = "#fff";
        Excluir.style.borderColor = "#000";

        Nome.value = "";
        Sobrenome.value = "";
        Email.value = "";
        Telefone.value = "";

        adicionarEventosMouseOver(Nome);
        adicionarEventosMouseOver(Sobrenome);
        adicionarEventosMouseOver(Email);
        adicionarEventosMouseOver(Telefone);
    }
}

function adicionarEventosMouseOver(elemento) {
    elemento.addEventListener('mouseover', function() {
        elemento.style.border = '2px solid blue';
    });

    elemento.addEventListener('mouseout', function() {
        elemento.style.border = '2px solid #000';
    });
}

function RemoverBordas() {
    let Nome = document.getElementById("Nome");
    let Sobrenome = document.getElementById("Sobrenome");
    let Email = document.getElementById("Email");
    let Telefone = document.getElementById("Telefone");

    Nome.style.border = "none";
    Sobrenome.style.border = "none";
    Email.style.border = "none";
    Telefone.style.border = "none";
}

function cancelar() {
    if (incluirClicado) {
        let Nome = document.getElementById("Nome");
        let Sobrenome = document.getElementById("Sobrenome");
        let Email = document.getElementById("Email");
        let Telefone = document.getElementById("Telefone");

        Nome.disabled = true;
        Sobrenome.disabled = true;
        Email.disabled = true;
        Telefone.disabled = true;

        RemoverBordas();

        let Salvar = document.getElementById("salvar");
        let Cancelar = document.getElementById("cancelar");
        let Incluir = document.getElementById("incluir");
        let Editar = document.getElementById("editar");
        let Excluir = document.getElementById("excluir");

        Salvar.disabled = true;
        Cancelar.disabled = true;
        Incluir.disabled = false;
        Editar.disabled = true;
        Excluir.disabled = true;

        Incluir.style.backgroundColor = "green";
        Salvar.style.backgroundColor = "#fff";
        Salvar.style.color = "#000";
        Salvar.style.borderColor = "#000";
        Editar.style.borderColor = "#000";
        Excluir.style.borderColor = "#000";
        Cancelar.style.color = "#000";
        Cancelar.style.borderColor = "#000";

        Nome.value = "";
        Sobrenome.value = "";
        Email.value = "";
        Telefone.value = "";

        incluirClicado = false;
        editando = false;
    }
}

function Salvar_Array() {
    if (incluirClicado) {
        let Nome = document.getElementById("Nome").value;
        let Sobrenome = document.getElementById("Sobrenome").value;
        let Email = document.getElementById("Email").value;
        let Telefone = document.getElementById("Telefone").value;

        if (editando) {
            contatos[currentIndex] = {
                nome: Nome,
                sobrenome: Sobrenome,
                email: Email,
                telefone: Telefone
            };
        } else {
            contatos.push({
                nome: Nome,
                sobrenome: Sobrenome,
                email: Email,
                telefone: Telefone
            });
            currentIndex = contatos.length - 1; // Atualiza currentIndex para o último contato
        }

        console.log(contatos);

        let Incluir = document.getElementById("incluir");
        let Cancelar = document.getElementById("cancelar");
        let Editar = document.getElementById("editar");
        let Salvar = document.getElementById("salvar");
        let Excluir = document.getElementById("excluir");

        Incluir.disabled = false;
        Incluir.style.backgroundColor = "green";
        Incluir.style.borderColor = "#000";
        Editar.disabled = false;
        Editar.style.backgroundColor = "orange";
        Excluir.disabled = false;
        Excluir.style.backgroundColor = "red";
        Salvar.disabled = true;
        Salvar.style.backgroundColor = "#fff";
        Salvar.style.borderColor = "#000";
        Cancelar.disabled = true;
        Cancelar.style.color = "#000";
        Cancelar.style.borderColor = "#000";

        let NomeElem = document.getElementById("Nome");
        let SobrenomeElem = document.getElementById("Sobrenome");
        let EmailElem = document.getElementById("Email");
        let TelefoneElem = document.getElementById("Telefone");

        NomeElem.disabled = true;
        SobrenomeElem.disabled = true;
        EmailElem.disabled = true;
        TelefoneElem.disabled = true;

        incluirClicado = false;
        editando = false;
    }
}

function atualizarCampos(index) {
    if (index >= 0 && index < contatos.length) {
        document.getElementById("Nome").value = contatos[index].nome;
        document.getElementById("Sobrenome").value = contatos[index].sobrenome;
        document.getElementById("Email").value = contatos[index].email;
        document.getElementById("Telefone").value = contatos[index].telefone;

        // Habilitar os botões "EDITAR" e "EXCLUIR"
        let Editar = document.getElementById("editar");
        let Excluir = document.getElementById("excluir");

        Editar.disabled = false;
        Excluir.disabled = false;
        Editar.style.backgroundColor = "orange";
        Excluir.style.backgroundColor = "red";
    } else {
        document.getElementById("Nome").value = "";
        document.getElementById("Sobrenome").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Telefone").value = "";

        let Editar = document.getElementById("editar");
        let Excluir = document.getElementById("excluir");

        Editar.disabled = true;
        Excluir.disabled = true;
        Editar.style.backgroundColor = "#fff";
        Editar.style.borderColor = "#000";
        Excluir.style.backgroundColor = "#fff";
        Excluir.style.borderColor = "#000";
    }
}

function voltarAoPrimeiro() {
    if (contatos.length > 0) {
        currentIndex = 0;
        atualizarCampos(currentIndex);
    }
}

function voltarAnterior() {
    if (currentIndex > 0) {
        currentIndex--;
        atualizarCampos(currentIndex);
    }
}

function proximo() {
    if (currentIndex < contatos.length - 1) {
        currentIndex++;
        atualizarCampos(currentIndex);
    }
}

function ultimo() {
    if (contatos.length > 0) {
        currentIndex = contatos.length - 1;
        atualizarCampos(currentIndex);
    }
}

function editar() {
    if (currentIndex >= 0 && currentIndex < contatos.length) {
        editando = true;
        incluirClicado = true;

        let Nome = document.getElementById("Nome");
        let Sobrenome = document.getElementById("Sobrenome");
        let Email = document.getElementById("Email");
        let Telefone = document.getElementById("Telefone");

        Nome.disabled = false;
        Sobrenome.disabled = false;
        Email.disabled = false;
        Telefone.disabled = false;
        Nome.focus();

        Nome.style.border = "2px solid #000";
        Sobrenome.style.border = "2px solid #000";
        Email.style.border = "2px solid #000";
        Telefone.style.border = "2px solid #000";

        let Incluir = document.getElementById("incluir");
        let Editar = document.getElementById("editar");
        let Salvar = document.getElementById("salvar");
        let Cancelar = document.getElementById("cancelar");
        let Excluir = document.getElementById("excluir");

        Incluir.disabled = true;
        Salvar.disabled = false;
        Cancelar.disabled = false;
        Excluir.disabled = true;
        Incluir.style.backgroundColor = "#fff";
        Incluir.style.borderColor = "#000";
        Salvar.style.backgroundColor = "#04C9F4";
        Cancelar.style.color = "#04C9F4";
        Cancelar.style.borderColor = "#04C9F4";
        Editar.style.backgroundColor = "#fff";
        Editar.style.borderColor = "#000";
        Excluir.style.backgroundColor = "#fff";
        Excluir.style.borderColor = "#000";

        adicionarEventosMouseOver(Nome);
        adicionarEventosMouseOver(Sobrenome);
        adicionarEventosMouseOver(Email);
        adicionarEventosMouseOver(Telefone);
    }
}

function excluir() {
    if (currentIndex >= 0 && currentIndex < contatos.length) {
        contatos.splice(currentIndex, 1);
        if (currentIndex >= contatos.length) {
            currentIndex = contatos.length - 1;
        }
        atualizarCampos(currentIndex);
    }
}