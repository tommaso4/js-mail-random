var iscrtitti = ["luca@gmail.com", "paolo@gmail.com", "filippo@gmail.com", "edoardo@gmail.com", "federico@gmail.com", "sara@gmail.com"]

var mail = prompt("dammi la tua e-mail??");

var cerca = "non ti ho trovato";

for (var i = 0; i < iscrtitti.length; i++) {
  if (iscrtitti[i] == mail) {
    cerca = "ti ho trovato";
  }
}

if (cerca == "ti ho trovato") {
  alert("ti ho trovato!");
}
else {
  alert("non ti ho trovato");
}
