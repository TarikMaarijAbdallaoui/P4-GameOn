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
const prenom = document.getElementById("first");

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


function validate() {
  var errorVerif = false;
  var regex1 = /^[A-Za-z]+$/;

  if ((prenom.value === '') || (prenom.value.length < 2)
    || (!prenom.value.match(regex1))) {
    document.getElementById("prenom_error").innerHTML = 'Veuillez entrer au moins 2 caractères valables.';
    prenom.focus();
    prenom.style.border = '2px solid #fe142f';

    errorVerif = true;
  } else {
    document.getElementById("prenom_error").innerHTML = '';
    prenom.style.border = '0px solid red';
  }
}