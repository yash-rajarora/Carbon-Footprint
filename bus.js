var res = document.getElementById('result');
var res2 = document.getElementById("result2");

var dist = document.getElementById('dist');

function calcCO2() {
    var y = dist.value;
    var calc = (y*133);
    var tree = (calc*0.000045)

    calc = calc.toFixed(2);
    tree = tree.toFixed(0);
    res.innerHTML = calc;
    res2.innerHTML = tree;
}