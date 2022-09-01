const label = document.createElement("label");

function showLoading()
{
    //conectar com pag de medicamentos 
    //criar uma função de trigger do btn que referencia essa
    const div = document.createElement("div");
    div.classList.add("preparando");
    label.innerText = "O MIX DE REMÉDIOS ESTÁ SENDO PREPARADO... ";
    div.appendChild(label);
    document.body.appendChild(div);

    setTimeout(() => fim(), 3000);
}

function HideLoading ()
{
    const loadings = document.getElementsByClassName("preparando");
    if (loadings.length)
    {
        loadings[0].remove();
    }
}

function fim()
{
    const pronto = document.createElement("label");
    pronto.innerText = "TUDO PRONTO! ";
    label.parentNode.replaceChild(pronto, label);
}

function BtnPreparar()
{
    showLoading();
}