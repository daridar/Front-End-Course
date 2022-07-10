//let number = +prompt('Введіть число: ')
/*function getMaxDigit(number) {
    let largest = 0;
    while(number){
        let r = number % 10;
        largest = Math.max(r, largest)
        number = parseInt(number / 10);
    }
    console.log(largest);
}
let number = 12569
getMaxDigit(number)*/

/*let num = +prompt('Введіть суму зарплати:')
function tax(num){
    let salary = num -((num * 19.5) / 100);
    alert(`Ваша зарплата з урахуванням податків:` + salary)
}
tax(num)*/

/*let sum = +prompt('Введіть вашу суму для конвертації валют($ або UAH)')
let currency = prompt('Введіть вашу валюту', '$/UAH')
function convertCurrency(sum, currency){
    if(currency == '$'){
        let sumConvert = sum * 25 ;
        alert('Конвертуємо вашу суму з доларів в гривні - ' + ' ' + sumConvert+'UAH')
    }
    if(currency == 'UAH'){
        sumConvert = sum / 25;
        alert('Конвертуємо вашу суму з гривні в долари - ' + ' ' + sumConvert+'$')
    }
}
convertCurrency(sum, currency);*/

/*let lenPass = +prompt('Введіть бажану довжину вашого паролю: ');
function getRandomPassword(lenPass){
    if(lenPass > 1 && lenPass <= 8){
        let passwordsRan = Math.floor(Math.pow(10, lenPass-1) +Math.random() * (Math.pow(10, lenPass) - (Math.pow(10, lenPass - 1 ) - 1)))
        alert('Згенерований пароль: ' + passwordsRan)
    }
    else {
        passwordsRan = Math.floor(1000000 + Math.random() * 100000000 - 999999)
        alert('Згенерований пароль (може бути не більше 8 символів): ' + passwordsRan)
    }
}
getRandomPassword(lenPass)*/

/*let N = +prompt('Введіть початок діпазону')
let M = +prompt('Введіть кінець діапазону')
function getRandomNumber(N,M){
    let ranNumber = Math.floor(Math.random() * M-N+1) + N
    alert(ranNumber)
}
getRandomNumber(N,M)*/

/*let yourWord = prompt('Введіть ваше слово: ')
let subYourWord = prompt('Літера:')
function countLetter(yourWord, subYourWord){
    let subYourWordCount = 0;
    for(let i =0; i < yourWord.length; i++){
    if (yourWord.charAt(i) === subYourWord) {
        subYourWordCount +=1;
    }
}
    return alert('Кількість літери' + ' ' + subYourWord + ' ' + 'в слові' + ' ' + subYourWordCount);
}
countLetter(yourWord, subYourWord);*/

//let yourName = prompt('Введіть ім`я:');
/*let yourName = 'DIRKa'
function capitalLetter(yourName){
        let newYourName = yourName[0].toUpperCase() + yourName.slice(1).toLowerCase()
        console.log(newYourName)
}

capitalLetter(yourName)*/

function reverseStr(str) {
        return str.reverse().join("");
    }
    console.log(reverseStr("Привет мир!"));
    
let palindrom = prompt("Введіть палнідром: ")
function checkPalindrom(palindrom){
    let reverseStr = palindrom.split('').reverse().join('')
    if(palindrom == reverseStr){
        alert("Так! Це дійсно паліндром! :)")
    }
    else{
        alert("Ох, це не паліндром :(")
    }
}
checkPalindrom(palindrom)


function palindrome(str) {
    let check = '';
    for (let i = str.length - 1; i >= 0; --i) {
      check += str[i];
    }
    return str == check;
  }
  
console.log(palindrome('я несу гусеня'))