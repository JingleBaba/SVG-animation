var distancePerPoint = 8; //speed for drawing //more distance means it have to cover fast to complete in frames time.
var frames = 60; //speed for animation //60 is the recommended value

var orig = document.querySelector('#svg_path');
var length;
var timer;
var strokeColor = '#61DAFB'; //color of drawing lines
var fillColor = strokeColor; //color of background

function startDraw() {
    length = 0;
    timer = setInterval(increaseLength, 1000 / frames);
}

function increaseLength () {
    orig.style.stroke = strokeColor;
    orig.style.strokeWidth = 2; //width of the line
    var pathLength = orig.getTotalLength(); //get total length of paths ///this is builtin function for getting path lengths on svg
    length += distancePerPoint;  //increase the offset value
    orig.style.strokeDasharray = pathLength; //make strokeDashArray to fill up the entire svg which is equal to path length
    orig.style.strokeDashoffset = pathLength - length; //decrease the offset so that the line can be longer 
    console.log(orig.style.strokeDashoffset)
    if(orig.style.strokeDashoffset <= 2690 || orig.style.strokeDashoffset <= `2690px`) { //2690 is an offset value as svg has few path that aren't buidling any visible lines, needs to be changed as per your svg file
        orig.style.fill = fillColor; //once the path been built, fill the svg path with the color
        stopDraw(); //clear the interval
    }
}

function stopDraw() {
    clearInterval(timer);
    orig.style.stroke = '';
    orig.style.strokeDasharray = '';
    orig.style.strokeDashoffset = '';
}

startDraw();