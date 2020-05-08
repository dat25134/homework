function bmi(){
    let weight=+document.getElementById('weight').value;
    let height=+document.getElementById('height').value;
    let bmi= weight/height;
    if (bmi<18){
        document.getElementById('kq').innerHTML='Chỉ số BMI của bạn là ' + bmi +' chỉ số này thuộc Underweight';
    } else if (bmi<25){
        document.getElementById('kq').innerHTML='Chỉ số BMI của bạn là ' + bmi +' chỉ số này thuộc Normal';
    }else if (bmi<30){
        document.getElementById('kq').innerHTML='Chỉ số BMI của bạn là ' + bmi +' chỉ số này thuộc Overweight';
    }else {document.getElementById('kq').innerHTML='Chỉ số BMI của bạn là ' + bmi +' chỉ số này thuộc Obese';}
   
}

