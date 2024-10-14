const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.lista-task')

let ListaItens = []



function AdicionarTarefa(){
    ListaItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    MostrarTarefa() 
}

function MostrarTarefa(){
    let Li =''

    ListaItens.forEach((item, posicao) => {
        Li =  Li + `

        <li class="task ${item.concluida && "concluido"}">
                <img src="./assets/check.jpg" alt="check-na-tarefa" onclick="Checktarefa(${posicao})">
                <p> ${item.tarefa} </p>
                <img src="./assets/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
                </li> 
        `  
    })

    ListaCompleta.innerHTML = Li

}

function Checktarefa(posicao){
    ListaItens[posicao]. concluida = !ListaItens[posicao]. concluida 

    MostrarTarefa()
}

function deletarItem(posicao){
    ListaItens.splice(posicao, 1)
    
    MostrarTarefa()
} 

button.addEventListener('click', AdicionarTarefa)
