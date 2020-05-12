const figfeet = 3.2808;
//bai 1 chuyển C sang độ F
function changeCtoF() {
    let c = +document.getElementById('c').value;
    let f = c * 9 / 5 + 32;
    document.getElementById('kq1').innerHTML = " Kết quả: " + c + " độ C = " + f + " độ F.";
}
//bài 2 Chuyển chiều dài m sang feet

function changeMtoFeet() {
    let m = +document.getElementById('m').value;
    let f = m * figfeet;
    if (m >= 0) {
        document.getElementById('kq2').innerHTML = " Kết quả: " + m + " m = " + f.toFixed(2) + " feets.";
    } else {
        document.getElementById('kq2').innerHTML = " Nhập lại độ dài m";
    }

}

//bài 3 tính diện tích hình vuông

function areaS() {
    let a = +document.getElementById('a').value;
    let s = a ** 2;
    if (a > 0) {
        document.getElementById('kq3').innerHTML = " Kết quả: Diện tích hình vuông cạnh a = " + a + " m là " + s.toFixed(2) + " m2";
    } else {
        document.getElementById('kq3').innerHTML = " Nhập lại cạnh a";
    }

}

//bài 4 tính diện tích hình chữ nhật
function areaRectangle() {
    let a = +document.getElementById('width').value;
    let b = +document.getElementById('height').value;
    if ((a < 0) || (b < 0)) {
        document.getElementById('kq4').innerHTML = " Nhập lại các cạnh hình chữ nhật";
    } else {
        let s = a * b;
        document.getElementById('kq4').innerHTML = " Diện tích hình chữ nhật là " + s + " m2";
    }
}

