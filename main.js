let water = 15.687
let oil = 123.965
let butter = 90.2345

//

let max = Math.max(water, oil, butter)
console.log(max);
let min = Math.min(water, oil, butter)
console.log(min);

//сума всіх товарів
let sum = water + oil + butter
console.log(sum);

//округлення суми всіх товарів в меншу сторону
let roundedNum = Math.floor(water) + Math.floor(butter) + Math.floor(oil);
console.log(roundedNum);
 
function even(){
   Math.floor(sum) = new Boolean(false);
    if (Math.floor(sum) % 2 == 0) {
    his code is executed
    }
let x = Boolean();
if (Math.floor(sum) % 2 ==0) {
    x = false
}
else {
    x = true
}
}
console.log(even(x))
//округлення до сотень
let roundNum = Math.round((sum) / 100) * 100
console.log(roundNum);

//сума решти
let payment = 500;
let result = payment - sum;
console.log(result);

//середнє значення цін
let averageSum = sum/3;
let averagePrice = averageSum.toFixed(2);
console.log(averagePrice);

//випадкова знижка
let randomSale = Math.floor(Math.random() * 100);
console.log(randomSale);

//сума до сплати з випадковою знижкою
let salePrice = sum - ((sum * randomSale) / 100);
console.log(salePrice.toFixed(2));

//чистий прибуток
let cost = (Math.floor(sum)) / 2;
let netProfit = cost - ((Math.floor(sum) * randomSale)/100)
console.log(netProfit.toFixed(2));


const myString = `Максимальна ціна: ${max} \nМінімальна ціна: ${min} \nВартість всіх товарів: ${sum} \nОкруглення суми всіх товарів в меншу сторону: ${roundedNum}
Округлення до сотих: ${roundNum} \nСума решти: ${result} \nСереднє значення цін: ${averagePrice} \nВипадкова знижка: ${randomSale}
Сума до сплати з випадковою знижкою: ${salePrice} \nЧистий прибуток: ${netProfit}`
console.log(myString);