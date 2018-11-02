< script type = "text/javascript"
src = "main.js" > < /script>

var version = '.1';
console.log(version);

//resources
var vodka = 1;
var shrooms = 0;
var bullets = 0;
var pigs = 0;
var MGB = 5;
var bullets = 0;
var filters = 0;
let totalCitizens = 50;
let mushroomTea = 0;

//mushroomWOrkers count
let mushroomWorker = 0;
let pigWorkers = 0;
let teaWorkers = 0;

function mushroomSubtract() {
  if (mushroomWorker >= 1) {
    mushroomWorker--;
    updateMushroom();
  } else {
    return false;
  }
}

function mushroomSubtract5() {
  if (mushroomWorker >= 5) {
    mushroomWorker = mushroomWorker - 5;
    updateMushroom();
  } else {
    return false;
  }
}

function mushroomAdd() {
  if (mushroomWorker < totalCitizens) {
    mushroomWorker++;
    updateMushroom();
  } else {
    return false;
  }
}

function mushroomAdd5() {
  if (mushroomWorker <= totalCitizens - 5) {
    mushroomWorker = mushroomWorker + 5;
    updateMushroom();
  }
}

function updateMushroom() {
  document.getElementById("mushrooms").value = mushroomWorker;
}
updateMushroom();


//pigsWorkers count

function pigSubtract() {
	if(pigWorkers >= 1){
    pigWorkers--;
    updatePig();
} else {
return false;
}
}
function pigSubtract5() {
  if (pigWorkers >= 5) {
    pigWorkers = pigWorkers - 5;
    updatePig();
  } else {
    return false;
  }
}

function pigAdd() {
  if (pigWorkers < totalCitizens) {
    pigWorkers++;
    updatePig();
  } else {
    return false;
  }
}

function pigAdd5() {
  if (pigWorkers <= totalCitizens - 5) {
    pigWorkers = pigWorkers + 5;
    updatePig();
  }
}

function updatePig() {
  document.getElementById("pigs").value = pigWorkers;
}
updatePig();

function makeTea() {
  if (teaWorkers > totalCitizens) {
    teaWorkers++;
    updateTea();
  } else {
    return false;
  }
}

function updateTea (){
  document.getElementById("mushroom tea").value = teaWorkers;
}
