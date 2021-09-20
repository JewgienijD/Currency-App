const chooseCodeForm = document.querySelector('.page__rates_form');
const getRatesBtn = document.querySelector('.page__rates_get-rates');
const tableDate = document.querySelector('#table-date');
const tableCurrency = document.querySelector('#table-currency');
const tableBid = document.querySelector('#table-bid');
const tableAsk = document.querySelector('#table-ask');
let code;

getRatesBtn.addEventListener('click', function(){
    getCleanTable();
    getDataInTable();
})

function getDataInTable(){
    getCodeFromRadio();
    fetch(`https://api.nbp.pl/api/exchangerates/rates/c/${code}/today/?format=json`, {mode:'cors'} )
      .then(response => response.json())
      .then(function(response){
         tableDate.innerHTML = response.rates[0].effectiveDate; 
         tableCurrency.innerHTML = response.code;
         tableBid.innerHTML = response.rates[0].bid;
         tableAsk.innerHTML = response.rates[0].ask;
      })
}

function getCodeFromRadio(){
    code = chooseCodeForm.elements["curr_code"].value;
}

function getCleanTable(){
    tableDate.innerHTML = '';
    tableCurrency.innerHTML = '';
    tableBid.innerHTML = '';
    tableAsk.innerHTML = '';
}







