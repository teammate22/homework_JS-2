import './style.css'
//! задание 1
let shoppingList = [
  {name: 'apple', quantity: 12, isBought: true},
  {name: 'egg', quantity: 10, isBought: false},
  {name: 'tomato', quantity: 8, isBought: true},
]

function Show(){
  for(let i of shoppingList){
    if(!i.isBought){
      console.log(i)
    }
  }
  for(let i of shoppingList){
    if(i.isBought){
      console.log(i)
    }
  }
}

function Add(){
  let productName = prompt('Какой товар вы хотели бы купить?')
  let quantity = Number(prompt('Сколько штук вам нужно?'))
  let inList = false
  for(let i of shoppingList){
    if(i.name == productName){
      i.quantity += quantity
      inList = true
    }
  }
  if(!inList){
    shoppingList.push({name: productName, quantity: quantity, isBought: false})
  }
}

function Purchase(){
  let productName = prompt('Какой продукт вы купили?')
  for(let i of shoppingList){
    if(i.name == productName){
      i.isBought = true
    }
  }
}

// вывод в консоль
Show()
Add()
console.log('Был добавлен товар')
Show()
Purchase()
console.log('Товар был куплен')
Show()

//! задание 2


//! задание 3


//! задание 4