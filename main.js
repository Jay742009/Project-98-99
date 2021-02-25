//Machine learning means teaching the machine
//AI defines Artificial Intelegince

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){

document.getElementById("textbox").innerHTML = "" ;
recognition.start();

}

recognition.onresult = function (event) {

var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content ;
console.log(event);
if(Content == "take my selfie"){
    console.log("taking my selfie in - - - - - ")
    speak();
}

}

camera = document.getElementById("camera");

Webcam.set({
    height:250,
    width:360,
    image_format:'jpeg',
    jpeg_quality:90
});

function speak(){

    var synth = window.speechSynthesis ;

    speak_data = "Taking your selfie in 5    4    3    2    1 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout( function()
    {
        take_snapshot();
        save();
    }, 5000 );

}

function take_snapshot(){
 
    Webcam.snap(function(data_uri){
        
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

    });


}