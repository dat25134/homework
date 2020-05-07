function ave (){
    let a=document.getElementById('hoa').value ;
    let b=document.getElementById('ly').value ;
    let c=document.getElementById('toan').value ;
    if ((a<0) || (a>10) || (b<0) || (b>10) || (c<0) || (c>10))
        {
            document.getElementById('kq1').innerHTML= " Nhập lại số điểm";
        }
        else
        {
            let ave=(parseFloat(a)+parseFloat(b)+parseFloat(c))/3
            document.getElementById('kq1').innerHTML= " Điểm TB = " + ave ;
        }
}

function changeCtoF(){
    let c=document.getElementById('c').value ;
    let f=(9* parseFloat(c))/5+32;
    document.getElementById('kq2').innerHTML= "Kết quả :" + f + "F" ;
}

function calS(){
    let r=document.getElementById('r').value ;
    let S=parseFloat(r)*parseFloat(r)*3.14;
    let C=parseFloat(r)*2*3.14;
    document.getElementById('kq3').innerHTML= " Diện tích hình tròn: " + S + "cm" ;
    document.getElementById('kq4').innerHTML= " Chu vi hình tròn: " + C + "cm" ;
}