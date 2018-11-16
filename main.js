//resources
var vodka = 1;
var bullets = 0;
var pigs = 0;
var MGB = 5;
var bullets = 0;
var filters = 0;
let mushroomTea = 0;
//resources
let totalCitizens = 50;
let assignedCitizens = 0;

//mushroomWOrkers count
let mushroomWorker = 0;
let pigWorkers = 0;
let teaWorkers = 0;
var shrooms = mushroomWorker * 2;


function mushroomSubtract() {
  if (mushroomWorker >= 1) {
    mushroomWorker--;
    assignedCitizens--;
    updateMushroom();
    updateAssignedCitizens();
  } else {
    return false;
  }
}

function mushroomSubtract5() {
  if (mushroomWorker >= 5) {
    mushroomWorker = mushroomWorker - 5;
    assignedCitizens = assignedCitizens - 5;
    updateMushroom();
    updateAssignedCitizens();
  } else {
    return false;
  }
}

function mushroomAdd() {
  if (mushroomWorker < totalCitizens) {
    mushroomWorker++;
    assignedCitizens++;
    updateMushroom();
    updateAssignedCitizens();
  } else {
    return false;
  }
}

function mushroomAdd5() {
  if (mushroomWorker <= totalCitizens - 5) {
    mushroomWorker = mushroomWorker + 5;
    assignedCitizens = assignedCitizens + 5;
    updateMushroom();
    updateAssignedCitizens();
  } else {
    return false;
  }

}

function updateMushroom() {
  document.getElementById("mushrooms").value = mushroomWorker;
}
updateMushroom();

function updateAsssignedCitizens() {
  document.getElementById("Assigned").innerHTML = assignedCitizens;
}
updateAssignedCitizens();


//pigsWorkers count

function pigSubtract() {
  if (pigWorkers >= 1) {
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
  } else {
  return false;
  }
}

function updatePig() {
  document.getElementById("pigs").value = pigWorkers;
}
updatePig();

function teaSubtract() {
  if (teaWorkers >= 1) {
    teaWorkers--;
    updateTea();
  } else {
    return false;
  }
}

function teaSubtract5() {
  if (teaWorkers >= 5) {
    teaWorkers = teaWorkers - 5;
    updateTea();
  } else {
    return false;
  }
}

function teaAdd() {
  if (teaWorkers < totalCitizens) {
    teaWorkers++;
    updateTea();
  } else {
    return false;
  }
}

function teaAdd5() {
  if (teaWorkers <= totalCitizens - 5) {
    teaWorkers = teaWorkers + 5;
    updateTea();
  } else {
  return false;
  }
}

function updateTea() {
  document.getElementById("mushroom tea").value = teaWorkers;
}
updateTea();
