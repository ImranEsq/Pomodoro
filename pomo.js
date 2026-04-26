let min = document.getElementById("minute");
let sec = document.getElementById("seconde");
let start = document.getElementById("start");
let timer; 
let time; 
let rd = document.getElementById("rd");
let enter = document.getElementById("enter");
let originalBox = document.querySelector(".timer");
let pause = document.getElementById("pause");
let pomo = document.getElementById("Pomodoro");
let short = document.getElementById("ShortBreak");
let long = document.getElementById("LongBreak");
let body = document.querySelector("body");
let change = document.getElementById("timeee");
let round = document.getElementById("round");
let sound = document.getElementById("sound");
let menu = document.getElementById("menu");
let navbar = document.querySelector(".nave");
let quitter = document.getElementById("close");
let text = document.querySelector(".txtt");
let popup1 = document.getElementById("popup1");
let count = 0; /*nbr de round*/
let click = new Audio();
click.src = "click.wav"
let page = new Audio("page.wav");
let startsong = new Audio("start.wav");
let finish = new Audio("finished.wav");
/* LES VARIABLES SONT ICI CE COM C POUR SEPARER */
   
 enter.addEventListener("click",function(){
    popup1.style.display ="none";
    navbar.style.display = "none";
    originalBox.style.display ="flex";
    /* whats gonna happen when u click so u collect the data */
   let dataM = document.getElementById("M");
   if (dataM.value != "0" + String(dataM.value)  && dataM.value <=9  && dataM.value >= 0 ) {
       min.textContent ="0" + dataM.value;
    sec.textContent = "00";
   }
   else  {
    min.textContent = dataM.value;
    sec.textContent = "00";
   }
   clearInterval(timer);
   timer = null;
   /* rd.style.animationDuration = `${dataM.value*60}s`; */
 })
quitter.addEventListener("click",function(){
      popup1.style.display ="none";
      navbar.style.display = "none";
     originalBox.style.display ="flex";
})
menu.addEventListener("click",function(){
    text.style.display ="none"
    navbar.style.display = "flex";
   })
   change.addEventListener("click",function(){
    popup1.style.display = "flex";
    originalBox.style.display = "none";
   })
change.addEventListener("mouseover", function(){
    round.style.backgroundColor = "transparent";
    sound.style.backgroundColor = "transparent";
    change.style.backgroundColor = "rgba(0, 0, 0, 0.039)";
})
change.addEventListener("mouseout", function(){
    round.style.backgroundColor = "transparent";
    sound.style.backgroundColor = "transparent";
    change.style.backgroundColor = "transparent";
})
sound.addEventListener("mouseout", function(){
    round.style.backgroundColor = "transparent";
    sound.style.backgroundColor = "transparent";
    change.style.backgroundColor = "transparent";
})
round.addEventListener("mouseout", function(){
    round.style.backgroundColor = "transparent";
    sound.style.backgroundColor = "transparent";
    change.style.backgroundColor = "transparent";
})

sound.addEventListener("mouseover", function(){
    round.style.backgroundColor = "transparent";
    change.style.backgroundColor = "transparent";
    sound.style.backgroundColor = "rgba(0, 0, 0, 0.039)";
})
round.addEventListener("mouseover", function(){
    sound.style.backgroundColor = "transparent";
    change.style.backgroundColor = "transparent";
    round.style.backgroundColor = "rgba(0, 0, 0, 0.039)";
})
/* only clicking stuff */

  
 function heure() {
    time--; 
    min.textContent = Math.floor(time/60);
    sec.textContent = time % 60; 
    if (time%60 < 10) {
        sec.textContent = "0"+time%60;
    }
    if (Math.floor(time/60) == 0 && time%60 == 0 && getComputedStyle(pomo).backgroundColor == "rgba(11, 10, 10, 0.2)" )  {
       clearInterval(timer); 
         timer = null; 
          pause.style.display = "none";
          start.style.display = "inline-block";
          finish.play();
    /* switching to short break */
    short.style.backgroundColor = "#0b0a0a33";
    pomo.style.backgroundColor = "transparent";
    long.style.backgroundColor = "transparent";
    body.style.backgroundColor ="#297479"
    min.textContent = "05";
    sec.textContent ="00";
    start.style.color = "#297479";
    pause.style.color ="#297479"
    page.play();
    clearInterval(timer);
    timer = null; 
     count++;
  
    }
    /* switching to pomo after short break */
    else if (Math.floor(time/60) == 0 && time%60 == 0 && getComputedStyle(short).backgroundColor == "rgba(11, 10, 10, 0.2)" && count < 2 ) {
    pomo.style.backgroundColor = "#0b0a0a33";
    long.style.backgroundColor = "transparent";
    short.style.backgroundColor = "transparent";
    body.style.backgroundColor ="#b04a4a";
    start.style.color ="#b04a4a";
    pause.style.color ="#b04a4a";
    start.style.display = "inline-block";
    pause.style.display = "none";
    page.play();
    clearInterval(timer);
    timer = null; 
     
    if (!timer) {
    min.textContent = "00";
    sec.textContent ="10";
    }
    }
    /* switching to long break !! */
    if (count == 4) {  
    long.style.backgroundColor = "#0b0a0a33";
    pomo.style.backgroundColor = "transparent";
    short.style.backgroundColor = "transparent";
    body.style.backgroundColor ="#2f6a94"
    min.textContent = "15";
    sec.textContent ="00";
    start.style.color ="#2f6a94";
    pause.style.color ="#2f6a94"
    page.play();
     clearInterval(timer);
    timer = null; 
    }
    
  
 }
start.addEventListener("click",function(){
    click.play();
    startsong.play();
    rd.classList.toggle("countt");
    rd.style.animationPlayState = "running";
    start.style.display = "none";
    pause.style.display = "inline-block";
    let minute = Number(min.textContent);
   let seconde = Number(sec.textContent); 
  time = minute*60 + seconde;  
  rd.style.animationDuration = `${time}s`
  if (!timer){
    timer = setInterval(heure,1000); 
  }  
}
)
pause.addEventListener("click",function(){
    click.play();
    pause.style.display = "none";
    start.style.display = "inline-block";
    clearInterval(timer);
    timer = null; 
})
short.addEventListener("click",function(){
    short.style.backgroundColor = "#0b0a0a33";
    pomo.style.backgroundColor = "transparent";
    long.style.backgroundColor = "transparent";
    body.style.backgroundColor ="#297479"
    min.textContent = "00";
    sec.textContent ="10";
    start.style.color = "#297479";
    pause.style.color ="#297479"
    page.play();
    clearInterval(timer);
    timer = null; 
  
})
long.addEventListener("click",function(){
long.style.backgroundColor = "#0b0a0a33";
    pomo.style.backgroundColor = "transparent";
    short.style.backgroundColor = "transparent";
    body.style.backgroundColor ="#2f6a94"
    min.textContent = "15";
    sec.textContent ="00";
    start.style.color ="#2f6a94";
    pause.style.color ="#2f6a94"
    page.play();
     clearInterval(timer);
    timer = null; 
})
pomo.addEventListener("click",function(){
    pomo.style.backgroundColor = "#0b0a0a33";
     long.style.backgroundColor = "transparent";
    short.style.backgroundColor = "transparent";
    body.style.backgroundColor ="#b04a4a"
    if (!timer) {
              min.textContent = "00";
    sec.textContent ="10";
    }
   
     start.style.color ="#b04a4a";
    pause.style.color ="#b04a4a"
     page.play();
      clearInterval(timer);
    timer = null; 
})