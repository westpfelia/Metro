<script type="text/javascript" src="main.js"></script>

var version = '.1';
console.log(version);

//resources
var vodka = 0;
var shrooms = 0;
var bullets = 0;
var pigs = 0;
var MGB = 5;
var bullets = 0;
var filters = 0;
let totalCitizens = 50;

//mushroomWOrkers count
let mushroomWorker = 0;
let pigWorkers = 0;

function mushroomSubtract() {
	if(mushroomWorker >= 1){
    mushroomWorker--;
    update();
} else {
return false;
}
}

function mushroomSubtract5() {
if (mushroomWorker >= 5){
    mushroomWorker = mushroomWorker - 5;
    update();
} else {
return false;
}
}

function mushroomAdd() {
    if (mushroomWorker < totalCitizens){
    mushroomWorker++;
    update();
} else {
    return false;
}
}

function mushroomAdd5() {
if (mushroomWorker <= totalCitizens - 5){
    mushroomWorker = mushroomWorker + 5;
    update();
}
}

function update() {
    document.getElementById("mushrooms").value = mushroomWorker;
}
update();


//pigsWorkers count

function pigsubtract() {
	if(pigWorkers >= 1){
    pigWorkers--;
    update();
} else {
return false;
}
}

function pigsubtract5() {
if (pigWorkers >= 5){
    pigWorkers = pigWorkers - 5;
    update();
} else {
return false;
}
}

function pigadd() {
    if (pigWorkers < totalCitizens){
    pigWorkers++;
    update();
} else {
    return false;
}
}

function pigadd5() {
if (pigWorkers <= totalCitizens - 5){
    pigWorkers = pigWorkers + 5;
    update();
}
}
function update() {
    document.getElementById("pigs").value = pigWorkers;
}
update();
