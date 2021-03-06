var jsDivBox = document.getElementById("loopDiv");
//图片节点
var jsImg = document.getElementById("pic");
//左右按钮节点
var jsLeft = document.getElementsByClassName("arrow_left");
var jsRight = document.getElementsByClassName("arrow_right");
//获取所有的li
var jsSpots_box = document.getElementsByClassName("spots_box");
var jsSpots = document.getElementsByClassName("spots");
//让第一个小圆点变为红色
jsSpots[0].style.background = "red";

//显示当前的图片下标
var currentPage = 0;

//启动定时器
var timer = setInterval(func, 1000);
function func() {
    currentPage++;
    changePic();

}
function changePic() {
    if (currentPage == 5) {
        currentPage = 0;
    }
    if (currentPage == -1) {
        currentPage = 4;
    }
    //更换图片
    //"img/1.jpg"
    jsImg.src = "img/" + currentPage + ".jpg";
    //将所有的小圆点颜色清空
    for (var i = 0; i < jsSpots.length; i++) {
        jsSpots[i].style.backgroundColor = "#aaa";
    }
    //改变对应小圆点为红色
    jsSpots[currentPage].style.backgroundColor = "red";
}

//鼠标进入
jsDivBox.addEventListener("mouseover", func1, false);
function func1() {
    //停止定时器
    clearInterval(timer);
    //显示左右按钮
    jsLeft.style.display = "block";
    jsRight.style.display = "block";
}
//鼠标移出
jsDivBox.addEventListener("mouseout", func2, false);
function func2() {
    //重启定时器
    timer = setInterval(func, 1000);

    //隐藏左右按钮
    jsLeft.style.display = "none";
    jsRight.style.display = "none";
}

//点击左右按钮
jsLeft.addEventListener("click", func3, false);
function func3() {
    currentPage--;
    changePic();
}
jsLeft.onmouseover = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.6)";
}
jsLeft.onmouseout = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.2)";
}
jsRight.addEventListener("click", func4, false);
function func4() {
    currentPage++;
    changePic();
}
jsRight.onmouseover = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.6)";
}
jsRight.onmouseout = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.2)";
}

//进入小圆点
for (var j = 0; j < jsSpots.length; j++) {
    jsSpots[j].onmouseover = function() {
        currentPage = parseInt(this.innerHTML) - 1;
        changePic();
    };
}
