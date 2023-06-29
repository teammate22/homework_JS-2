import './style.css'
//! задание 1
console.log('Task 1')

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

function Add(productName: string, quantity: number){
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

function Purchase(productName: string){
  for(let i of shoppingList){
    if(i.name == productName){
      i.isBought = true
    }
  }
}

// вывод в консоль
Show()
Add('mango', 4)
console.log('Был добавлен товар')
Show()
Purchase('egg')
console.log('Товар был куплен')
Show()

//! задание 2
console.log('Task 2')

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
console.log('Task 3 (css)')

let css = [
  {name: 'font-size', value: '20px'},
  {name: 'color', value: 'blue'},
  {name: 'background-color', value: 'black'},
  {name: 'text-decoration', value: 'underline'},
  {name: 'width', value: '200px'},
  {name: 'border-radius', value: '10px'},
  {name: 'padding', value: '10px'},
  {name: 'font-family', value: 'sans-serif'},
  {name: 'cursor', value: 'pointer'},
  {name: 'border', value: '2px solid violet'},
]
let p = document.getElementById('mainP')
let style = document.getElementById('style')

function useStyle(text: string){
  p.innerHTML = `${text}`
  style.innerHTML = `#mainP{
    `
  for(let i of css){
    style.innerHTML += `${i.name}: ${i.value};
    `
  }
  style.innerHTML += `}`
}

// вывод в консоль
useStyle('I wrote styles for this element using type script')

//! задание 4
console.log('Task 4')

let classrooms = [
  {name: 'yandex', seats: 15, faculty: 'web design'},
  {name: 'apple', seats: 17, faculty: 'web development'},
  {name: 'whatsapp', seats: 12, faculty: 'web design'},
  {name: 'youtube', seats: 20, faculty: 'web development'},
  {name: 'google', seats: 16, faculty: 'web development'},
]
let group = [
  {name: 'design22', quantity: 15, faculty: 'web design'},
  {name: 'web22-1', quantity: 17, faculty: 'web development'},
  {name: 'web22-2', quantity: 14, faculty: 'web development'},
]

function ShowClassrooms(){
  for(let i of classrooms){
    console.log(i)
  }
}

function ShowByFaculty(faculty: string){
  for(let i of classrooms){
    if(i.faculty == faculty){
      console.log(i)
    }
  }
}

function FilterByGroup(groupName: string){
  let groupQuantity = 0
  let groupFaculty = ''
  for(let i of group){
    if(i.name == groupName){
      groupQuantity = i.quantity
      groupFaculty = i.faculty
    }
  }
  for(let i of classrooms){
    if(i.faculty == groupFaculty && i.seats >= groupQuantity){
      console.log(i)
    }
  }
}

function SortBySeats(){
  let arr = [...classrooms]
  let sort = arr.sort((a, b) => a.seats > b.seats ? 1 : -1)
  console.log(sort)
}

function SortByName(){
  let arr = [...classrooms]
  let sort = arr.sort((a, b) => a.name > b.name ? 1 : -1)
  console.log(sort)
}

// вывод в консоль
ShowClassrooms()
console.log('Аудитория в которой преподают веб разработку')
ShowByFaculty('web development')
console.log('Какие аудитории подходят для группы web22-1')
FilterByGroup('web22-1')
console.log('Какие аудитории подходят для группы design22')
FilterByGroup('design22')
console.log('Сортировка аудиторий по количеству мест')
SortBySeats()
console.log('Сортировка аудиторий по алфавиту')
SortByName()