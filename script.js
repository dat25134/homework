/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = 2;
  this.setImg =function(img){
    this.image = img;
  }

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
    if(this.left>window.innerWidth/2) this.left += this.speed;
  }
  this.moveBottom =function(){
    this.top+=this.speed;
    if(this.top>window.innerHeight/2) this.top += this.speed;
  }
  this.moveLeft =function(){
    this.left-=this.speed;
    if(this.left>window.innerWidth/2) this.left -= this.speed;
  }
  this.moveTop = function(){
    this.top -=this.speed;
    if(this.top>window.innerHeight/2) this.top -= this.speed;
  }
}

var hero = new Hero('race-car-r.png', 20, 30, 200);
let check1 =true;
function start() {
  if ((hero.left <= window.innerWidth - hero.size)&&check1) {
    hero.setImg('race-car-r.png') 
    hero.moveRight();
    
  }
  if (hero.left>window.innerWidth - hero.size){
    hero.setImg('race-car-b.png') 
    hero.moveBottom();
    check1=false;
  }
  if (hero.top>window.innerHeight){
    hero.setImg('race-car-l.png') 
    hero.moveLeft();
  }
  if (hero.left===30) {
    hero.setImg('race-car-t.png') 
    hero.moveTop();
    if (hero.top===20) check1=true;
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  window.requestAnimationFrame(start);
}

start();