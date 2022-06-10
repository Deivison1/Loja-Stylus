fetch("./itens.json") 
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

            var total = 0;
            var quantidade = 0;
            var containerCarrinho = document.getElementById('carrinho'); 
 
            containerCarrinho.innerHTML = ""; 
 
            items.map((val) => { 
                if (val.quantidade > 0) { 
                    containerCarrinho.innerHTML += ` 
            <div class="info-carrinho"> 
                <p>Produto: `+ val.nome + `</p> 
                <p>Qtde: `+ val.quantidade + `</p> 
                <p>Preço: `+ val.preco * val.quantidade + `</p> 
            </div> 
        ` 
        total = total + val.preco * val.quantidade 
        quantidade = quantidade + val.quantidade 
            }; 
        }) 
        containerCarrinho.innerHTML += 
        `<p>Quantidade total: ${quantidade} Valor total:${total}</p>`;
            
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