//bài 5 tính diện tích tam giác vuông biết 2 cạnh kề a,b
function areaTriangle() {
    let a = +document.getElementById('aTriangle').value;
    let b = +document.getElementById('bTriangle').value;
    if ((a < 0) || (b < 0)) {
        document.getElementById('kq5').innerHTML = " Nhập lại các cạnh của tam giác";
    } else {
        let s = a * b / 2;
        document.getElementById('kq5').innerHTML = " Diện tích tam giác là " + s.toFixed(2) + " m2";
    }
}
// bài 6 giải phương trình bậc 1
function equation1() {
    let a = +document.getElementById('x').value;
    let b = +document.getElementById('y').value;
    if (a === 0) {
        if (b === 0) {
            document.getElementById('kq6').innerHTML = "Phương trình vô số nghiệm";
        } else {
            document.getElementById('kq6').innerHTML = "Phương trình vô nghiệm";
        }
    } else {
        let x = -b / a;
        document.getElementById('kq6').innerHTML = "Phương trình  có nghiệm là " + x.toFixed(2);
    }
}
//bài 7 giải phương trình bậc 2
function equation2() {
    let a = +document.getElementById('aEquation2').value;
    let b = +document.getElementById('bEquation2').value;
    let c = +document.getElementById('cEquation2').value;
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                document.getElementById('kq7').innerHTML = "Phương trình vô số nghiệm";
            } else {
                document.getElementById('kq7').innerHTML = "Phương trình vô nghiệm";
            }
        } else {
            let x = -c / b;
            document.getElementById('kq7').innerHTML = "Phương trình  có nghiệm là " + x.toFixed(2);
        }
    } else {
        let delta = b ** 2 - 4 * a * c;
        if (delta > 0) {
            let x1 = (-b - Math.sqrt(delta) / (2 * a));
            let x2 = (-b + Math.sqrt(delta) / (2 * a));
            document.getElementById('kq7').innerHTML = "Phương trình  có 2 nghiệm là " + x1.toFixed(2) + " và " + x2.toFixed(2);
        } else if (delta = 0) {
            let x = -b / (2 * a);
            document.getElementById('kq7').innerHTML = "Phương trình  có nghiệm kép là " + x.toFixed(2);
        } else {
            document.getElementById('kq7').innerHTML = "Phương trình vô nghiệm";
        }
    }
}
// bài 8 check tuổi của một người
function checkAge() {
    let age = +document.getElementById('age').value;
    if ((age < 0) || (age > 120)) {
        document.getElementById('kq8').innerHTML = "Đây không phải là tuổi của con người ";
    } else if (age > parseInt(age)) {
        document.getElementById('kq8').innerHTML = "Đây không phải là tuổi của con người ";
    } else {
        document.getElementById('kq8').innerHTML = "Đây là tuổi của con người. Người này " + age + " tuổi";
    }
}
//bài 9 kiểm tra 3 số a,b,c có phải là cạnh của một tam giác hay không
function checkSideTriangle() {
    let aSide = +document.getElementById('aSide').value;
    let bSide = +document.getElementById('bSide').value;
    let cSide = +document.getElementById('cSide').value;
    if ((aSide > 0) && (bSide > 0) && (cSide > 0) &&
        (aSide + bSide > cSide) && (aSide + cSide > bSide) && (bSide + cSide > aSide)) {
        document.getElementById('kq9').innerHTML = " Đây là 3 cạnh của tam giác";
    } else {
        document.getElementById('kq9').innerHTML = " Đây không phải là 3 cạnh của tam giác";
    }
}
//bài 10 : Viết chương trình tính giá điện
function getMoney() {
    let number = (+document.getElementById('new').value) - (+document.getElementById('old').value);
    let money = 1;
    if (number < 0) {
        document.getElementById('kq10').innerHTML = " Nhập lại số kWh";
    } else if (number < 100) {
        money = number * 1000;
        document.getElementById('kq10').innerHTML = " Số tiền tiền phải trả : " + money;
    } else if (number < 150) {
        money = (100 * 1000) + (number - 100) * 1200;
        document.getElementById('kq10').innerHTML = " Số tiền tiền phải trả : " + money;
    } else if (number < 200) {
        money = (100 * 1000) + (50 * 1200) + (number - 150) * 2000;
        document.getElementById('kq10').innerHTML = " Số tiền tiền phải trả : " + money;
    } else {
        money = (100 * 1000) + (50 * 1200) + (50 * 2000) + (number-200)*2500;
        document.getElementById('kq10').innerHTML = " Số tiền tiền phải trả : " + money;
    }
}
// bài 11 tính thuế thu nhập cá nhân
function getMoney2(){
    let number = (+document.getElementById('ttn').value) - (+document.getElementById('tnmt').value);
    let thue =1;
    if (number<0) {
        document.getElementById('kq11').innerHTML = "Nhập lại số tiền";
    } else if ( number<5000000) {
        thue = number*5/100;
        document.getElementById('kq11').innerHTML = "Thuế TNCN phải trả là :" + thue + " VNĐ";
    } else if ( number<10000000) {
        thue = number*10/100 + 250000;
        document.getElementById('kq11').innerHTML = "Thuế TNCN phải trả là :" + thue + " VNĐ";
    }else if (number < 18000000) {
        thue = number*15/100 + 750000;
        document.getElementById('kq11').innerHTML = "Thuế TNCN phải trả là :" + thue + " VNĐ";
    }else if (number < 32000000) {
        thue = number*20/100 + 1950000;
        document.getElementById('kq11').innerHTML = "Thuế TNCN phải trả là :" + thue + " VNĐ";
    }else if (number < 52000000) {
        thue = number*25/100 + 4750000;
        document.getElementById('kq11').innerHTML = "Thuế TNCN phải trả là :" + thue + " VNĐ";
    } else if (number < 80000000) {
        thue = number*30/100 + 9750000;
        document.getElementById('kq11').innerHTML = "Thuế TNCN phải trả là :" + thue + " VNĐ";
    } else {
        thue = number*35/100 + 18150000;
        document.getElementById('kq11').innerHTML = "Thuế TNCN phải trả là :" + thue + " VNĐ";
    }
    
}
// bài 12 tính số lãi ngân hàng theo số tháng gửi

function getMoney3(){
    let moneyBank = +document.getElementById('moneyBank').value;
    let months = +document.getElementById('months').value;
    let rate = +document.getElementById('rate').value;
    for (let i=1;i<=months;i++){
        moneyBank = moneyBank + moneyBank*rate/100;
    }
    document.getElementById('kq12').innerHTML = " Số tiền lãi theo " + months + " tháng ký gửi là " + moneyBank + " VNĐ";
}