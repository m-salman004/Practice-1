// Alert Nmbers
document.getElementById("alertName").onclick = function() {
    var val = prompt("Enter Your Value")
    alert(val)
    orignalstmnt.innerHTML = "alert(" + "'" + val + "'" + ")";
    outputs.innerHTML = "Your Input Value is " + val;
}
// Show Variables
document.getElementById("showVariablename").onclick = function() {
    var varname = "<li>A variable can't contain any spaces.</li><li>A variable name contain only letters,numbers,dollor signs and underscores.</li><li>Though a variable name can't be any of javascript's keywords.It can keywords.</li>"
    outputs.style.textAlign = "left";
    outputs.style.paddingLeft = "50px";
    outputs.innerHTML = varname;
}
// Show CamleCase 
document.getElementById("ShowCamlcase").onclick = function() {
    var camlecase = "<li>userResponseTime</li><li>userResponseTimeLimit</li><li>user</li><li>userResponse</li>"
    outputs.style.textAlign = "left";
    outputs.style.paddingLeft = "50px";
    outputs.innerHTML = camlecase;
}
// Sum Of Two Numbers
document.getElementById("sumof2").onclick = function() {
    let num1 = 15;
    let num2 = 5;
    let sum = num1 + num2;
    orignalstmnt.innerHTML = "Let num1 = " + num1 + "<br>" + "Let num2 = " + num2 + "<br>" + "Let Sum =" + "num1 + num2";
    outputs.innerHTML = "Sum Of Two Numbers is " + sum;

}