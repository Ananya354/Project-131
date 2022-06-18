function setup(){
    canvas=createCanvas(730, 500);
    canvas.center()
    }
    
    function preload(){
    kitchen_pic=loadImage("Kitchen.jpg");
    }
    
    function draw(){
    image(kitchen_pic, 0, 0, 730, 500);
    }
    
    function back(){
    window.location="index.html";
    }