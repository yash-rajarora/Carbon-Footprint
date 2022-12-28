var res = document.getElementById('result');
            var res2 = document.getElementById("result2");
            var res3 = document.getElementById("result3");
            var res4 = document.getElementById("result4");
            var mpg = document.getElementById('mpg');
            var dist = document.getElementById('dist');
            
            function calcCO2() {
                var x = mpg.value;
                var y = dist.value;
                var calc = (y/x)*2680;
                var tree = (calc*0.000045)
            
                calc = calc.toFixed(2);
                tree = tree.toFixed(0);
                res.innerHTML = calc;
                res2.innerHTML = tree;
            }