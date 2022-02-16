function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// DOM Elements

// Les constantes
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModal = document.querySelector(".close");

// Les événements
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.addEventListener("click", exitModal);

// Les fonctions
function launchModal() {
  modalbg.style.display = "block";
  reserveModal.reset();
};

function exitModal() {
  modalbg.style.display = "none";
  reserveModal.submit();
};


function validate() {}