
<div style="text-align:center;"><h1>Loja virtual Stylus</h1>
 <img src="https://github.com/Deivison1/Loja-Stylus/blob/main/img/Logo2-1.png">
</div>

<p>Loja virtual feita em Javascript com manipulação do DOM (Document Object Model) recebendo os dados em JSON.
O site está totalmente reponsivo</p>

##Metodo global Fetch()
O primeiro parâmetro da função Fetch deve sempre ser o URL. Fetch recebe um segundo objeto JSON com opções como método, cabeçalhos, corpo da solicitação e assim por diante.
``` Javascript
fetch("./itens.json") 
    .then(res => { return res.json() }) 
    .then(items => { 
```
<hr>

Para isso, criei uma função que recebe os "itens" do json e retorna para o HTML em suas repetivas caixas(div's). Assim populando a página de forma dinânimca, com manipulação do DOM (Document Object Model).
``` Javascript
var carrinho = [] 
 
 
incinializarLoja = () => { 
var containerProdutos = document.getElementById('produtos'); 
items.map((val) => { 
    containerProdutos.innerHTML += `  
        <div class="produto-single">  
            <img src="./img/`+ val.img + `"<img/>  
            <p>`+ val.nome + `</p>  
            <p>Valor: R$ `+ (val.preco).toFixed(2).replace(".", ",") + `</p>  
            <button id=${val.id} onclick="fnClick(${val.id})" class= "link-carrinho"key="` +
            val.id + `" href="#carrinho">Adicionar ao carrinho!</button>  
        </div>` 
           }) 
        };
incinializarLoja(); 
```
<hr>
 
 Essas são as caixa que vão receber os produtos e atualização do carinho
 ``` html
 <main>
        <h2 class="titulo-vitrine">Produtos</h2>
            <div id="produtos"></div>
            
        <h2 class="titulo-carinho">Carinho</h2>
            <div id="carrinho"></div>
   </main>
  ```
 <hr>
 
 <p> Site da loja <a href="https://deivison1.github.io/Loja-Stylus/">Stylus<a/></p>
 <p>Imagens ilustrativa da loja</p>
 <img src="https://github.com/Deivison1/Loja-Stylus/blob/main/img/home.png" alt="">
 <img src="https://github.com/Deivison1/Loja-Stylus/blob/main/img/carrinho.png" alt="">
