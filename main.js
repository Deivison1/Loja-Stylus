fetch("./itens.json") 
    .then(res => { return res.json() }) 
    .then(items => { 
 
    var carrinho = [] 
 
 
incinializarLoja = () => { 
var containerProdutos = document.getElementById('produtos'); 
items.map((val) => { 
    containerProdutos.innerHTML += `  
        <div class="produto-single">  
            <img src="./img/`+ val.img + `"<img/>  
            <p>`+ val.nome + `</p>  
            <p>Valor: R$ `+ (val.preco).toFixed(2).replace(".", ",") + `</p>  
            <button id=${val.id} onclick="fnClick(${val.id})" class= "link-carrinho"key="` + val.id + `" href="#carrinho">Adicionar ao carrinho!</button>  
        </div>` 
           }) 
        } 
incinializarLoja(); 
fnClick = (e) => { 

var idEncontrado = false;
    for (let x = 0; x < items.length; x++) { 
        if (carrinho != [] && carrinho[x]?.id == e) { 
            carrinho[x].quantidade++ 
            idEncontrado = true 
        } 
    } 
    if (idEncontrado == false) { 
        carrinho.push(items[e])
    } 
    fnCarrinho() 
} 
function fnCarrinho() { 
var valorTotal = 0; 
var quantidadeTotal = 0; 
var containerCarrinho = document.getElementById('carrinho'); 
    containerCarrinho.innerHTML = ""; 
        carrinho.map((val) => { 
            containerCarrinho.innerHTML += ` 
                <div class="info-carrinho"> 
                    <p class="info-carrinho-produto">Produto: ${val.nome}</p> 
                    <p class="info-carrinho-quantidade">Qtde:  ${val.quantidade}  </p> 
                    <p class="info-carrinho-preco">Preço: R$ ${(val.preco * val.quantidade).toFixed(2).replace(".", ",")}</p> 
                    <button id="${val.id}" class="btn-remover" onclick="fnDelete(${val.id})"> X  </button> 
                </div> ` 
            valorTotal = valorTotal + val.preco * val.quantidade 
            quantidadeTotal = quantidadeTotal + val.quantidade 
        }) 
        containerCarrinho.innerHTML += ` 
        <div class="info-total"> 
            <p>Quantidade total: ${quantidadeTotal}</p>  
            <p Style="float: right;">Valor total: R$ ${valorTotal.toFixed(2).replace(".", ",")}</p>  
        </div>`; 
 
    } 
 
        fnDelete = (e) => { 
            carrinho = carrinho.filter((del => { 
                return del.id !== e}))
                carrinho[e].quantidade = 0 
            fnCarrinho() 
        } 
    })
    const navLink = document.querySelectorAll('.nav-link');

    function linkAction(){
        document.getElementById('toggle').checked = false;
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));


/*fetch("./itens.json") 
    .then(res => { return res.json() }) 
    .then(items => { 

incinializarLoja = () => { 
var containerProdutos = document.getElementById('produtos'); 
    items.map((val) => { 
    containerProdutos.innerHTML += ` 
    <div class="produto-single"> 
        <img src="./img/`+ val.img + `"<img/> 
        <p>`+ val.nome + `</p> 
        <p>Valor: R$ `+ val.preco +`</p> 
        <a class= "link-carrinho"key="`+ val.id + `" href="#carrinho">Adicionar ao carrinho!</a> 
    </div> 
    `; 
 }) 
} 
incinializarLoja(); 

atualizarCarrinho = () => { 

var valorTotal = 0;
var quantidadeTotal = 0;
var containerCarrinho = document.getElementById('carrinho'); 
 
containerCarrinho.innerHTML = ""; 
    items.map((val) => { 
        if (val.quantidade > 0) { 
            containerCarrinho.innerHTML += ` 
            <div class="info-carrinho"> 
                <p class="info-carrinho-produto">
                   Produto: `+ val.nome + `</p> 
                <p class="info-carrinho-quantidade">
                   Qtde: `+ val.quantidade + `</p> 
                <p class="info-carrinho-preco">
                   Preço: R$ `+ val.preco * val.quantidade +`</p> 
                   <button class= "${val.id} btn-remover"> X </button> 
            </div> 
        ` 
        valorTotal = valorTotal + val.preco * val.quantidade;
        quantidadeTotal = quantidadeTotal + val.quantidade;
        
        }; 
        
        }) 
        containerCarrinho.innerHTML += `
        <div class="info-total">
            <p>Quantidade total: ${quantidadeTotal}</p> 
            <p>Valor total: R$ ${valorTotal}</p> 
        </div>`;
        }
        var links = document.getElementsByTagName('a');

        for (var i = 0; i < links.length; i++) { 
            links[i].addEventListener('click', function () { 
                let key = this.getAttribute('key'); 
                items[key].quantidade++; 
                atualizarCarrinho(); 
                return false; 
            }) 
        } 
        
    } 
);
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    document.getElementById('toggle').checked = false;
}
navLink.forEach(n => n.addEventListener('click', linkAction));*/
