$(function() {
    //获取class为caname的元素 
    $("table:first-child tr:not(:first-child) td:not(:last-child)").click(function() {
        var td = $(this);
        var txt = td.text();
        var input = $(" <input class='form-control'  style='width:25%;zoom:80%;margin:auto;text-align: center' >");
        $(input).attr('value', txt)
        td.html(input);
        input.click(function() { return false; });
        //获取焦点 
        input.trigger("focus");
        //文本框失去焦点后提交内容，重新变为文本 
        input.blur(function() {
            var newtxt = $(this).val();
            //判断文本有没有修改 
            if (newtxt != txt) {
                td.html(newtxt);
            } else {
                td.html(newtxt);
            }
        });
    });
});



//删除
$(function() {
    $(".btn-danger").click(
        function() {
            var abc = $(this).parent().parent()
            $($(abc).parent()).append("<tr><td colspan='3'>&nbsp;</td></tr>")
            $(abc).remove() //必须删除，带着格式的
        })
})