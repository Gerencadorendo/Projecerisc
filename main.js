//https://teachablemachine.withgoogle.com/models/Ez-AV1kDX/
//

Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90,
});

camera = document.getElementById("camera");
Webcam.attach(camera)

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML='<img id="foto" src="'+data_uri+'"/ >'
    })
}

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ez-AV1kDX/model.json', modelLoaded)
function modelLoaded(){
    console.log("o modelo carregou")
}