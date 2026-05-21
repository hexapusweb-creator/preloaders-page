import './assets/styles/main.scss'

function handleDisablePreloader(selector, time){
 setTimeout(() =>{
  const element = document.querySelector(selector);
  if(element){
   element.style.display = 'none';
  }
 }, time);
}

handleDisablePreloader('.preloader', 5000);