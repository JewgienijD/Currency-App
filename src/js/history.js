
const historyPage = (function(){

    const displayedTable = (function(){
        const showRatesBtn = document.querySelector('.page__history_show-rates');
        showRatesBtn.addEventListener('click', function(){
          checkInputDate()
          getDatasFromApi()
        })
    })()

    function getDatasFromApi(){
        const currency = document.querySelector('#page__history_currency');
        const date = document.querySelector('#page__history_date');
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${currency.value}/${date.value}/`, {mode:'cors'})
          .then(response=>response.json())
          .then(response=>sendDatasToTable(response.rates[0].effectiveDate,response.currency,response.code,response.rates[0].mid))
    }
    
    function sendDatasToTable(date, curr, code, rate) {
        const historyDate = document.querySelector('#history_date');
        const historyCurr = document.querySelector('#history_currency');
        const historyCode = document.querySelector('#history_code');
        const historyRate = document.querySelector('#history_rate');
    
        historyDate.innerHTML = date;
        historyCurr.innerHTML = curr;
        historyCode.innerHTML = code;
        historyRate.innerHTML = rate;    
    }
    
    function checkInputDate(){
        const date = document.querySelector('#page__history_date');
        const currentDate = new Date().toISOString().split('T')[0];
        if(date.value>currentDate){
            alert('Please, choose the correct date');
        };
    }
    
    //show table with default datas 
    getDatasFromApi();
    
})()

