const actualRatesPage = (function(){

    const getData = (function(){
        fetch(`https://api.nbp.pl/api/exchangerates/tables/a/`, {mode:'cors'})
          .then(response => response.json())
          .then(function(response){
            showTable(response[0].rates)
           })
    })()

    const getActualDate = (function(){
        const actualDate = document.querySelector('.page__rates_table-date');
        fetch(`https://api.nbp.pl/api/exchangerates/tables/a/`, {mode:'cors'})
          .then(response => response.json())
          .then(function(response){
            actualDate.innerHTML = response[0].effectiveDate;
           })
    })()
    
    function showTable(arr){
        const table = document.querySelector('.table__body');
        for(let i=0; i<=arr.length; i++){
            curr = document.createElement('tr');
    
            let tableCurrency = document.createElement('td');
            tableCurrency.innerHTML = arr[i].currency;
    
            let tableCode = document.createElement('td');
            tableCode.innerHTML = arr[i].code;
    
            let tableMid = document.createElement('td');
            tableMid.innerHTML = arr[i].mid;
    
            curr.appendChild(tableCurrency);
            curr.appendChild(tableCode);
            curr.appendChild(tableMid);
    
            table.appendChild(curr);
        }
    }

})();



