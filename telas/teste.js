function tempc() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var resultado = celsius * 1.8 + 32;
    var resultadoFix = resultado.toFixed(2);
    document.getElementById("convertc").value = resultadoFix + "°F";
  }
  
  function tempf() {
    var farenheit = parseFloat(document.getElementById("farenheit").value);
    var resultado = (farenheit - 32) / 1.8;
    var resultadoFix = resultado.toFixed(2);
    document.getElementById("convertf").value = resultadoFix + "°C";
  }
  