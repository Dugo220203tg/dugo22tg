const icon1 = document.createElement('.riotbar-search-icon');
const icon2 = document.createElement('.riotbar-search-icon2');
icon1.addEventListener('click', function(){
  icon1.classList.toggle('active');
  icon2.classList.toggle('active');
})