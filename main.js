function preload(){

}

function setup(){
    canvas= createCanvas(315, 360);
    canvas.center()
video= createCapture(VIDEO);
video.hide();
imageRec= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0zqGY6DYy/model.json', modelLoaded);
}

function draw(){
image(video, 0, 0, 315, 360);
imageRec.classify(video, gotResults);
}

function modelLoaded(){
    console.log("modelLoadedSucessfully!")
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results);
      document.getElementById('object_name').innerHTML=results[0].label;
      document.getElementById('object_confidence').innerHTML=results[0].confidence.toFixed(2);
    }
}

