function formula(x, y, z) {
  let otvet = Math.log10(
    Math.abs((y - Math.sqrt(Math.abs(x))) * (x - y / (z + Math.pow(x, 2) / 4)))
  );

  return otvet;
}

let s1 = "Я люблю Беларусь";
let s2 = "Я учусь в Политехе";
alert("Задание 5: длина 2 строки " + s2.length);
if (s1.indexOf("Минск") >= 0) {
  alert("Содержит");
} else {
    alert("Не содержит");
}
let symbol = s2[8];
alert(symbol.charCodeAt());

var code = navigator.appCodeName;
var name = navigator.appName;
var vers = navigator.appVersion;

var win = window.open(
  "",
  "",
  "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=800,top=" +
    (screen.height - 500) +
    ",left=" +
    (screen.width - 800)
);
win.document.title = "8 Kuzmenok Polina";
win.document.write(code, name, vers);
