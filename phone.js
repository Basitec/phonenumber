let inputnumber = document.querySelector("#number");
let b = document.querySelector("b");
let button = document.querySelector("button");
button.addEventListener("click", function () {
    if ((inputnumber.value).startsWith("0706") ||(inputnumber.value).startsWith("0703")||(inputnumber.value).startsWith("0803")||(inputnumber.value).startsWith("0806")||(inputnumber.value).startsWith("0810")||(inputnumber.value).startsWith("0813")||(inputnumber.value).startsWith("0814")||(inputnumber.value).startsWith("0903")||(inputnumber.value).startsWith("0906")|| (inputnumber.value).startsWith("0913")||(inputnumber.value).startsWith("0916") || (inputnumber.value).startsWith("0816") ) {
        b.innerHTML=inputnumber.value+"  is a mtn number"
    }
    else if ((inputnumber.value).startsWith("0701")|| (inputnumber.value).startsWith("0708") || (inputnumber.value).startsWith("0802")|| (inputnumber.value).startsWith("0808") || (inputnumber.value).startsWith("0812")|| (inputnumber.value).startsWith("0901") || (inputnumber.value).startsWith("0902") || (inputnumber.value).startsWith("0904") || (inputnumber.value).startsWith("0907") || (inputnumber.value).startsWith("0912") || (inputnumber.value).startsWith("0911")) {
        b.innerHTML=inputnumber.value+"  is an airtel number"
    }
    else if ((inputnumber.value).startsWith("0809")|| (inputnumber.value).startsWith("0817") || (inputnumber.value).startsWith("0818") || (inputnumber.value).startsWith("0909") || (inputnumber.value).startsWith("0908")) {
        b.innerHTML=inputnumber.value+"  is a 9mobile number"
    }
    else if ((inputnumber.value).startsWith("0705")|| (inputnumber.value).startsWith("0805") || (inputnumber.value).startsWith("0807") || (inputnumber.value).startsWith("0811") || (inputnumber.value).startsWith("0815") || (inputnumber.value).startsWith("0905") || (inputnumber.value).startsWith("0915")) {
        b.innerHTML=inputnumber.value+"  is a glo number"
    }
})