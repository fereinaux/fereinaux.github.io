const wishList = [
  {
    title: "Espremedor de Suco",
    value: 90
  },
  {
    title: "Sanduicheira",
    value: 80
  },
 {
    title: "Churrasqueira Elétrica",
    value: 170
  },
  {
    title: "Micro-Ondas",
    value: 480
  },
  {
    title: "Máquina de Lavar",
    value: 1200
  },
  {
    title: "Liquidificador",
    value: 160
  },
  {
    title: "Gelágua",
    value: 450
  },
  {
    title: "Rack Sala",
    value: 450
  },
  {
    title: "2 Jogos de Toalha",
    value: 160
  },
  {
    title: "Panos de prato",
    value: 30
  },
  {
    title: "Jogo de Pratos",
    value: 120
  },
  {
    title: "Jogo de Talheres",
    value: 50
  },
  {
    title: "Panela de Pressão",
    value: 100
  },
  {
    title: "Cuscuzeira",
    value: 40
  },
  {
    title: "Garrafa Térmica",
    value: 50
  },
  {
    title: "Cafeteira",
    value: 100
  },
  {
    title: "Kit 6 Jogos Americanos",
    value: 50 
  },
  {
    title: "Copos",
    value: 50
  },
  {
    title: "Conjunto de Tupperware",
    value: 40
  },
  {
    title: "Jogo de Pás e Vassouras",
    value: 50
  },
  {
    title: "Balde",
    value: 25
  },
  {
    title: "Cesto de Roupas",
    value: 50
  },
  {
    title: "Baldes de Lixo",
    value: 80
  },
  {
    title: "4 Jogos de Cama",
    value: 200
  },
  {
    title: "2 Colchas de Cama",
    value: 170
  },
]

let total = 0
let arrecadado = 150
let arrecadadoItens = arrecadado

$(wishList.sort((a,b) => a.value - b.value)).each((index, item) => {
  total += item.value
  concluido = false
  if (arrecadadoItens > item.value) {
    arrecadadoItens = arrecadadoItens - item.value
    concluido = true
  }
  $('ul').append(
    `<li class="item"> 
    ${ concluido ? '<i class="far fa-check-square done"></i>' : '<i class="far fa-square not-done"></i>'}
      <h4 class="title">${item.title}</h4>   
      <h4 class="value">${item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>       
    </li>`
  )
})

$('.total').text((total - arrecadado).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
$('.arrecadado').text(arrecadado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
