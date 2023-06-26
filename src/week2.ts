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
// Show()
// Add()
// console.log('Был добавлен товар')
// Show()
// Purchase()
// console.log('Товар был куплен')
// Show()

//! задание 2
let check = [
  {name: 'avocado', quantity: 2, price: 200},
  {name: 'milk', quantity: 3, price: 80},
  {name: 'chocolate', quantity: 1, price: 120},
]

function Print(){
  for(let i of check){
    console.log(i)
  }
}

function Cost(){
  let totalPrice = 0
  for(let i of check){
    totalPrice += i.price
  }
  console.log(`Стоимость покупки ${totalPrice} рублей`)
}

function maxPrice(){
  let max = 0
  let name = ''
  for(let i of check){
    if(i.price > max){
      max = i.price
      name = i.name
    }
  }
  console.log(`Самый дорогой товар - ${name} (${max} рублей)`)
}

function averageCost(){
  let sum = 0
  for(let i of check){
    sum += i.price
  }
  sum /= check.length
  console.log(`Средняя стоимость одного товара ${Math.round(sum)} рубля`) 
}

// вывод в консоль
Print()
Cost()
maxPrice()
averageCost()

//! задание 3


//! задание 4