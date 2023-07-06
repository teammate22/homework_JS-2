import './style.css'
//! задание 1

function StringStat(){
  let input = (document.getElementById('input1') as HTMLInputElement).value
  let arr = input.split('')
  let num = 0
  let str = 0
  let other = 0
  for (let i of arr) {
    if (!isNaN(parseInt(i))) {
      num++;
    } else if (isNaN(parseInt(i)) && /^[a-zA-Zа-яА-Я]$/.test(i)) {
      str++;
    } else {
      other++;
    }
  }
  console.log(`В строке ${num} цифр, ${str} букв и ${other} других знаков`)
}

addEventListener('input', StringStat)

//! задание 2
console.log('--Task 2--')

function NumToStr(num: number){
  let arr = num.toString().split('')
  let str = ''
  let str2 = ''
  switch(arr[1]){
    case '1': str = 'один';
    break;
    case '2': str = 'два';
    break;
    case '3': str = 'три';
    break;
    case '4': str = 'четыре';
    break;
    case '5': str = 'пять';
    break;
    case '6': str = 'шесть';
    break;
    case '7': str = 'семь';
    break;
    case '8': str = 'восемь';
    break;
    case '9': str = 'девять';
    break;
  }
  switch(arr[0]){
    case '1':
      if(str == '') str = 'десять';
      if(str == 'один') str = 'одиннадцать';
      if(str == 'два') str = 'двенадцать';
      if(str == 'три') str = 'тринадцать';
      if(str == 'четыре') str = 'четырнадцать';
      if(str == 'пять') str = 'пятнадцать';
      if(str == 'шесть') str = 'шестнадцать';
      if(str == 'семь') str = 'семнадцать';
      if(str == 'восемь') str = 'восемнадцать';
      if(str == 'девять') str = 'девятнадцать';
    break;
    case '2': str2 = 'двадцать ';
    break;
    case '3': str2 = 'тридцать ';
    break;
    case '4': str2 = 'сорок ';
    break;
    case '5': str2 = 'пятьдесят ';
    break;
    case '6': str2 = 'шестьдесят ';
    break;
    case '7': str2 = 'семьдесят ';
    break;
    case '8': str2 = 'восемьдесят ';
    break;
    case '9': str2 = 'девяносто ';
    break;
  }
  console.log(str2 + str)
}

// вывод в консоль
NumToStr(67)

//! задание 3
console.log('--Task 3--')

function ActionsWithString(str: string){ 
  let normalString = ''
  for(let i of str){
    if(i == i.toLowerCase() && isNaN(+i)){
      normalString += i.toUpperCase()
    }
    if(i == i.toUpperCase() && isNaN(+i)){
      normalString += i.toLowerCase()
    }
    if(!isNaN(+i)){
      normalString += '_'
    }
  }
  console.log(normalString)
}

// вывод в консоль
ActionsWithString('tHIS4sTRING1cONTAINS7nUMBERS3aND5lETTERS')

//! задание 4
console.log('--Task 4--')
function CamelCase(str: string) {
  //* one line solution
  console.log(str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''))
}

// вывод в консоль
CamelCase('border-radius')

//! задание 5
console.log('--Task 5--')

function Abbreviation(str: string){
  let arr = str.split(' ')
  let newStr = ''
  for(let i of arr){
    newStr += i[0].toUpperCase()
  }
  console.log(newStr)
}

// вывод в консоль
Abbreviation('неопознанный летающий объект')

//! задание 6
console.log('--Task 6--')

function Concatenate(){
  let args = Array.prototype.slice.call(arguments, 1);
  console.log(args.join(', '))
}

// вывод в консоль
// @ts-ignore
Concatenate(',', 'red', 'orange', 'black', 'yellow')

//! задание 7
console.log('--Task 7--')

function Calculate(str: string){
  let arr = str.split(' ')
  switch(arr[1]) {
    case '+': console.log(+arr[0] + +arr[2])
    break;
    case '-': console.log(+arr[0] - +arr[2])
    break;
    case '*': console.log(+arr[0] * +arr[2])
    break;
    case '/': console.log(+arr[0] / +arr[2])
    break;
  }
}

// вывод в консоль
Calculate('5 * 3')

//! задание 8
console.log('--Task 8--')

function UrlInformation(url: string){
  let protocol = url.split('://')[0]
  let domain = url.split('://')[1].split('/')[0]
  let path = url.split('://')[1].split('/').slice(1).join('/')
  console.log(`  протокол: ${protocol}
  домен: ${domain}
  путь: /${path}`)
}

// вывод в консоль
UrlInformation('https://journal.top-academy.ru/ru/main/dashboard/page/index')

//! задание 9
console.log('--Task 9--')

function SplitStr(str: string, separator: string) {
  let arr = [];
  let startIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      arr.push(str.substring(startIndex, i));
      startIndex = i + 1;
    }
  }

  arr.push(str.substring(startIndex));
  console.log(arr);
}

// вывод в консоль
SplitStr('i am web-developer', ' ')

//! задание 10
console.log('--Task 10--')

function Print(template: string, ...values: any){
  let result = template;

  for (let i = 0; i < values.length; i++) {
    const placeholder = `%${i + 1}`;
    const value = values[i];
    result = result.replace(placeholder, value);
  }
  console.log(result);
}

// вывод в консоль
Print('Hello! %1 %2 %3 %4', 'My', 'name', 'is', 'Timothy')

console.log('--Task 1-- (type something in input)')