function giai_ptb1() {
    document.getElementById('phuongtrinh').innerHTML = 'ax + b = 0';
    document.getElementById('ptContent').style.display='block';
    document.getElementById('c').style.display='none';
}

function giai_ptb2() {
    document.getElementById('phuongtrinh').innerHTML = 'ax<sup>2</sup> + bx + c = 0'
    document.getElementById('ptContent').style.display='block';
    document.getElementById('c').style.display='block';
}

function closeForm(){
    document.getElementById('ptContent').style.display='none';
    document.getElementById('phuongtrinh').innerHTML = '';
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('result').innerHTML = '';
}

function pt_b1() {
    var a, b, x;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    if(!a || !b){
        alert('vui lòng nhập đầu vào a, b');
    } else{
        if (a == 0) {
            if (b == 0) {
                document.getElementById('result').innerHTML = 'PT có vô số nghiệm';
            }
            else {
                document.getElementById('result').innerHTML = 'PT vô nghiệm';
            }
    
        }
        else {
            x=b/a;
            document.getElementById('result').innerHTML = 'Nghiệm X = ' + x;
        }
    }
}


function pt_b2() {
    var a, b, c, d, x1, x2, x;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    if(!a || !b || !c){
        alert('vui lòng nhập đầu vào a, b, c');
    }else{
        if (a == 0) {
            if (b == 0) {
                if (c == 0) {
                    document.getElementById('result').innerHTML = 'PT có vô số nghiệm';
                } else {
                    document.getElementById('result').innerHTML = 'PT vô nghiệm';
                }
            }
            else {
                x=c/b;
                document.getElementById('result').innerHTML = 'Nghiệm X = ' + x;
            }
        }
        else {
            d = (b * b) - (4 * a * c);
            if (d < 0) {
                document.getElementById('result').innerHTML = "PT vô nghiệm";
            } else if (d = 0) {
                document.getElementById('result').innerHTML = "PT có nghiệm kép X = " + (-b/(2*a));
            } else {
                x1 = (-b + Math.sqrt(d))/(2*a);
                x2 = (-b - Math.sqrt(d))/(2*a)
                document.getElementById('result').innerHTML = "PT có nghiệm X1 =" + " " + x1 + " và X2 = " + " " + x2;
            }
        }
    }
    
}

function ptOption(){
    document.getElementById('c').style.display='none' ? pt_b1() : pt_b2();
}

