song = "";

score_R = 0
score_L = 0

right_X = 0
right_Y = 0

left_X = 0
left_Y = 0


function preload() {
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.position(480, 180)

    //camera starts here
    video = createCapture(VIDEO)
    video.hide()
    //posenet modle starts
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotResults)

}

function modelLoaded() {

    console.log("model loaded successfully")

}
function gotResults(results){

if(results.length>0){

console.log(results)
score_L=results[0].pose.keypoints[9].score
score_R=results[0].pose.keypoints[10].score

left_X=results[0].pose.leftWrist.x
left_Y=results[0].pose.leftWrist.y

right_X=results[0].pose.rightWrist.x
right_Y=results[0].pose.rightWrist.y
}

}


function draw() {
    image(video, 0, 0, 600, 500)


}

function playSong() {
    song.play()
    song.setVolume(1) //1 is the maximum volume 0 is the minimum volume
    song.rate(1)

}