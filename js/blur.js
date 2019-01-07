var canvas = document.getElementById("blur-canvas");
var cxt = canvas.getContext("2d");

var image = new Image();
var clippingRegion = {x: 350, y: 225, r: 45};      //这个初始值已经不重要了，因为initCanvas初始化中对clippingRegion进行了设置
image.src = "images/star_sky.jpg";
image.onload = function () {
    initCanvas();
};

function initCanvas() {
    clippingRegion = {  x: Math.random()*610+45,
                        y: Math.random()*360+45, r: 45};
    draw(image, clippingRegion);
}

function setClippingRegion(clippingRegion) {
    cxt.beginPath();
    cxt.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2, false);
    cxt.clip();
}

function draw(image, clippingRegion) {
    cxt.clearRect(0, 0, 700, 450);
    cxt.save();
    setClippingRegion(clippingRegion);
    cxt.drawImage(image, 0, 0)
    cxt.restore();
}
function resetPicture(){
    initCanvas();
}
function showPicture(){
    var theAnimation=setInterval(
        function(){
            clippingRegion.r+=20
            if(clippingRegion.r>1000){
                clearInterval(theAnimation);
            }
            draw(image,clippingRegion);
        },
        30
    )
}
