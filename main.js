var img="";

function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modelLoaded());
    document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("dog",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);

    fill("red");
    text("cat",310,90);
    noFill();
    stroke("red");
    rect(300,80,320,320);
}

function modelLoaded(){
    console.log("modelloaded");
}