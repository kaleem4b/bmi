function bmi() {
    var height = parseFloat(document.getElementById("height").value)
    var weight = parseFloat(document.getElementById("weight").value)
    var bmi = weight/(height*height);
    var userBMI = document.getElementById("bmi_index")
    userBMI.textContent = bmi.toFixed(2);
}

function cm() {
    var cm = parseFloat(document.getElementById("cm").value)
    var cm = cm/3.281;
    var userM = document.getElementById("cm-to-m")
    userM.textContent = cm.toFixed(2);
}
