objects=[];
status="";

function preload(){
    video=createVideo("video.mp4");
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}

function draw(){
    image(video,0,0,480,380);

    if(status != ""){
        objectDetector.detect(video,gotResult);

        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status: objects detected";
            document.getElementById("numberOfObjects").innerHTML="number of objects detected are:"+objects.length;

            fill("green");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        objects=results;
    }
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
    video.speed(1);
    video.loop();
    video.volume(0);
}

