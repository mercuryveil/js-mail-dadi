var nomeUtente = prompt("Scrivi qui sotto la tua e-mail");
var eMail = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"];

for (var i = 0; i < eMail.length; i++) {
  var mail = eMail[i];

  if (nomeUtente==mail) {
    alert("E-mail riconosciuta")
  }
}
