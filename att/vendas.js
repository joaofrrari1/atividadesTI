//João Costa e João Ferrari
var produtos = [
    { nome: 'caneta', preco: 5.25, qtdEstoque: 27 },
    { nome: 'lápis', preco: 2.99, qtdEstoque: 53 },
    { nome: 'borracha', preco: 3.99, qtdEstoque: 60 },
    { nome: 'régua', preco: 5.50, qtdEstoque: 33 },
    { nome: 'caderno', preco: 15.90, qtdEstoque: 28 },
    { nome: 'lapiseira', preco: 22.59, qtdEstoque: 15 }
];

function compras(qtdComprada, nomeProduto) {
    var produto = produtos.find(item => item.nome === nomeProduto);
    if (produto) {
        produto.qtdEstoque += qtdComprada;
        console.log(`Compra realizada com sucesso! Novo estoque de ${nomeProduto}: ${produto.qtdEstoque}`);
    } else {
        console.log(`Produto '${nomeProduto}' não encontrado.`);
    }
}


function vendas(qtdVendida, nomeProduto) {
    var produto = produtos.find(item => item.nome === nomeProduto);
    if (produto) {
        if (produto.qtdEstoque >= qtdVendida) {
            produto.qtdEstoque -= qtdVendida;
            console.log(`Venda realizada com sucesso! Novo estoque de ${nomeProduto}: ${produto.qtdEstoque}`);
        } else {
            console.log(`Estoque insuficiente para ${nomeProduto}.`);
        }
    } else {
        console.log(`Produto '${nomeProduto}' não encontrado.`);
    }
}

function novaMercadoria(nomeProduto, precoNovo, qtd) {
    var produtoExistente = produtos.find(item => item.nome === nomeProduto);
    if (produtoExistente) {
        console.log(`Produto '${nomeProduto}' já existe no cadastro.`);
    } else {
        produtos.push({ nome: nomeProduto, preco: precoNovo, qtdEstoque: qtd });
        console.log(`Novo produto adicionado ao estoque: ${nomeProduto}`);
    }
}
 


