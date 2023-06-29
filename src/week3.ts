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
console.log('Task 2')

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
console.log('Task 3')



//! задание 4
console.log('Task 4')



//! задание 5
console.log('Task 5')



//! задание 6
console.log('Task 6')



//! задание 7
console.log('Task 7')



//! задание 8
console.log('Task 8')



//! задание 9
console.log('Task 9')



//! задание 10
console.log('Task 10')

