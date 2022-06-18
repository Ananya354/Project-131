function setup(){
canvas=createCanvas(730, 500);
canvas.center();
}
    
    function preload(){
    dining_room_pic=loadImage("Dining Room.jpg");
    }
    
    function draw(){
    image(dining_room_pic, 0, 0, 730, 500);
    }
    
    function back(){
    window.location="index.html";
    }