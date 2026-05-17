const redBtn = document.getElementById("red")
redBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "red"
});

const YellowBtn = document.getElementById("yellow")
YellowBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow"
});

const orangeBtn = document.getElementById("orange")
orangeBtn.addEventListener("click",function(){
    document.body.style.backgroundColor="orange"
});

const greenBtn = document.getElementById("green")
greenBtn.addEventListener("click",function(){
    document.body.style.backgroundColor="green"
});

const blueBtn = document.getElementById("blue")
blueBtn.addEventListener("click",function(){
    document.body.style.backgroundColor="blue"
});

const pinkBtn = document.getElementById("pink")
pinkBtn.addEventListener("click",function(){
    document.body.style.backgroundColor="pink"
});

const defaultBtn = document.getElementById("default")
defaultBtn.addEventListener("click",function(){
    document.body.style.backgroundColor="white"
});

const inputColor = document.getElementById("color-input")
const applyBtn = document.getElementById("apply")

applyBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = inputColor.value
});