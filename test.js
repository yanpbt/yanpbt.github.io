var num = 0;

function ChillamusicDD() {
    const music = new Audio('DD.mp3');
    music.play();
}
function Chillamusicangry() {
    const music = new Audio('NO.mp3');
    music.volume = 0.5;
    music.play();
    st();
}
function sp() {
    var body = document.getElementById("body");
    body.style.backgroundRepeat = "no-repeat"
}
function st() {
    var body = document.getElementById("body");
    body.style.backgroundRepeat = "repeat"
}
window.addEventListener('click', () => {
    num++;
    if (num == 10) {
        st()
        ChillamusicDD()
        setTimeout("sp()", 1000)
        num = 0;
        setTimeout("alert('祈菈彩蛋 ヽ(°▽°)ノ')", 2500)
    }
})
const Chilla = new Date(2021, 3, 7);
const Birthday = new Date(2021, 6, 6);
const timestamp = Date.now();
const test = new Date(2022, 6, 6);

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


