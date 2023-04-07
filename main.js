const listaItens = document.querySelectorAll(".lista__item");
const listaItensNomes = document.querySelectorAll(".lista__item h2");
const ondeFicamOsNomes = document.querySelector(".lista__nomes");

function criaListaNomes() {
  listaItensNomes.forEach((item) => {
    ondeFicamOsNomes.innerHTML += `<li class="lista__nomes__itens">${item.innerHTML}</li><br>`;
  });
}

function pegaNomesLista() {
  const nomes = document.querySelectorAll(".lista__nomes__itens");
  nomes.forEach(nome =>{
    nome.addEventListener('click', (item)=>{
        verificaListaPorNome(nome.innerHTML)
    })
  })
}

function verificaListaPorNome(nome) {
    listaItensNomes.forEach((item) => {

        if(item.innerHTML === nome){
            item.parentElement.classList.add('ativa')
        }  else {
            item.parentElement.classList.remove('ativa')
        }
    })
}
criaListaNomes();
pegaNomesLista();
verificaListaPorNome()
// listaItens.forEach(item => {
//     console.log(item.innerText)
// })
