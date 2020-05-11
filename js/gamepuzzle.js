function changeImg(location){
    let x = Math.floor(Math.random()*10)
    switch (x){
        case 0: 
        case 1:
        case 2: x=4;break;
        case 3:
        case 4:
        case 5: x=5;break;
        case 6:
        case 7:
        case 8:
        case 9: x=6;break;
    }
    document.getElementById(location).style.backgroundImage= "url('../img/" + x + ".jpg')" ;
}

function check(){
    let a=document.getElementById('topleft').style.backgroundImage ;
    let b=document.getElementById('topright').style.backgroundImage;
    let c=document.getElementById('botright').style.backgroundImage;
    let d=document.getElementById('botleft').style.backgroundImage;
    if ((a===b) && (b===c) && (c===d)) {
        document.getElementById('kq').innerHTML= 'BINGO!!!';
        let e='';
        for (let i=5;i<17;i++) e+=a[i];
        document.getElementById('img').src= e;
    }
}

function randomImg(){
             let a = Math.floor(Math.random()*10)
        switch (a){
            case 0: 
            case 1:
            case 2: x=4;break;
            case 3:
            case 4:
            case 5: x=5;break;
            case 6:
            case 7:
            case 8:
            case 9: x=6;break;
        }
        document.getElementById('topleft').style.backgroundImage= "url('../img/" + x + ".jpg')" ;
        let b = Math.floor(Math.random()*10)
        switch (b){
            case 0: 
            case 1:
            case 2: x=4;break;
            case 3:
            case 4:
            case 5: x=5;break;
            case 6:
            case 7:
            case 8:
            case 9: x=6;break;
        }
        document.getElementById('topright').style.backgroundImage= "url('../img/" + x + ".jpg')" ;
        let c = Math.floor(Math.random()*10)
        switch (c){
            case 0: 
            case 1:
            case 2: x=4;break;
            case 3:
            case 4:
            case 5: x=5;break;
            case 6:
            case 7:
            case 8:
            case 9: x=6;break;
        }
        document.getElementById('botleft').style.backgroundImage= "url('../img/" + x + ".jpg')" ;
        let d = Math.floor(Math.random()*10)
        switch (d){
            case 0: 
            case 1:
            case 2: x=4;break;
            case 3:
            case 4:
            case 5: x=5;break;
            case 6:
            case 7:
            case 8:
            case 9: x=6;break;
        }
        document.getElementById('botright').style.backgroundImage= "url('../img/" + x + ".jpg')" ;
    }
    