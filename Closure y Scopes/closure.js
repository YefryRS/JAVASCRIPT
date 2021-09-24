/* Los closures nos permiten recordar valores anteriores */
/* En el siguiente ejemplo deseamos crear una cuenta de ahorro, en este primer caso, los valores no son guardados por tanto no nos sirve para lo que deseamos */

function moneyBox (coins) {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`)
}

moneyBox(5);
moneyBox(10);

/* Ahora si realizaremos un closure */

function moneyBox () {
    var saveCoins = 0;
    function countCoins (coins) {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);