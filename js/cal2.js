var var1,var2,kt;

function add(x){
	var x;
	document.getElementById('cal').value+=x;
}
function xoa(){
	document.getElementById('cal').value="";
}
function plus(){
	var1=document.getElementById('cal').value;
	document.getElementById('cal').value="";	
	kt=1;
}
function subtract(){
	var1=document.getElementById('cal').value;
	document.getElementById('cal').value="";	
	kt=2;
}
function multiply(){
	var1=document.getElementById('cal').value;
	document.getElementById('cal').value="";	
	kt=3;
}
function divide(){
	var1=document.getElementById('cal').value;
	document.getElementById('cal').value="";	
	kt=4;
}

function result()
	{	
		switch(kt)
			{
				case 1:{
					var2=document.getElementById('cal').value;
					var plus=parseFloat(var1)+parseFloat(var2);
					document.getElementById('cal').value=plus;
					break;}
				case 2:{
					var2=document.getElementById('cal').value;
					var subtract=parseFloat(var1)-parseFloat(var2);
					document.getElementById('cal').value=subtract;
					break;}
				case 3:{
					var2=document.getElementById('cal').value;
					var mul=parseFloat(var1)*parseFloat(var2);
					document.getElementById('cal').value=mul;
					break;}
				case 4:{
					var2=document.getElementById('cal').value;
					var div=parseFloat(var1)/parseFloat(var2);
					document.getElementById('cal').value=div;
					break;}
				default:{
					document.getElementById('cal').value="Error!!!";
				}
			}
	
	}