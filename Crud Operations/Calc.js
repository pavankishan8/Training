let res = 0.0 
let key =[];
function onAdd()
{
    const fValue =parseFloat(document.getElementById("firstValue").value)
    const svalue = parseFloat(document.getElementById("secondValue").value)
    res = fValue + svalue;
    key.push( document.getElementById("Key1").value)
    localStorage.setItem(key,res)
    document.getElementById("pDisplay").innerText = res
}
function onSub()
{       
    const fValue =parseFloat(document.getElementById("firstValue").value)
    const svalue = parseFloat(document.getElementById("secondValue").value)
    res = fValue - svalue;
    key.push( document.getElementById("Key1").value)
    localStorage.setItem(key,res)
    document.getElementById("pDisplay").innerText = res
}
function onMul()
{
    const fValue =parseFloat(document.getElementById("firstValue").value)
    const svalue = parseFloat(document.getElementById("secondValue").value)
    res = fValue * svalue;
    key.push( document.getElementById("Key1").value)
    localStorage.setItem(key,res)
   document.getElementById("pDisplay").innerText = res
}
function onDiv()
{
    const fValue =parseFloat(document.getElementById("firstValue").value)
    const svalue = parseFloat(document.getElementById("secondValue").value)
    res = fValue / svalue;
    key.push( document.getElementById("Key1").value)
    localStorage.setItem(key,res)
    document.getElementById("pDisplay").innerText = res
}
function onSqr()
{
    const fValue =parseFloat(document.getElementById("firstValue").value)
    const svalue = parseFloat(document.getElementById("secondValue").value)
    res = fValue * fValue;
    key.push( document.getElementById("Key1").value)
    localStorage.setItem(key,res)
    document.getElementById("pDisplay").innerText = res
}
function onSqrt()
{
    const fValue =parseFloat(document.getElementById("firstValue").value)
    const svalue = parseFloat(document.getElementById("secondValue").value)
    res = Math.sqrt(fValue)
    key.push( document.getElementById("Key1").value)
    localStorage.setItem(key,res)
    document.getElementById("pDisplay").innerText = res
}
function onRetrive()
{

    for (const i of key) {
        let obj = i;
        document.getElementById("retrieveData").innerText = localStorage.getItem(i)
    }
}
