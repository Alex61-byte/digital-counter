var secondsElm = document.getElementById('seconds');
var minutesElm = document.getElementById('minute');
var hourElm = document.getElementById('hour');
var hourCount = 0;
var minuteCount = 0;
var secondsCount = 0;

// functie mama care va fi apelata de alte functii
function startCounter() {
  secondsCount = secondsCount + 1;

  if (minuteCount === 59) {

    hourCount = hourCount + 1;
    minuteCount = 0;
    hourElm.innerText = hourCount < 10 ? "0" + hourCount : hourCount;


  }
  if (secondsCount === 60) {
    secondsCount = 0;
    minuteCount++;

    minutesElm.innerText =
      minuteCount < 10 ? "0" + minuteCount : minuteCount;
  }

  secondsElm.innerText = secondsCount < 10 ? "0" + secondsCount : secondsCount



}
// definim o variabila care va lua valoarea de setInterval pentru functia mama
function toStart() {
  time = setInterval('startCounter()', 1000);
  
}
// anulam cu clear interval  set interval pentru functia mama cu ajutorul unei variabile
function toStop() {
  clearInterval(time);
 
}
// functia save va crea un div care va lua valorile din paragarful care afiseaza counterul  
function save() {

  var pResult = document.createElement('div');
  pResult.setAttribute("class", "saved");
  pResult.innerHTML = document.getElementById('counter').innerText;
  var savedResultContainer = document.querySelector(".savedResults");
  savedResultContainer.append(pResult);



}


// aducem variabilele la valoarea initiala adica la 0 si rearanjam elementele pentru secunde minute si ore
function reset() {
  
  hourCount = 0;
  minuteCount = 0;
  secondsCount = 0;
  hourElm.innerText = "0" + hourCount;
  minutesElm.innerText = "0" + minuteCount;
  secondsElm.innerText = "0" + secondsCount;

  
}