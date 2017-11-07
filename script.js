const cats = ["siamese", "persian", "manx", "maine coon", "tabby"];
let i = 0;

$("." + i).addClass("current");

function increment() {
    if (i < cats.length - 1) {
        i++;
        prev = i - 1;
        
        $("#currentIndex").text(i);
        $(".currentArrVal").html("<span class='" + i + "'>" + cats[i] + "</span>");
        $("#output").append("<br><span class='" + i + "'>" + cats[i] + "</span>");
        $("." + i).addClass("current");
        $("." + prev).removeClass("current");

        if (i === 4) {
            $("#inc").prop("disabled", true);
        }
    }
}

function reset () {
    $("." + i).removeClass("current");

    i = 0;
    $("#output").html("<span class='0'>siamese</span>");
    $("#currentIndex").text(i);
    $(".currentArrVal").html("<span class='0'>siamese</span>");
    $("." + i).addClass("current");
    $("#inc").prop("disabled", false);
}
