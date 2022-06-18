function setup(){
    canvas=createCanvas(730, 500);
    canvas.center()
    }
    
    function preload(){
    hall_pic=loadImage("Drawing Room.jpg");
    }
    
    function draw(){
    image(hall_pic, 0, 0, 730, 500);
    }
    
    function back(){
    window.location="index.html";
    }