/*<script type="text/javascript">*/

/*document.addEventListener('plusready', function(){
 //console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"

 });*/

/*    </script>*/
/* 使用默认的父元素进行替换 http://blog.csdn.net/baidu_32731497/article/details/51804333*/
function secondClick(str) {
    /*alert('str=' + str);*/
    /*var container = document.getElementById("first");*/
    /*var container = document.getElementsByTagName()*/
    var message = document.getElementById("firstImg");

    var para = document.createElement("replaceFirst");
    //添加 img

    var img = document.createElement("img");

    //设置 img 属性，如 id

    img.setAttribute("id", "newImg");

    //设置 img 图片地址

    img.src = "img/twitter_panda_128px_534232_easyicon.net.png";

    para.appendChild(img);

    message.parentNode.replaceChild(para, message);
}

function imgClick(str) {
    /*alert('str=' + str);*/
    var container = document.getElementById("first");
    var message = document.getElementById("firstImg");

    var para = document.createElement("replaceFirst");
    //添加 img

    var img = document.createElement("img");

    //设置 img 属性，如 id

    img.setAttribute("id", "newImg");

    //设置 img 图片地址

    img.src = "img/twitter_panda_128px_534232_easyicon.net.png";

    img.width = message.width;
    img.height = message.height;
    console.log("=-=" + img.width + "====" + img.height + "-----" + message.width + "=------" + message.height)
    para.appendChild(img);

    container.replaceChild(para, message);
}
/*替换视频的标签，自定义视频标签*/
function videoReplaceClick() {
    console.log("替换视频标签");
  var message = document.getElementById("video0");
  if (message == null){//说明替换了，则播放视频
      var newVideo = document.getElementById("newVideo");
      newVideo.pause();
    return;
  }
    // var para = document.createElement("replaceFirst");
    //添加 img
    var videoRep = document.createElement("video");
    //设置 img 属性，如 id
    videoRep.setAttribute("id", "newVideo");
    //设置 img 图片地址
    videoRep.src = "http://video.89mc.com/89mc/knowledge/video/93c2d547-e0a8-4559-89c5-bb4565e8bf8d.mp4";
    videoRep.width = message.videoWidth;
    videoRep.height = message.videoHeight;
    videoRep.controls = "controls";
    videoRep.poster = message.poster;
    // para.clientWidth = message.videoWidth;
    // para.clientHeight = message.videoHeight;
    console.log("=-=" + videoRep.width + "====" + videoRep.height + "-----" + message.width + "=------" + message.height)
    // para.appendChild(videoRep);
    message.parentNode.replaceChild(videoRep, message);
    //视频控件替换完成,直接可播放
    var newVideo = document.getElementById("newVideo");
    newVideo.play();
}
function videoClick(str) {
    console.log("====" + str);
    var videoshow = document.getElementsByTagName("video")[0];

    console.log("==说明:0.此元素未初始化 1.正常但没有使用网络(preload没有预下载) 2.正在下载数据(preload预下载) 3.没有找到资源;" +
        "当前播放的状态:==" + videoshow.networkState);
}

function videoSeekClick(str) {
    console.log("====" + str);
    var videoshow = document.getElementsByTagName("video")[0];
    videoshow.currentTime = str;
    videoshow.play();

}
// Internet Explorer 8 及更早 IE 版本不支持 addEventListener() 方法。
function videoReginsClick(str) {
    console.log("--videoReginsClick--" + str);
    /*$('.skip').hide();*/
    var myVideo = document.getElementById("media");
    myVideo.addEventListener('play', function () {
        console.log("--play--");
        /*$('.skip').hide();*/
    });
    myVideo.addEventListener('pause', function () {
        /*$('.skip').show();*/
        console.log("--pause--");
    })
    myVideo.addEventListener("waiting", function () {//加载等待
        console.log("--waiting--");
    });
    myVideo.addEventListener("playing", function () {//播放前必走这个方法
        console.log("--playing--");
    });

}
/*切换清晰度---如果加本地视频有点问题(网络视频没问题)*/
/*	e.attr("src", "video/other1.mp4").attr("autoplay", "true");*/
function toggleVideo() {
    var e = document.getElementById("media");
    /*//当前播放时间*/
    var curTime = e.currentTime;
    console.log("--00--" + curTime + "===|===" + e.duration);
    e.setAttribute("src", "http://video.89mc.com/89mc/knowledge/video/93c2d547-e0a8-4559-89c5-bb4565e8bf8d.mp4");
    e.setAttribute("autoplay", "true"); //自动播放,相当于e.play();
    e.currentTime = curTime
    console.log("--1--" + curTime + "===|===" + e.duration);
    /*videoReginsClick("1");*/

}
//再次加载html,主要是为了添加
function reloadhtml() {
    var e = document.getElementsByTagName("body");
    e.onload = videoReginsClick("首页哦---再次加载html");

}
//在视频由于要播放下一帧而需要缓冲时执行 JavaScript :
function waitingClick() {
    console.log("正在缓冲中.......在视频由于要播放下一帧而需要缓冲时执行 ");

}

//播放视频时随时间变化进行数据的更新
function timeupdateClick() {
    var videoshow = document.getElementsByTagName("video")[0];
    //  currentTime 属性返回视频/音频（audio/video）当前播放位置
    document.getElementById("demo").innerHTML = "播放的时间===" + videoshow.currentTime;
    console.log("当前时间=" + videoshow.currentTime);
}

