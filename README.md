
<div align= "center">
 <h1>Loja virtual STYLUS</h1>
 <img src="https://github.com/Deivison1/Loja-Stylus/blob/main/img/Logo2-1.png">
 </div>


<ul>
  <li>:wrench: Funcionalidades:</li>
  <li>:heavy_check_mark: Links de navegação do site</li>
  <li>:heavy_check_mark: Menu hambúrguer</li>
  <li>:heavy_check_mark: Lista de produtos</li>
  <li>:heavy_check_mark: Botão adicionar e remover ao carrinho</li>
  <li>:x: Botão para pagamento via API publica (vai ser implementado) </li>
  <li>:heavy_check_mark: Formulário para: Duvidas, Sugestões e Contato prossional</li>
</ul>
<p>Loja virtual feita em Javascript com manipulação do DOM (Document Object Model) recebendo os dados em JSON.
O site está responsivo para diferentes tamanhos de tela!</p>

<hr>

<p align="center">Logo abaixo um gif ilustrando como a loja se comporta, ou se prefirir um <a href="https://deivison1.github.io/Loja-Stylus/">Link da loja</a></p>

<br>

![animacao](https://github.com/Deivison1/Loja-Stylus/blob/main/img/Anima%C3%A7%C3%A3o.gif)

<hr>

<h1>Conteúdo tecnico</h1>

<h2>Metodo global Fetch()</h2>
<br>
O primeiro parâmetro da função Fetch deve sempre ser o URL. Fetch recebe um segundo objeto JSON com opções como método, cabeçalhos, corpo da solicitação e assim por diante.

``` Javascript
fetch("./itens.json") 
    .then(res => { return res.json() }) 
    .then(items => { 
```

<hr>

<h2>Funções para adicionar e excluir itens()</h2>

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
 
 Essas são as tags onde o conteúdo fai ser carregado!
 ``` html
 <main>
        <h2 class="titulo-vitrine">Produtos</h2>
            <div id="produtos"></div>
            
        <h2 class="titulo-carinho">Carinho</h2>
            <div id="carrinho"></div>
   </main>
  ```

 

 
