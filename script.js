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