const linkActual = document.querySelector('#link-actual');
const linkCharts = document.querySelector('#link-charts');
const linkHistory = document.querySelector('#link-history');
const pageRates = document.querySelector('.page__rates');
const pageCharts = document.querySelector('.page__charts');
const pageHistory = document.querySelector('.page__history');
const pageContainer = document.querySelector('.page__container');

linkActual.addEventListener('click', function(){
    pageRates.style.display = 'block';
    pageCharts.style.display = 'none';
    pageHistory.style.display = 'none';

    linkActual.classList.add('_active');
    linkCharts.classList.remove('_active');
    linkHistory.classList.remove('_active');
})

linkCharts.addEventListener('click',function(){
    pageCharts.style.display = 'block';
    pageRates.style.display = 'none';
    pageHistory.style.display = 'none';

    linkCharts.classList.add('_active');
    linkActual.classList.remove('_active');
    linkHistory.classList.remove('_active');
})

linkHistory.addEventListener('click', function(){
    pageHistory.style.display = 'block';
    pageCharts.style.display = 'none';
    pageRates.style.display = 'none';

    linkHistory.classList.toggle('_active');
    linkActual.classList.remove('_active');
    linkCharts.classList.remove('_active');
})

