// Alert Nmbers
document.getElementById("alertName").onclick = function() {
    var val = prompt("Enter Your Value")
    alert(val)
    orignalstmnt.innerHTML = "alert(" + "'" + val + "'" + ")";
    outputs.innerHTML = "Your Input Value is " + val;
}
