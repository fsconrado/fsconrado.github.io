//======================================================
// RSC-PCCTAE
// app.js
//======================================================

document.addEventListener("DOMContentLoaded", function () {

    inicializarSistema();

});

//======================================================

function inicializarSistema() {

    for (let i = 1; i <= 6; i++) {

        document
            .getElementById("btnAdicionar" + i)
            .addEventListener("click", function () {

                adicionarLinha(i);

            });

    }

}

//======================================================

function adicionarLinha(numeroTabela) {

    let tbody = document.getElementById("tbody" + numeroTabela);

    let linha = tbody.insertRow();

    let indice = tbody.rows.length;

    //--------------------------------------------------

    linha.insertCell().innerHTML = indice;

    //--------------------------------------------------

    linha.insertCell().innerHTML =

        `<input
            class="form-control criterio"
            type="text">`;

    //--------------------------------------------------

    linha.insertCell().innerHTML =

        `<input
            class="form-control unidade"
            type="number"
            value="1"
            min="0">`;

    //--------------------------------------------------

    linha.insertCell().innerHTML =

        `<input
            class="form-control pontos"
            type="number"
            value="0"
            min="0">`;

    //--------------------------------------------------

    linha.insertCell().innerHTML =

        `<input
            class="form-control obtida"
            type="number"
            readonly>`;

    //--------------------------------------------------

    linha.insertCell().innerHTML =

        `<input
            class="form-control documento"
            type="text"
            placeholder="Documento">`;

    //--------------------------------------------------

    linha.insertCell().innerHTML =

        `<button
            class="btn btn-danger btn-sm">

            <i class="bi bi-trash"></i>

        </button>`;

    //--------------------------------------------------

    let btnExcluir =

        linha.cells[6].querySelector("button");

    btnExcluir.addEventListener(

        "click",

        function () {

            linha.remove();

            renumerarTabela(numeroTabela);

            atualizarSubtotal(numeroTabela);

            atualizarTotal();

        }

    );

    //--------------------------------------------------

    linha.querySelector(".unidade")
        .addEventListener("input", function () {

            calcularLinha(linha, numeroTabela);

        });

    linha.querySelector(".pontos")
        .addEventListener("input", function () {

            calcularLinha(linha, numeroTabela);

        });

}

//======================================================

function calcularLinha(linha, tabela) {

    let unidade =

        parseFloat(

            linha.querySelector(".unidade").value

        ) || 0;

    let pontos =

        parseFloat(

            linha.querySelector(".pontos").value

        ) || 0;

    let total = unidade * pontos;

    linha.querySelector(".obtida").value = total.toFixed(2);

    atualizarSubtotal(tabela);

    atualizarTotal();

}

//======================================================

function atualizarSubtotal(numeroTabela) {

    let tbody =

        document.getElementById("tbody" + numeroTabela);

    let subtotal = 0;

    tbody.querySelectorAll(".obtida")

        .forEach(function (campo) {

            subtotal +=

                parseFloat(campo.value) || 0;

        });

    document.getElementById(

        "subtotal" + numeroTabela

    ).value = subtotal.toFixed(2);

}

//======================================================

function renumerarTabela(numeroTabela) {

    let tbody =

        document.getElementById(

            "tbody" + numeroTabela

        );

    [...tbody.rows].forEach(

        function (linha, indice) {

            linha.cells[0].innerHTML = indice + 1;

        }

    );

}

//======================================================
// TOTAL GERAL
//======================================================

function atualizarTotal() {

    let total = 0;

    for (let i = 1; i <= 6; i++) {

        let valor = parseFloat(

            document.getElementById(
                "subtotal" + i
            ).value

        ) || 0;

        total += valor;

    }

    document.getElementById(
        "totalGeral"
    ).value = total.toFixed(2);

    calcularBanco();

    verificarNivel();

    salvarAutomaticamente();

}

//======================================================
// BANCO DE PONTOS
//======================================================

function calcularBanco(){

    let total =

        parseFloat(
            document.getElementById("totalGeral").value
        ) || 0;

    let minimo =

        parseFloat(
            document.getElementById("pontMinima").value
        ) || 0;

    let saldo = total - minimo;

    if(saldo < 0)
        saldo = 0;

    document.getElementById(
        "saldoBanco"
    ).value = saldo.toFixed(2);

}

//======================================================
// NÍVEL ATENDIDO
//======================================================

function verificarNivel(){

    let total =

        parseFloat(
            document.getElementById("totalGeral").value
        ) || 0;

    let nivel = "";

    /*
      ESTES VALORES SÃO APENAS EXEMPLO.

      Depois iremos buscar automaticamente
      da tabela oficial do MEC.
    */

    if(total >= 900){

        nivel = "RSC-VI";

    }else
    if(total >= 750){

        nivel = "RSC-V";

    }else
    if(total >= 600){

        nivel = "RSC-IV";

    }else
    if(total >= 450){

        nivel = "RSC-III";

    }else
    if(total >= 300){

        nivel = "RSC-II";

    }else
    if(total >=150){

        nivel = "RSC-I";

    }else{

        nivel = "Não atende";

    }

    document.getElementById(
        "nivelAtendido"
    ).value = nivel;

}

//======================================================
// SALVAR AUTOMATICAMENTE
//======================================================

function salvarAutomaticamente(){

    let dados={};

    dados.nome =
        document.getElementById("nome").value;

    dados.siape =
        document.getElementById("siape").value;

    dados.pontMinima =
        document.getElementById("pontMinima").value;

    dados.total =
        document.getElementById("totalGeral").value;

    dados.nivel =
        document.getElementById("nivelAtendido").value;

    dados.banco =
        document.getElementById("saldoBanco").value;

    localStorage.setItem(

        "rscFormulario",

        JSON.stringify(dados)

    );

}

