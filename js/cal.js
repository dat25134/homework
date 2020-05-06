//javascript máy tính 1
function plus(){
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    let plus=parseFloat(a)+parseFloat(b);
    document.getElementById('kq1').innerHTML= "Result Division:" + plus;
}

function subtraction(){
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    let sub=parseFloat(a)-parseFloat(b);
    document.getElementById('kq1').innerHTML= "Result Division:" + sub;
}

function multiplication(){
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    let mul=parseFloat(a)*parseFloat(b);
    document.getElementById('kq1').innerHTML= "Result Division:" + mul;
}

function division(){
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    let div=parseFloat(a)/parseFloat(b);
    document.getElementById('kq1').innerHTML= "Result Division:" + div;
}
// javascript  của máy tính 2
let var1,var2,check;
function add(x){
	var x;
    let a=document.getElementById('scr').value;
    if (a==0) { document.getElementById('scr').value=""; }
    document.getElementById('scr').value+=x;
}
function del(){
	document.getElementById('scr').value="0";
}
function addition(){
	var1=document.getElementById('scr').value;
	document.getElementById('scr').value="0";	
	check=1;
}
function subtract(){
	var1=document.getElementById('scr').value;
	document.getElementById('scr').value="0";	
	check=2;
}

function multiply(){
	var1=document.getElementById('scr').value;
	document.getElementById('scr').value="0";	
	check=3;
}
function divide(){
	var1=document.getElementById('scr').value;
	document.getElementById('scr').value="0";	
	check=4;
}
function percent(){
	var1=document.getElementById('scr').value;
    var percent=parseFloat(var1)*100;	
	document.getElementById('scr').value=percent + "%";
}

function factorial(){
    let fact=1;
    var1=document.getElementById('scr').value;
    let n=parseFloat(var1);
    for (let i=1;i<=n;i++){ fact=fact*i;};
    document.getElementById('scr').value=fact;
}
function logarit(){
    var1=document.getElementById('scr').value;
    let n=parseFloat(var1);
    let log=Math.log(n);
    document.getElementById('scr').value=log;
}

function result()
	{	
		switch(check)
			{
				case 1:{
					var2=document.getElementById('scr').value;
					var plus=parseFloat(var1)+parseFloat(var2);
					document.getElementById('scr').value=plus;
					break;}
				case 2:{
					var2=document.getElementById('scr').value;
					var subtract=parseFloat(var1)-parseFloat(var2);
					document.getElementById('scr').value=subtract;
					break;}
				case 3:{
					var2=document.getElementById('scr').value;
					var mul=parseFloat(var1)*parseFloat(var2);
					document.getElementById('scr').value=mul;
					break;}
				case 4:{
					var2=document.getElementById('scr').value;
					var div=parseFloat(var1)/parseFloat(var2);
					document.getElementById('scr').value=div;
					break;}
				default:{
					document.getElementById('scr').value="Error!!!";
				}
			}
	
	}