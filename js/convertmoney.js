function change(){
    let a=document.getElementById('m').value;
    let m=parseFloat(a);
    let Fcur=document.getElementById('country').value;
    let Tcur=document.getElementById('type').value;
    if ((Fcur=="a") && (Tcur=="1")) { 
        document.getElementById('kq').innerHTML="Vui lòng chọn lại nước hoặc loại tiền";
        document.getElementById('dv').innerHTML="VNĐ"}
    if ((Fcur=="b") && (Tcur=="1")) 
        { 
            let point=parseFloat(a)*23520;
            document.getElementById('kq').innerHTML="Result :" + point;
            document.getElementById('dv').innerHTML="$";}
    if ((Fcur=="c") && (Tcur=="1")) 
        { 
            let point=parseFloat(a)*719.69;
            document.getElementById('kq').innerHTML="Result :" + point;
            document.getElementById('dv').innerHTML="BAHT";}
    if ((Fcur=="d") && (Tcur=="1")) 
        { 
            let point=parseFloat(a)*2.68;
            document.getElementById('kq').innerHTML="Result :" + point;
            document.getElementById('dv').innerHTML="LAK";}
    if ((Fcur=="a") && (Tcur=="2")) 
        { 
            let point=parseFloat(a)/23520;
            document.getElementById('kq').innerHTML="Result :" + point;
            document.getElementById('dv').innerHTML="VNĐ";}
    if ((Fcur=="b") && (Tcur=="2")) 
        { 
            let point=parseFloat(a)/23520;
            document.getElementById('kq').innerHTML="Vui lòng chọn lại nước hoặc loại tiền";
            document.getElementById('dv').innerHTML="$";}
    if ((Fcur=="c") && (Tcur=="2")) 
        { 
            let point=parseFloat(a)*0.03;
            document.getElementById('kq').innerHTML="Result :" + point;
            document.getElementById('dv').innerHTML="BAHT";}
    if ((Fcur=="d") && (Tcur=="2")) 
            { 
                let point=parseFloat(a)*0.00011148;
                document.getElementById('kq').innerHTML="Result :" + point;
                document.getElementById('dv').innerHTML="LAK";}
    if ((Fcur=="a") && (Tcur=="3")) 
            { 
                let point=parseFloat(a)*0.0013888888888889;
                document.getElementById('kq').innerHTML="Result :" + point;
                document.getElementById('dv').innerHTML="VNĐ";}
    if ((Fcur=="b") && (Tcur=="3")) 
                { 
                    let point=parseFloat(a)*32.38;
                    document.getElementById('kq').innerHTML="Result :" + point;
                    document.getElementById('dv').innerHTML="$";}
    if ((Fcur=="c") && (Tcur=="3")) 
                    { 
                        let point=parseFloat(a)*32.38;
                        document.getElementById('kq').innerHTML="Vui lòng chọn lại nước hoặc loại tiền";
                        document.getElementById('dv').innerHTML="BAHT";}
    if ((Fcur=="d") && (Tcur=="3")) 
                        { 
                            let point=parseFloat(a)*0.0036;
                            document.getElementById('kq').innerHTML="Result :" + point;
                            document.getElementById('dv').innerHTML="LAK";}
    if ((Fcur=="a") && (Tcur=="4")) 
                     { 
                         let point=parseFloat(a)*0.38;
                         document.getElementById('kq').innerHTML="Result :" + point;
                         document.getElementById('dv').innerHTML="VNĐ";}
    if ((Fcur=="b") && (Tcur=="4")) 
                         { 
                             let point=parseFloat(a)*8970.01;
                             document.getElementById('kq').innerHTML="Result :" + point;
                             document.getElementById('dv').innerHTML="$";}
    if ((Fcur=="c") && (Tcur=="4")) 
                    { 
                        let point=parseFloat(a)*8970.01;
                        document.getElementById('kq').innerHTML="Result :" + point;
                        document.getElementById('dv').innerHTML="BAHT";}
    if ((Fcur=="d") && (Tcur=="4")) 
                        { 
                            let point=parseFloat(a)*8970.01;
                            document.getElementById('kq').innerHTML="Vui lòng chọn lại nước hoặc loại tiền";
                            document.getElementById('dv').innerHTML="LAK";}
}
    
    
    