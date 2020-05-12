function myFunc() {
    var inputCelsius = Number(document.getElementById("inputValue").value); 
    // console.log(inputCelsius);
    if(!Boolean(inputCelsius) || inputCelsius == null){
        return document.getElementById('result').innerHTML = "Algo haces mal.";
    }else{
        return document.getElementById('result').innerHTML = toFahrenheit(inputCelsius);
    }
}

function toFahrenheit(celsius) {
    //Formula (0°C × 9/5) + 32 = 32°F
    return (celsius * 9 / 5) + 32
}
