function aduna() {
  var timp = new Date();
  var ora = timp.getHours();
  var minut = timp.getMinutes();
  var secondi = timp.getSeconds();
  var sesion = "AM";

  if (ora == 0) {
    ora = 12;
  } else if (ora > 12) {
    ora = ora - 12;
    sesion = "PM";
  }

  var a = document.getElementById("ora");
  a.textContent = ora + " : ";

  var b = document.getElementById("minut");
  b.textContent = " " + minut + " : ";

  var c = document.getElementById("secunda");
  c.textContent = " " + secondi + " " + sesion;

  setTimeout(aduna, 1000);
}
aduna();