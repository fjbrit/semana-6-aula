console.log("Olá, seja bem vindo");

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome:"Camisa", preco: 50.0 },
  { nome:"Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Cria um carrinho de compras como um array de objetos
let carrinho = [];

// Função para adicionar produto ao carrinho, mostra a lista de produtos, pede ao usuário para digitar um nome de produto, 
//verifica se o produto existe, se sim, pede a quantidade, se a quantidade for maior que 0, o produto é adicionado ao carrinho
function adicionarProduto() {
  let listaProdutos = "Produtos disponíveis:\n";
  produtosDisponiveis.forEach((produto, index) => {
    listaProdutos += `${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}\n`;
  });

  const escolha = prompt(`${listaProdutos}\nDigite o nome do produto que deseja adicionar:`);
  const produtoEscolhido = produtosDisponiveis.find(p => p.nome.toLowerCase() === escolha.toLowerCase());

  if (produtoEscolhido) {
    const quantidade = parseInt(prompt(`Quantas unidades de ${produtoEscolhido.nome} você deseja?`));

    if (quantidade > 0) {
      carrinho.push({
        nome: produtoEscolhido.nome,
        preco: produtoEscolhido.preco,
        quantidade: quantidade,
        subtotal: produtoEscolhido.preco * quantidade
      });
      alert(`${quantidade} ${produtoEscolhido.nome}(s) adicionado(s) ao carrinho!`);
    } else {
      alert("Quantidade inválida!");
    }
  } else {
    alert("Produto não encontrado!");
  }
}

// Função para visualizar o carrinho, verifica se o mesmo está vazio, se não, cria lista de todos os itens, calcula o total da compra e 
//mostra a lista de itens e o total para o usuário.
function visualizarCarrinho() {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio!");
    return;
  }

  let listaCarrinho = "Carrinho de Compras:\n\n";
  let total = 0;

  carrinho.forEach((item, index) => {
    listaCarrinho += `${index + 1}. ${item.nome} - Preço: R$ ${item.preco.toFixed(2)} - Quantidade: ${item.quantidade} - Subtotal: R$ ${item.subtotal.toFixed(2)}\n`;
    total += item.subtotal;
  });

  listaCarrinho += `\nTotal da compra: R$ ${total.toFixed(2)}`;
  alert(listaCarrinho);
}

// Função para finalizar a compra (checkout), verifica se o carrinho está vazio, se não, mostra o conteúdo do carrinho, pede confirmação ao usuário para finalizar compra
// se confirmado, finaliza a compra, neste caso, apenas mostra uma mensagem e limpa o carrinho.
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio. Não é possível finalizar a compra.");
    return;
  }

  visualizarCarrinho();
  const confirmacao = confirm("Deseja finalizar a compra?");
  
  if (confirmacao) {
    alert("Compra finalizada com sucesso! Obrigado por sua compra.");
    carrinho = []; // Limpa o carrinho após a compra
  } else {
    alert("Compra não finalizada. Você pode continuar comprando.");
  }
}

// Função principal que dá fluxo ao programa, mostra a mensagem de boas vindas, entra no loop que continua até o usuário escolher sair
// Dentro do loop o usuário tem as opções adicionar produto, ver carrinho, finalizar compra e sair.
function iniciarCompra() {
  alert("Bem-vindo ao Carrinho de Compras Online!\nAqui você pode adicionar produtos, visualizar o carrinho e finalizar sua compra.");

  while (true) {
    const opcao = prompt(
      "Escolha uma opção:\n1. Adicionar produto\n2. Visualizar carrinho\n3. Finalizar compra\n4. Sair"
    );

    switch (opcao) {
      case "1":
        adicionarProduto();
        break;
      case "2":
        visualizarCarrinho();
        break;
      case "3":
        finalizarCompra();
        break;
      case "4":
        alert("Obrigado por usar nosso Carrinho de Compras Online!");
        return;
      default:
        alert("Opção inválida!");
    }
  }
}

// Iniciar o programa
iniciarCompra();