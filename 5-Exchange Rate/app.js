const currency_one = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('currency-two');

const rateOne = document.getElementById('rate');
const swap = document.getElementById('swap');

calculate = () => {
    const currOne = currency_one.value;
    const currTwo = currencyTwo.value;
    console.log(currTwo)
    
    fetch(`https://v6.exchangerate-api.com/v6/7cc184335d6a3d6712bec7b1/latest/USD`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(currTwo)

            const rate = data.conversion_rates[currTwo];
            console.log(currTwo)

            rateOne.innerText  = `1 ${currOne} = ${rate} ${currTwo}`;
            amountTwo.value = (amountOne.value * rate).toFixed(2);
        });
}

currency_one.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});

calculate();