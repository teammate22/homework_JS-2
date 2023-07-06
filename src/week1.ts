import './style.css'
//! задание 1
console.log('--Task 1--')

const auto = {
  manufacturer: "Tesla",
  model: "model x",
  release: 2015,
  speed: 200,
  logInfo(){
    console.log(this.manufacturer, this.model, this.release, this.speed)
  },
  timeCount(way: number){
    let time = Math.floor(way/this.speed)
    time += Math.floor(time/4)
    console.log(`Вы доедете за ${time} часов`)
  },
}

// вывод в консоль
auto.logInfo()
auto.timeCount(1000)

//! задание 2
console.log('--Task 2--')

class Fraction {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
}

function Sum(fraction1: Fraction, fraction2: Fraction){
  let fractionSum = {
    numerator: fraction1.numerator + fraction2.numerator,
    denominator: fraction1.denominator,
  }
  return fractionSum
}

function Subst(fraction1: Fraction, fraction2: Fraction){
  let fractionSub = {
    numerator: fraction1.numerator - fraction2.numerator,
    denominator: fraction1.denominator,
  }
  return fractionSub
}

function Mult(fraction1: Fraction, fraction2: Fraction){
  let fractionMult = {
    numerator: fraction1.numerator * fraction2.numerator,
    denominator: fraction1.denominator * fraction2.denominator,
  }
  return fractionMult
}

function Div(fraction1: Fraction, fraction2: Fraction){
  let fractionDiv = {
    numerator: fraction1.numerator * fraction2.denominator,
    denominator: fraction1.denominator * fraction2.numerator,
  }
  return fractionDiv
}

function Cut(fraction: Fraction){
  let multiplier = 0
  for(let i = 2; i < 100; i++) {
    if(fraction.numerator % i == 0 && fraction.denominator % i == 0) {
      multiplier = i
    }
  }
  let fractionCut: Fraction = {
    numerator: fraction.numerator / multiplier,
    denominator: fraction.denominator / multiplier,
  }
  return fractionCut
}

// вывод в консоль
console.log(Sum(new Fraction(2, 5), new Fraction(7, 5)))
console.log(Subst(new Fraction(5, 2), new Fraction(3, 2)))
console.log(Mult(new Fraction(7, 3), new Fraction(2, 4)))
console.log(Div(new Fraction(9, 7), new Fraction(8, 4)))
console.log(Cut(new Fraction(18, 6)))

//! задание 3
console.log('--Task 3--')

const time = {
  second: 15,
  minute: 10,
  hour: 12,
  Show(){
    console.log(`${this.hour}:${this.minute}:${this.second}`)
  },
  addSec(num: number){
    this.second += num
    time.Show()
  },
  addMin(num: number){
    this.minute += num
    time.Show()
  },
  addHour(num: number){
    this.hour += num
    time.Show()
  },
}

// вывод в консоль
time.Show()
time.addHour(2)
time.addMin(25)
time.addSec(40)