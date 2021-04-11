var maxnum = 10
window.onload = function() {
    $("#title")[0].onblur = xinghao;
    $("#text1")[0].onblur = xinghao;
    $("#number")[0].onblur = xinghao;
    $("#men")[0].onblur = xinghao;
    $("#email")[0].onblur = xinghao;
    $("#title")[0].onkeydown = extitle;
    $("#text1")[0].onkeydown = extext;
    $("#text1")[0].onkeyup = text;
}

function xinghao() {
    if ($("#title").val().length == 0)
        $("#star1").show();
    else
        $("#star1").hide();

    if ($("#text1").val().length == 0)
        $("#star2").show();
    else
        $("#star2").hide();

    if ($("#number").val().length == 0)
        $("#star3").show();
    else
        $("#star3").hide();

    if ($("#men").val().length == 0)
        $("#star4").show();
    else
        $("#star4").hide();

    if ($("#email").val().length == 0)
        $("#star5").show();
    else
        $("#star5").hide();
}

function text() {

    var t = $("#text1")[0];

    $(t).keyup(function() {
        var r = $("#rest")[0];
        var u = $("#used")[0];
        u.innerText = t.value.length;
        r.innerText = maxnum - t.value.length;
    });
}

function extitle() {
    var t = $("#title")[0];
    if (t.value.length > 30)
        alert("标题字符不得超过30！");
}

function extext() {
    var t = $("#text1")[0]
    if (t.value.length > maxnum)
        alert("文本框字符不得超过" + maxnum + "！");

}



//var once = $("#no-select")[0]

// once.focus(function() {

//     $(this).css("display", "none") //点击之后就不能回到“未选择”状态了
//     $("#star0")[0].hide(); //红星也消失了
// }