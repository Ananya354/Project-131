function setup(){
    canvas=createCanvas(730, 500);
    canvas.center()
    }
    
    function preload(){
    bath_pic=loadImage("Bathroom.jpg");
    }
    
    function draw(){
    image(bath_pic, 0, 0, 730, 500);
    }
    
    function back(){
    window.location="index.html";
    }