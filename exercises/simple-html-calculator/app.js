sum.onclick = function addNums(){
    var field1=document.getElementById("num1").nodeValue;
    var field2=document.getElementById("num2").nodeValue;
    
    var result=parseFloat(field1) + parsefloat (field2);

    if(!isNaN(result)) {
        document.getElementById("answer").innerHTML="The answer is "+result;
    }
}

sum.addEventListener("click", sum);