//======================================================
// RESTAURAR
//======================================================

function restaurarFormulario(){

    let dados =

        localStorage.getItem(

            "rscFormulario"

        );

    if(!dados)
        return;

    dados = JSON.parse(dados);

    document.getElementById("nome").value =
        dados.nome || "";

    document.getElementById("siape").value =
        dados.siape || "";

    document.getElementById("pontMinima").value =
        dados.pontMinima || "";

    document.getElementById("totalGeral").value =
        dados.total || "";

    document.getElementById("nivelAtendido").value =
        dados.nivel || "";

    document.getElementById("saldoBanco").value =
        dados.banco || "";

}

//======================================================

window.onload=function(){

    restaurarFormulario();

}

//======================================================
// IMPRESSÃO
//======================================================

document
.getElementById("btnImprimir")
.addEventListener("click", imprimirFormulario);

function imprimirFormulario(){

    window.print();

}

//======================================================
// GERAR PDF
//======================================================

document
.getElementById("btnPDF")
.addEventListener("click", gerarPDF);

function gerarPDF(){

    const elemento=document.getElementById("frmRSC");

    const opcoes={

        margin:10,

        filename:"RSC-PCCTAE.pdf",

        image:{
            type:"jpeg",
            quality:1
        },

        html2canvas:{
            scale:2
        },

        jsPDF:{
            unit:"mm",
            format:"a4",
            orientation:"portrait"
        }

    };

    html2pdf()

        .set(opcoes)

        .from(elemento)

        .save();

}

//======================================================
// LIMPAR LOCALSTORAGE
//======================================================

document
.querySelector("button[type='reset']")
.addEventListener("click",function(){

    if(confirm("Deseja limpar o formulário?")){

        localStorage.removeItem("rscFormulario");

    }

});

//======================================================
// LISTA DE ANEXOS
//======================================================

const inputArquivos=document.getElementById("anexos");

if(inputArquivos){

inputArquivos.addEventListener("change",listarArquivos);

}

function listarArquivos(){

    let lista=document.getElementById("listaArquivos");

    lista.innerHTML="";

    [...this.files].forEach(function(arq){

        let div=document.createElement("div");

        div.className="alert alert-secondary mt-2";

        div.innerHTML=

        "<i class='bi bi-file-earmark'></i> "

        + arq.name +

        " (" +

        (arq.size/1024).toFixed(2)+

        " KB)";

        lista.appendChild(div);

    });

}

//======================================================
// EXPORTAR JSON
//======================================================

function exportarJSON(){

    let dados={

        nome:

        document.getElementById("nome").value,

        siape:

        document.getElementById("siape").value,

        total:

        document.getElementById("totalGeral").value,

        nivel:

        document.getElementById("nivelAtendido").value,

        banco:

        document.getElementById("saldoBanco").value,

        observacoes:

        document.getElementById("observacoes").value

    };

    let blob=new Blob(

        [

            JSON.stringify(

                dados,

                null,

                4

            )

        ],

        {

            type:"application/json"

        }

    );

    let url=

    URL.createObjectURL(blob);

    let a=

    document.createElement("a");

    a.href=url;

    a.download="rsc.json";

    a.click();

    URL.revokeObjectURL(url);

}

//======================================================
// IMPORTAR JSON
//======================================================

function importarJSON(arquivo){

    const leitor=new FileReader();

    leitor.onload=function(e){

        const dados=

        JSON.parse(e.target.result);

        document.getElementById("nome").value=

        dados.nome || "";

        document.getElementById("siape").value=

        dados.siape || "";

        document.getElementById("observacoes").value=

        dados.observacoes || "";

        document.getElementById("totalGeral").value=

        dados.total || "";

        document.getElementById("nivelAtendido").value=

        dados.nivel || "";

        document.getElementById("saldoBanco").value=

        dados.banco || "";

    };

    leitor.readAsText(arquivo);

}

//======================================================
// BARRA DE PROGRESSO
//======================================================

function atualizarProgresso(){

    const campos=

    document.querySelectorAll(

        "input[type=text],input[type=date],textarea"

    );

    let preenchidos=0;

    campos.forEach(function(c){

        if(c.value.trim()!="")

            preenchidos++;

    });

    let porcentagem=

    (preenchidos/campos.length)*100;

    let barra=

    document.getElementById("barraProgresso");

    if(barra){

        barra.style.width=

        porcentagem+"%";

        barra.innerHTML=

        porcentagem.toFixed(0)+"%";

    }

}

document

.querySelectorAll(

"input,textarea"

)

.forEach(function(c){

c.addEventListener(

"input",

atualizarProgresso

);

});

//======================================================
// VALIDAÇÃO
//======================================================

function validarFormulario(){

    let nome=

    document.getElementById("nome").value;

    if(nome.trim()==""){

        alert(

        "Informe o nome do servidor."

        );

        return false;

    }

    let nivel=

    document.getElementById("nivelAtendido").value;

    if(nivel==""){

        alert(

        "Pontuação ainda não calculada."

        );

        return false;

    }

    return true;

}

//======================================================
// BOTÃO SALVAR
//======================================================

document

.getElementById("btnSalvar")

.addEventListener(

"click",

function(){

    if(!validarFormulario())

        return;

    salvarAutomaticamente();

    alert(

    "Formulário salvo com sucesso."

    );

}

);

//======================================================
// DATA AUTOMÁTICA
//======================================================

window.addEventListener(

"load",

function(){

    let hoje=new Date();

    let data=

    hoje.toISOString().split("T")[0];

    let campo=

    document.getElementById(

    "dataAssinatura"

    );

    if(campo)

        campo.value=data;

});

//======================================================
// FIM DO app.js
//======================================================
