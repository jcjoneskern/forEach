const currentIndex = document.getElementById("currentIndex");
const currentArrVal = document.getElementById("currentArrVal");
const output = document.getElementById("output");

const cats = ["siamese", "persian", "manx", "maine coon", "tabby"];
let i = 0;

$("." + i).css("font-style", "italic");

function increment() {
    i++;
    $("." + i).css("font-style", "italic");
}