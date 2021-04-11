console.log(verVal)
    //验证字符串str是否是空
function isNull(str) {
    return str == "";
}

//验证str是否满足最小长度length
function minLength(str, length) {
    return (str.length >= length);
}

//判断str是否满足最大长度length
function maxLength(str, length) {
    return (str.length <= length);
}

//检验是否[minlen,maxlen]
function inputLengthTest(thisInput, minL, maxL) {
    var str = thisInput.value;
    return minLength(str, minL) && maxLength(str, maxL)
}

function checkElem0(strId) {
    var elem = $('#' + strId)[0];
    $(elem).focus(
        function() {
            //编辑状态时清除标识
            $(elem).parent().find("font").css("display", "none")
            $(elem).parent().find("input+span").removeClass()
            $(elem).blur(
                function() {
                    //移开状态时开始判断
                    var ans = !isNull(elem.value) //非空
                    if (ans) {
                        if (strId == "name")
                            ans = inputLengthTest(elem, 2, 8) //合格
                        else if (strId == "password")
                            ans = inputLengthTest(elem, 6, 20)
                        else if (strId == "re-password")
                            ans = (elem.value === $("#password")[0].value)
                    }
                    if (ans) { //正确
                        $(elem).parent().find("font").css("display", "none")
                        $(elem).parent().find("input+span").removeClass()
                        $(elem).parent().find("input+span").addClass("glyphicon glyphicon-ok btn-success")
                    } else { //错误
                        $(elem).parent().find("font").css("display", "inline")
                        $(elem).parent().find("input+span").removeClass()
                        $(elem).parent().find("input+span").addClass("glyphicon glyphicon-remove btn-danger")
                    }
                })
        })
}

$(function() {
    checkElem0('name')
    checkElem0('password')
    checkElem0('re-password')
})

function checkElem(strId) {
    var elem = $('#' + strId)[0];
    var ans = !isNull(elem.value) //非空
    if (ans) {
        if (strId == "name") {
            var patt1 = new RegExp("^[a-zA-Z0-9]{2,8}$");
            ans = patt1.test(elem.value) //合格 
        } else if (strId == "password") {
            var patt2 = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$");
            ans = (patt2.test(elem.value))
        } else if (strId == "re-password")
            ans = (elem.value === $("#password")[0].value)
    }
    if (ans) { //正确
        $(elem).parent().find("font").css("display", "none")
        $(elem).parent().find("input+span").removeClass()
        $(elem).parent().find("input+span").addClass("glyphicon glyphicon-ok btn-success")
    } else { //错误
        $(elem).parent().find("font").css("display", "inline")
        $(elem).parent().find("input+span").removeClass()
        $(elem).parent().find("input+span").addClass("glyphicon glyphicon-remove btn-danger")
    }
    return ans;
}

function checkAll() {
    var verifycode = $('#verifital_input')[0].value;
    if (verifycode == 0)
        alert("验证码不能为空")
    else if (verifycode != verVal)
        alert("验证码错误")
    else {
        if (checkElem('name') && checkElem('password') && checkElem('re-password')) {
            alert("注册成功！即将转到登录页面...")
            window.location = "login.html"
        } else alert("请完善必填信息！")
    }
}

var emailCode = "";
var teleCode = "";

function getEmail() {
    var chck = $("#e-mail")[0].value;
    if (!isNull(chck)) //非空
    {
        var regexEmail = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
        if (regexEmail.test(chck)) {
            emailCode = createRandom();
            alert(emailCode)
        } else alert("邮箱格式不正确，请检查！")
    } else {
        alert("若要验证邮箱，请先填写邮箱")
    }
}

function getTele() {
    var chck = $("#tele")[0].value;
    if (!isNull(chck)) //非空
    {
        var regexTele = new RegExp("^1[0-9]{10}$");
        if (regexTele.test(chck)) {
            teleCode = createRandom();
            alert(teleCode)
        } else alert("手机号格式不正确，请检查！")
    } else {
        alert("若要验证手机号，请先填写邮手机号")
    }
}
//13964060522
//625310165@qq.com
//^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{2,})(?=.*[a-z]{2,})(?=.*[!@#$%^&*?\(\)]).*$
//高级密码