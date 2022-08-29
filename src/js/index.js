const servicos = document.querySelectorAll('.servico')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')
let servicoAtual = 0

setaAvancar.addEventListener('click', () => {
    if (servicoAtual === servicos.length - 1) {
        return
    }
    esconderServicoAtual()
    servicoAtual++
    servicos[servicoAtual].classList.add('mostrar')
    aplicarOpacidadeNasSetas()
})

setaVoltar.addEventListener('click', () => {
    if (servicoAtual === 0) {
        return
    }
    esconderServicoAtual()
    servicoAtual--
    servicos[servicoAtual].classList.add('mostrar')
    aplicarOpacidadeNasSetas()
})

function esconderServicoAtual() {
    const servicoMostrado = document.querySelector('.mostrar')
    servicoMostrado.classList.remove('mostrar')
}

function aplicarOpacidadeNasSetas() {
    const éOPrimeiroServico = servicoAtual === 0
    if (éOPrimeiroServico) {
        setaVoltar.classList.add('opacidade')
    } else {
        setaVoltar.classList.remove('opacidade')
    }

    const éOUltimoServico = servicoAtual === servicos.length - 1
    if (éOUltimoServico) {
        setaAvancar.classList.add('opacidade')
    } else {
        setaAvancar.classList.remove('opacidade')
    }
}