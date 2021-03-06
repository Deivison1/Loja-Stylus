const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    document.getElementById('toggle').checked = false;
}
navLink.forEach(n => n.addEventListener('click', linkAction));

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
        <p class="juros">6x sem juros</p> 
        <button id=${val.id} onclick="fnClick(${val.id})" class= "link-carrinho"key="` + val.id + `" href="#carrinho">Adicionar ao carrinho!</button>  
    </div>` 
   }) 
};
incinializarLoja(); 


fnClick = (elemento) => { 

var idEncontrado = false;
    for (let x = 0; x < items.length; x++) { 
        if (carrinho != [] && carrinho[x]?.id == elemento) { 
            carrinho[x].quantidade++ 
            idEncontrado = true 
        }
    }if (idEncontrado == false) { 
            carrinho.push(items[elemento])
        } 
    fnCarrinho() 
};
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
                    <p class="info-carrinho-preco">R$ ${(val.preco * val.quantidade).toFixed(2).replace(".", ",")}</p> 
                    <button id="${val.id}" class="btn-remover" onclick="fnDelete(${val.id})"><i class='bx bxs-x-circle' ></i></button> 
                </div> ` 
            valorTotal = valorTotal + val.preco * val.quantidade 
            quantidadeTotal = quantidadeTotal + val.quantidade 
        });
        containerCarrinho.innerHTML += ` 
        <div class="info-total"> 
            <p>Quantidade total: ${quantidadeTotal}</p>  
            <p Style="float: right;">Valor total: R$ ${valorTotal.toFixed(2).replace(".", ",")}</p>  
            <button class="btn-pay">pagar</button>
        </div>`; 
 
    };
    fnDelete = (e) => { 
        items[e].quantidade = 1 
        carrinho = carrinho.filter((del => { 
            return del.id !== e })) 
        fnCarrinho() 
    }; 
    
});

function scrollUp(){
    
    const scrollUp = document.getElementById('scroll-up');
        if(this.scrollY >= 250) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
window.addEventListener('scroll', scrollUp);

