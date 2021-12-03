// let classa=[100,90,80,60,40,20]
// console.log(classa)
// for(let i=0;i<classa.length;i++){
//     console.log('i',classa[i])
// }
// console.log();
/*
function reciprocal() {
    let condition = true
    let target = 0
    let i = 10
    while (condition) {
        if (i === target) {
            condition = false
        }
        i--
        
    }
    return i
}
let reciprocal1=reciprocal()
console.log(reciprocal1);
*/
// window.addEventListener('load', function () {
//     window.alert("歡迎")
// })
// function butman() {
//     var val1 = document.getElementById('text1').value;
//     var val2 = document.getElementById('text2').value;
//     window.alert(Math.max(val1, val2) + "比較大");
// }
// function butmin () {
//     var val1 = document.getElementById('text1').value;
//     var val2 = document.getElementById('text2').value;
//     window.alert(Math.min(val1, val2) + "比較小");
// }


// function add() {
//     var btest = document.getElementById('butt').value
//     var val1 = document.getElementById('text1').value
//     var val2 = document.getElementById('text2').value
//     console.log(btest);
//     window.alert(Number(val1) + Number(val2))
// }
// function reduce() {
//     var val1 = document.getElementById('text1').value
//     var val2 = document.getElementById('text2').value
//     window.alert(Number(val1) - Number(val2))
// }
// function multiply() {
//     var val1 = document.getElementById('text1').value
//     var val2 = document.getElementById('text2').value
//     window.alert(Number(val1) * Number(val2))
// }
// function Divided() {
//     var val1 = document.getElementById('text1').value
//     var val2 = document.getElementById('text2').value
//     window.alert(Number(val1) / Number(val2))
// }
// function num() {

//     var val1 = document.getElementById('text1').value
//     var val2 = document.getElementById('text2').value

//     if (btest == 1) {
//         window.alert(Number(val1) + Number(val2))
//         btest.clear()
//     } else if (btest == 2) {
//         window.alert(Number(val1) - Number(val2))
//         btest.clear()
//     } else if (btest == 3) {
//         window.alert(Number(val1) * Number(val2))
//         btest.clear()
//     } else {
//         window.alert(Number(val1) / Number(val2))
//         btest.clear()
//     }
// }
// function add() {
//     var btest = document.getElementById('add').value
//     console.log(btest);
// }
// function reduce() {
//     var btest = document.getElementById('reduce').value
//     console.log(btest);
// }
// function multiply() {
//     var btest = document.getElementById('multiply').value
//     console.log(btest);
// }
// function Divided() {
//     var btest = document.getElementById('Divided').value
//     console.log(btest);
// }

// 計算機按鈕程式
// const operationButtons = document.querySelectorAll('[data-operation]')
// const numberButtons = document.querySelectorAll('[data-number]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log(button.innerText) 
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log(button.innerText)
//     })
// })
// equalsButton.addEventListener('click', button => {
//     console.log(button.innerText)
// })

// allClearButton.addEventListener('click', button => {
//     console.log(button.innerText)
// })

// deleteButton.addEventListener('click', button => {
//     console.log(button.innerText)
// })

// var point={
//     "x":2,
//     "y": 3,
//     "get":function(){
//         alert(this.x+","+this.y)
//     }
// }
// //alert(point.x)
// var jsonStr=JSON.stringify(point);
// console.log(jsonStr);
// var plainObj = JSON.parse(jsonStr)
// console.log(plainObj);