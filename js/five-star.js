var c3=document.getElementById("myCanvas_3");
var cxt3=c3.getContext("2d");   //获取上下文的环境，canvas是基于状态的绘制，而不是对象
cxt3.moveTo(50,50);    //初始点位置
cxt3.lineTo(150,50);   //划线移动到的位置
cxt3.lineTo(150-100*Math.cos(36/180*Math.PI),50+100*Math.sin(36/180*Math.PI));
cxt3.lineTo(100,50-50*Math.tan(36/180*Math.PI));
cxt3.lineTo(50+100*Math.cos(36/180*Math.PI),50+100*Math.sin(36/180*Math.PI));
cxt3.closePath();         //画闭合图形时用此方法会连接到起始点，让图形闭合。
cxt3.strokeStyle="red";  //可以理解为画笔颜色
cxt3.lineWidth=3;       //线宽设置，默认应该就是1
cxt3.fillStyle="#e6e6e6";   //竟然无效，难道是因为五角星多处闭合的原因吗？
cxt3.fill();                //原来是缺了目前所在这行代码，虽然上面那行代码设置了填充颜色，可是没有使用cxt.fill（）填充函数进行填充。
cxt3.stroke();              //该命令进行绘制