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
const submitModal = document.querySelector(".btn-submit");
const nom = document.getElementById("last");
const emailVerif = document.getElementById("email");
const birthVerit = document.getElementById("birthdate");
const tournoisVerif = document.getElementById("quantity");
const conditionVerif = document.getElementById("checkbox1");

// Les événements
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.addEventListener("click", exitModal);
submitModal.addEventListener("click", test); 

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
  var regex2 = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

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

  if ((nom.value === '') || (nom.value.length < 2)
    || (!nom.value.match(regex1))) {
    document.getElementById("nom_error").innerHTML = 'Veuillez entrer au moins 2 caractères valables.';
    nom.focus();
    nom.style.border = '2px solid #fe142f';

    errorVerif = true;
  } else {
    document.getElementById("nom_error").innerHTML = '';
    nom.style.border = '0px solid red';
  }

  if ((emailVerif.value == null) || (emailVerif.value == '')
    || (!emailVerif.value.match(regex2))) {
    document.getElementById("email_error").innerHTML = 'Veuillez entrer une adresse Email valable.';
    emailVerif.focus();
    emailVerif.style.border = '2px solid #fe142f';

    errorVerif = true;
  } else {
    document.getElementById("email_error").innerHTML = '';
    emailVerif.style.border = '0px solid red';
  }

  if ((birthVerit.value == '')) {
    document.getElementById("birrth_error").innerHTML = 'Veuillez entrer votre date de naissance.';
    birthVerit.focus();
    birthVerit.style.border = '2px solid #fe142f';

    errorVerif = true;
  } else {
    document.getElementById("birrth_error").innerHTML = '';
    birthVerit.style.border = '0px solid red';
  }

  if ((tournoisVerif.value == null) || (tournoisVerif.value == '')) {
    document.getElementById("tournois_error").innerHTML = 'Vous devez choisir une option.';
    tournoisVerif.focus();
    tournoisVerif.style.border = '2px solid #fe142f';

    errorVerif = true;
  } else {
    document.getElementById("tournois_error").innerHTML = '';
    tournoisVerif.style.border = '0px solid red';
  }

  if (!document.querySelector('input[name = "location"]:checked')) {
    document.getElementById("city_error").innerHTML = 'Vous devez choisir une option.';

    errorVerif = true;
  } else {
    document.getElementById("city_error").innerHTML = '';
  }
};

function test(event) {
  event.preventDefault();
  if (!validate()) {
    return false;
  } else {
    modalBodyModal.style.display = "none";
    salutation.style.display = "block";
  }

  if (!conditionVerif.checked) {
    document.getElementById("condition_error").innerHTML = 'Vous devez vérifier que vous acceptez les termes et conditions';

    errorVerif = true;
  } else {
    document.getElementById("condition_error").innerHTML = '';
  }
};
