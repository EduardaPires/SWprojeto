const elementoAdd= document.querySelector(".novo-item-input");
const addRegistroButton = document.querySelector(".botaoaddregistro");

const elementoAddCodigo =document.querySelector(".novo-item-input-codigo");
const registrosCodigosIdentificadores=document.querySelector('.registros-barradeinput-codigo')

const registrosConteudo = document.querySelector('.registros-barradeinput')

const validacaoInput= ()=> elementoAdd.value.trim().length > 0;
const validacaoInput2= ()=> elementoAddCodigo.value.trim().length > 0;

const verificacaoElementoAdd= ()=>{
    const elementoValido= validacaoInput();
    const elementoValidoCodigo= validacaoInput2();

    if(!elementoValido && !elementoValidoCodigo){
        return elementoAdd.classList.add("error") && elementoAddCodigo.classList.add("error2");
    }

    const registroBarradeInput = document.createElement("div");
    registroBarradeInput.classList.add("item-registro");

    const conteudoDoRegistro = document.createElement("conteudo");
    conteudoDoRegistro.innerText=elementoAdd.value;

    registroBarradeInput.appendChild(conteudoDoRegistro);

    registrosConteudo.appendChild(registroBarradeInput);



    const registroBarradeInputCodigo=document.createElement("div");
    registroBarradeInputCodigo.classList.add("item-registro-codigo");

    const conteudoDoCodigo = document.createElement("conteudo");
    conteudoDoCodigo.innerText=elementoAddCodigo.value;

    registroBarradeInputCodigo.appendChild(conteudoDoCodigo);

    registrosCodigosIdentificadores.appendChild(registroBarradeInputCodigo);

    
    dataAtual = new Date();
    dia = dataAtual.getDate();
    mes = (dataAtual.getMonth() + 1);
    ano = dataAtual.getFullYear();
    horas = dataAtual.getHours();
    minutos = dataAtual.getMinutes();
    document.getElementById("datasRegistros").innerHTML = dia+"/"+ mes+ "/"+ ano+ " - Horário do registro:"+ horas+ ":"+ minutos;
   
};

const verificacaoMudançaInput=()=> {
    const elementoValido =validacaoInput();
    if(elementoValido){
        return elementoAdd.classList.remove("error");
    }
}

addRegistroButton.addEventListener("click", () => verificacaoElementoAdd());
elementoAdd.addEventListener("change", ()=> verificacaoMudançaInput());
elementoAddCodigo.addEventListener("change",()=> verificacaoMudançaInput());

