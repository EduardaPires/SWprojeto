function pesquisar() {
    let input = document.getElementById('pesquisa').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('med');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";    //ver como deixar o item encontrado no topo da lista!             
        }
    }
}

    const divList = document.querySelector(".listademed");
    const addTitle = document.querySelector(".nomeadd");
    const addBtn = document.querySelector("#add");
    const addComp = document.querySelector(".comp");
    const addUtil = document.querySelector(".utilidade");
    const addQuant = document.querySelector(".quantidade");
    const addHist = document.querySelector(".hist");

    addBtn.addEventListener('click', () => {
        const ul = divList.querySelector("ul");
        const li = document.createElement("li");
        const a = document.createElement("a");
        const button = document.createElement("button");
        a.innerHTML = addTitle.value;
        ul.appendChild(li);
        li.appendChild(a);
        a.appendChild(button);
        mudarTela();
    })

    function mudarTela()
    { 
        /*const boxes = document.querySelectorAll(b);
        boxes.forEach(box => {
        box.remove();
        });*/
         const tit = document.createElement("h1");
         tit.innerHTML = addTitle.value;
         addTitle.parentNode.replaceChild(tit, addTitle);

         const comp = document.createElement("p");
         //"Composição:"+ 
         comp.innerHTML = addComp.value;
         addComp.parentNode.replaceChild(comp, addComp);
         comp.id = "edit";

         const util = document.createElement("p");
         //" Para que é utilizado: "+
         util.innerHTML = addUtil.value;
         addUtil.parentNode.replaceChild(util, addUtil);
         util.id = "edit";

         const quant = document.createElement("p");
         //"Quantidade em estoque: "+ 
         quant.innerHTML =addQuant.value;
         addQuant.parentNode.replaceChild(quant, addQuant);
         quant.id = "edit";

         const hist = document.createElement("p");
         //"Histórico de uso: "+
         hist.innerHTML = addHist.value;
         addHist.parentNode.replaceChild(hist, addHist);
         hist.id = "edit";
    
    }
