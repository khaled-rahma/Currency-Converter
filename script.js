const currencyfirstelement =document.getElementById("currency-first")
const worthfirstelement =document.getElementById("worth-first")
const currencysecondelement =document.getElementById("currency-second")
const worthsecondelement =document.getElementById("worth-second")
const exchangerateelement= document.getElementById("exchange-rate")
updaterate()
function updaterate(){
    fetch(`https://v6.exchangerate-api.com/v6/2841d4d6edba594da02f84d7/latest/${currencyfirstelement.value}`)
        .then((res)=>res.json()).then((data)=>{const rate =
            data.conversion_rates
            [currencysecondelement.value];
          exchangerateelement.innerText=
          `1 ${currencyfirstelement.value} = ${rate +" " +currencysecondelement.value}`;
          worthsecondelement.value=(worthfirstelement.value*rate).toFixed(2)

        })
}
currencyfirstelement.addEventListener("change",updaterate)
currencysecondelement.addEventListener("change",updaterate)
worthfirstelement.addEventListener("input",updaterate)
