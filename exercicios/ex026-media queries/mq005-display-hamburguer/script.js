function mudouTamanho() {
    if (window.innerWidth >= 768){
        itens.style.display = 'block'
    }else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    if (itens.style.display == 'block') {// se o display for block, ao clicar, display sera none
        itens.style.display = 'none'
    }else {
        itens.style.display = 'block' //se o dislay for none, ao clicar, display sera block
    }
}