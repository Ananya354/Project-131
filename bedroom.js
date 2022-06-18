function setup(){
canvas=createCanvas(730, 500);
canvas.center()
}

function preload(){
bed_pic=loadImage("Bedroom.jpg");
}

function draw(){
image(bed_pic, 0, 0, 730, 500);
}

function back(){
window.location="index.html";
}