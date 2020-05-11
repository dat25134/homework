//Bai 1 a chi het cho b
function divideByAll(){
    let a=+document.getElementById('x').value;
    let b=+document.getElementById('y').value;
    if (a>b) { 
        if ((a%b)===0) { 
        document.getElementById('kq1').innerHTML= " Kết quả: a chia hết cho b"
    } else{ 
        document.getElementById('kq1').innerHTML= " Kết quả: a không chia hết cho b"
    }
}    
     else {  document.getElementById('kq1').innerHTML= " Nhập số a>b"}
}
//bài 2 Check tuổi vào lớp 10
function checkAge(){
    let a=+document.getElementById('age').value;
    if ((a<0) || (a>120)) {
        document.getElementById('kq2').innerHTML= "Nhập lại tuổi";
    } else if (a>=16) {
        document.getElementById('kq2').innerHTML= "Đủ tuổi vào lớp 10";
    } else {
        document.getElementById('kq2').innerHTML= "Không đủ tuổi vào lớp 10";
    }
}
//bài 3 check số nguyên lớn hơn 0
function checkInt(){
    let a= parseInt(document.getElementById('number').value);
    if (a>0) {
        document.getElementById('kq3').innerHTML= a + " là số lớn hơn 0";
    } else if (a===0) {
        document.getElementById('kq3').innerHTML= a + "= 0";
    } else {
        document.getElementById('kq3').innerHTML= a + " là số bé hơn 0";
    }
}
//bài 4 tìm max 3 số
function findMax(){
    let a= +document.getElementById('number1').value;
    let b= +document.getElementById('number2').value;
    let c= +document.getElementById('number3').value;
    let max=0;
    if (a>max) {max = a;}
    if (b>max) {max = b;}
    if (c>max) {max = c;}
    document.getElementById('kq4').innerHTML =  "Kết quả : " + max + " là số lớn nhất";
}
//bài 5 xếp hạng điểm
function rank(){
    let a= +document.getElementById('point').value;
    if ((a>100)|| (a<0) ) {
        document.getElementById('kq5').innerHTML= " Nhập lại số điểm từ 0-100";
    } else if (a>=75){
        document.getElementById('kq5').innerHTML= " Xếp loại A";
    } else if (a>=60){
        document.getElementById('kq5').innerHTML= " Xếp loại B";
    } else if (a>=45){
        document.getElementById('kq5').innerHTML= " Xếp loại C";
    } else if (a>=30){
        document.getElementById('kq5').innerHTML= " Xếp loại D";
    } else { 
        document.getElementById('kq5').innerHTML = " Xếp loại E";
    }
}
// bài 6 tính tiền lời ( hoa hồng) từ doanh thu.
function commission(){
    let a= +document.getElementById('doanhthu').value;
    let b= +document.getElementById('commission').value;
    if (a<0) {
        document.getElementById('kq6').innerHTML= "Nhập lại doanh thu";
    } else if ((b>100)|| (b<0)) {
        document.getElementById('kq6').innerHTML= "Nhập lại phần trăm hoa hồng";
    } else {
        let x = a*b/100;
        document.getElementById('kq6').innerHTML= "Tiền hoa hồng nhận được" + x + "VNĐ"; 
    }
}
//bài 7 tính số tiền điện
const cuocdt=3300;
 function getMoney(){
     let a= +document.getElementById('time').value;
     if (a<0) {
        document.getElementById('kq7').innerHTML= "Nhập lại số phút gọi đt";
     } else {
         let money= a* cuocdt;
         document.getElementById('kq7').innerHTML= "Số tiền đt phải trả " + money + " VNĐ";
     }
 }