//抓取網站
function getData(pageName) {
    var req = new XMLHttpRequest();
    req.open("get", "https://yanpbt.github.io/" + pageName)
    req.onload = function () {
        // alert(this.responseText);
        var content = document.getElementById("content")
        content.innerHTML = this.responseText
    }
    req.send()
}
//-----------
//重新整理
function reload() {
    window.location.reload()
}
//-----------
//音效
function ChillamusicDD() {
    const music = new Audio('DD.mp3');
    music.play();
}
function Chillamusicangry() {
    const music = new Audio('NO.mp3');
    music.volume = 0.5;
    music.play();
    st();
    setTimeout("sp()", 20000)
}
YOASOBI = document.getElementById("YOASOBI");
YOASOBI.volume = 0.1;
setTimeout("YOASOBI.play()",500)
//-----------
//rickroll音樂
const rickmusic = new Audio("Rick Astley.mp3")
function rickrollst() {
    rickmusic.volume = 0.5;
    rickmusic.play();
}
function rickrollsp() {
    rickmusic.pause();
}
//-----------
//滑鼠點擊次數彩蛋
var num = 0;
window.addEventListener('click', () => {
    num++;
    if (num == 10) {
        // st()
        rickrollst()
        // setTimeout("sp()", 10000)
        setTimeout("rickrollsp()", 10000)
        num = 0;
        // setTimeout("alert('騙你的 ヽ(°▽°)ノ')", 10800)
        $('#rickrollst').modal('show')
    }
})
//-----------
//節日判斷
const Chilla = new Date(2021, 3, 7);
const Birthday = new Date(2021, 6, 6);
const timestamp = Date.now();
//const test = new Date(2022, 6, 6);
var date = new Date(timestamp);
var y = date.getFullYear();
var m = date.getMonth();
var d = date.getDate();
var ChillaM = Chilla.getMonth();
var Chillad = Chilla.getDate();
var BirthdayM = Birthday.getMonth();
var Birthdayd = Birthday.getDate();
var year = y - 2021;
console.log(year);
if (m == ChillaM) {
    if (d == Chillad) {
        setTimeout("alert('祈菈'+year+'周年')", 100)
    }
}
if (m == BirthdayM) {
    if (d == Birthdayd) {
        setTimeout("alert('祈菈今天生日')", 100)
    }
}
//-----------
