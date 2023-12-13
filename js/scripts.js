console.log("connected!")

var playButton = document.getElementById("Play")
var pauseButton = document.getElementById("Pause")
var myVideo = document.getElementById("video");


// Add a click event listener to the SVG element
playButton.addEventListener("click", function () {
    // Play the video
    myVideo.play();
});

pauseButton.addEventListener("click", function () {
    // Pause the video
    myVideo.pause();
});