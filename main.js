
function preload(){
    //There is nothing here.
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center(); //Center the canvas
}

function take_snap(){
    save('filtered_image.png');
}