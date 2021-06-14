var  canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var bg="bla.jfif"

var car1_width=200;
var car1_height=100;
var car1_x=10;
var car1_y=10;
var car1="download.jfif";

var car2_width=200;
var car2_height=100;
var car2_x=10;
var car2_y=230;
var car2="ferrari1.jfif";

function add(){
    car1Tag= new Image();
    car1Tag.onload= load_car1;
    car1Tag.src= car1;

    car2Tag= new Image();
    car2Tag.onload= load_car2;
    car2Tag.src= car2;
    
    bgTag= new Image();
    bgTag.onload= load_bg();
    bgTag.src=bg;

}

function load_car1(){
    ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
}
function load_car2(){
   ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
}
function load_bg(){
    ctx.drawImage(bgTag,0,0,canvas.width,canvas.height);
 }

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keypress= e.keyCode;
    console.log(keypress);

    if (keypress==38) {
        console.log("up key was pressed");
        upkey();
    }
    if (keypress==40) {
        console.log("down key was pressed");
        down();
    }
    if (keypress==37) {
        console.log("left key was pressed");
        left();
    }
    if (keypress==39) {
        console.log("right  key was pressed");
        right();
    }
}