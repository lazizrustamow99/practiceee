const hour = document.querySelector('.h'),
      min = document.querySelector('.m'),
      sec = document.querySelector('.s'),
      dhours = document.querySelector('.hours'),
      dminutes = document.querySelector('.minutes'),
      watchStart = document.querySelector('.stopwatch__btn'),
      watchHours = document.querySelector('.stopwatch__hours'),
      watchMinutes = document.querySelector('.stopwatch__minutes'),
      watchSeconds = document.querySelector('.stopwatch__seconds');
      
      

function clock() {
  // new Date(); beret vremya s kompa
  // getSeconds(); beret secundi
  // getMinutes(); beret minuti
  // getHours(); beret chasi
     let time = new Date(),
     second = time.getSeconds() * 6,
     minutes = time.getMinutes() * 6,
     hours = time.getHours() * 30;

     hour.style = `transform: rotate(${hours}deg)`;     
     min.style = `transform: rotate(${minutes}deg)`;     
     sec.style = `transform: rotate(${second}deg)`;     
     
     dhours.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
     dminutes.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
     
     setTimeout(() => clock(), 1000);
     


}   
clock();   

const links = document.querySelectorAll('.tabsItem'),
 tabs = document.querySelectorAll('.tabsContentItem');
 for (let i = 0; i < links.length; i++) {
   
  links[i].addEventListener('click',function() {
   
   for (let ix = 0; ix < links.length; ix++) {
     
     links[ix].classList.remove('active');
     tabs[ix].classList.remove('active');
   
   }
   tab(this, tabs[i])
  })
 }
 function tab(el,arr) {
   el.classList.add('active');
   arr.classList.add('active');
 }

 

 

 
 

// timer = setInterval(function () {
//   seconds = timeMinut % 60 // Получаем секунды
//   minutes = timeMinut / 60%60 // Получаем минуты
//   hour = timeMinut/60/60%60 // Получаем часы
//   // Условие если время закончилось то...
//   if (timeMinut <= 0) {
//       // Таймер удаляется
//       clearInterval(timer);
//       // Выводит сообщение что время закончилось
//       alert("Время закончилось");
//   } else { // Иначе
//       // Создаём строку с выводом времени
//       let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
//       // Выводим строку в блок для показа таймера
//       timerShow.innerHTML = strTimer;
//   }
//   --timeMinut; // Уменьшаем таймер
// }, 1000)