var dado1 = Math.floor(Math.random() * 6 ) + 1;
var dado2 = Math.floor(Math.random() * 6 ) + 1;

if (dado1 < dado2) {
  alert("ha vinto dado 2")
}

if (dado1 > dado2) {
  alert("ha vinto dado1")
}

if (dado1 == dado2) {
  alert("non ha vinto nessuno, pareggio")
}
