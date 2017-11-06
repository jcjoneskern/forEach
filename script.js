const currentIndex = document.getElementById("currentIndex");
const currentArrVal = document.getElementById("currentArrVal");
const output = document.getElementById("output");

const cats = ["siamese", "persian", "manx", "maine coon", "tabby"];
let i = 0;

$("." + i).css("font-style", "italic");

function increment() {
    if (i < cats.length - 1) {
        i++;
        prev = i - 1;
        
        $("#currentIndex").text(i);
        $("#currentArrVal").html("<span class='" + i + "'>" + cats[i] + "</span>");
        $("#output").append("<br><span class='" + i + "'>" + cats[i] + "</span>");
    }

    $("." + i).css("font-style", "italic");
    $("." + prev).css("font-style", "normal");
}

function reset () {
    $("#output").html("<span class='0'>siamese</span>");
    $("." + i).css("font-style", "normal");
    i = 0;
    $("." + i).css("font-style", "italic");
}
