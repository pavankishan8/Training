function Converter() {
    let value = document.getElementById("num").value;
    let fValue = ((value * 9 / 5)) + 32;
    console.log(fValue)
    alert(" Farenheit is :" + fValue + "F");
}