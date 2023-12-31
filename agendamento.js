function leDados() {
    let strDados = localStorage.getItem('dbagendamento')
    let objDados = {};


    if (strDados) {
        objDados = JSON.parse(strDados)

    }

    else {
        objDados = {
            agendamentos: [
                {
                    nome: "Laura Resende",
                    hemocentro: "Hemocentro Belo Horizonte",
                    documento: "12345678",
                    nascimento: "01/01/2003",
                    sexo: "Feminino",
                    sangue: "O+",
                    data: "12/08/2013",
                    horario: "07:30"
                },
                {
                    nome: "Livia Resende",
                    hemocentro: "Hemocentro Belo Horizonte",
                    documento: "12345678",
                    nascimento: "02/02/2003",
                    sexo: "Feminino",
                    sangue: "O+",
                    data: "12/08/2013",
                    horario: "08:30"
                },
                {
                    nome: "Maria Oliveira",
                    hemocentro: "Hemocentro Belo Horizonte",
                    documento: "12345678",
                    nascimento: "04/01/2004",
                    sexo: "Feminino",
                    sangue: "A+",
                    data: "13/08/2013",
                    horario: "09:30"
                }



            ]
        }
    }
    return objDados;
}

function salvaDados(dados) {

    localStorage.setItem('dbagendamento', JSON.stringify(dados))

}

function incluirAgendamento() {
    let objDados = leDados();

    let nome = document.getElementById('name').value;
    let documento = document.getElementById('number').value;
    let hemocentro = document.getElementById('hemocentro').value;
    let nascimento = document.getElementById('data').value;
    let sexo = document.getElementById('sexo').value;
    let sangue = document.getElementById('sangue').value;
    let data = document.getElementById('data1').value;
    let horario = document.getElementById('hora').value;

    if (nome && documento && hemocentro && nascimento && sexo && sangue && data && horario) {
        let novoAgendamento = {
            nome: nome,
            hemocentro: hemocentro,
            documento: documento,
            nascimento: nascimento,
            sexo: sexo,
            sangue: sangue,
            data: data,
            horario: horario
        };
        objDados.agendamentos.push(novoAgendamento);

        salvaDados(objDados);
       
        alert("Agendamento realizado com sucesso!");
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
        document.getElementById('hemocentro').selectedIndex = 0;
        document.getElementById('data').value = '';
        document.getElementById('sexo').selectedIndex = 0;
        document.getElementById('sangue').selectedIndex = 0;
        document.getElementById('data1').value = '';
        document.getElementById('hora').value = '';
        document.getElementById('cbx').checked = false;
    } else {
        alert('Preencha todos os campos antes de adicionar o agendamento.');
    }
}



document.getElementById('confirmar').addEventListener('click', incluirAgendamento);






document.getElementById('confirmar').addEventListener('click', incluirAgendamento);


function alerta() {
    alert("Agendamento realizado com sucesso!");
}
function alerta1() {
    alert("Agendamento alterado com sucesso!");
}




document.getElementById('confirmar').addEventListener('click', incluirAgendamento)


function alerta() {
    alert("Agendamento realizado com sucesso!");
}

try {
    // Obtém os cadastros armazenados no localStorage
    const cadastrosData = JSON.parse(localStorage.getItem('dbcadastro')) || {};
    const cadastros = cadastrosData.cadastros || [];

    // Verifica se há pelo menos um cadastro
    if (cadastros.length > 0) {
        // Obtém o último cadastro
        const ultimoCadastro = cadastros[cadastros.length - 1];

        // Obtém o nome do último cadastro
        const nomeUltimoCadastro = ultimoCadastro.nome;
        const sobrenomeUltimo=ultimoCadastro.sobrenome;

        // Atualiza o conteúdo da tag <h1> com o nome do último cadastro
        document.getElementById('user_perfil').querySelector('h1').textContent = nomeUltimoCadastro +" "+sobrenomeUltimo;

    } else {
        console.log('Nenhum cadastro encontrado.');
    }
} catch (error) {
    console.error('Erro ao obter o último cadastro:', error);
}