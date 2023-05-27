var img="";
objects=[];
status="";
function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(640,420);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects"; 
}

function draw(){
    
    image(video,0,0,640,420);
    if(status != ""){
        R=random(255);
        G=random(255);
        B=random(255);
        objectDetector.detect(video, gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status:objects detected";
            document.getElementById("numberOfObjects").innerHTML="amount of objects detected:"+objects.length;
            fill(R,G,B);
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke(R,G,B);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function modelLoaded(){
    console.log("modelloaded");
    status=true;
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }

}