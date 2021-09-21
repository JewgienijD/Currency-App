import Chart from 'chart.js/auto';

const chartsPage = (function(){
 
  // get displayed chart after button click
  const displayChart = (function(){
    const showChartBtn = document.querySelector('.page__charts_show-charts');
    showChartBtn.addEventListener('click', getDatasForChart);
  })();
  
  // get datas from API
  function getDatasForChart(){
    const chartsCurrency = document.querySelector('#page__charts_currency');
    const chartsPeriod = document.querySelector('#page__charts_period');
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${chartsCurrency.value}/last/${chartsPeriod.value}/`, {mode:'cors'})
      .then(response => response.json())
      .then(function(response){
        const rates = getRatesArray(response.rates)
        const period = getPeriodArray(response.rates)
        getChart(rates, period, chartsCurrency.value)     
      });
  }
  
  //build chart
  function getChart(rates, period, currency){
    const ctx = document.getElementById('myChart').getContext('2d');
    
    //do data content check of the chart
    if (window.myLine !== undefined && window.myLine !== null) {
      window.myLine.destroy() 
    };

    window.myLine = new Chart(ctx, {
      type: 'line',
      data: {
        labels: period,
        datasets: [{
          label: `${currency}`,
          data: rates,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    })
  } 
  
  function getRatesArray(arr){
    const ratesArray = [];
    for(let i=0;i<arr.length; i++){
      ratesArray.push(arr[i].mid);
    }
    return ratesArray;
  }
  
  function getPeriodArray(arr){
    const periodArray = [];
    for(let i=0;i<arr.length; i++){
      periodArray.push(arr[i].effectiveDate);
    }
    return periodArray;
  }
  
})()




 

