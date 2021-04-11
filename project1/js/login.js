var json; //for object store login data in json

function getJSONfromLocalhost(result) {
    json = result['loginInfo'];
}

console.log(verVal) //为了输入方便


function isNull(str) {
    return str == ""
}

function check(sIndentity, sPassword, json) {
    var Found; //找到标记
    for (var i = 0; i < json.length; i++) { //全部用户数据遍历
        if (json[i]["password"] == sPassword) //比对password
        {
            Found = false;
            var maybe = json[i];
            for (var key in maybe["identity"][0]) { //key
                if (maybe["identity"][0][key] == sIndentity) {
                    alert("欢迎用户" + maybe["identity"][0]["name"] + "通过" + key + "登录!")
                    Found = true;
                    break;
                }
            }
            if (Found)
                break;
        }
    }
    if (!Found)
        alert("ID或密码错误，请核对或改为用户名/邮箱/手机号登陆")
}

function checkElem0(strId) {
    var elem = $('#' + strId)[0];
    $(elem).focus(
        function() {
            $(elem).parent().find("font").css("display", "none")
            $(elem).blur(
                function() {
                    var ans = isNull(elem.value) //是空的吗
                    if (ans)
                        $(elem).parent().find("font").css("display", "inline")
                    else
                        $(elem).parent().find("font").css("display", "none")
                })
        })
} //before submit

function checkElem(strId) {
    var elem = $('#' + strId)[0];
    var ans = isNull(elem.value) //是空的吗
    if (ans)
        $(elem).parent().find("font").css("display", "inline")
    else
        $(elem).parent().find("font").css("display", "none")
    return !ans;
} //submit check

$(
    function() {
        checkElem0('name')
        checkElem0('password')
    }
)

function checkAll() {
    var verifycode = $('#verifital_input')[0].value;
    if (verifycode == 0)
        alert("验证码不能为空")
    else if (verifycode != verVal)
        alert("验证码错误")
    else {
        // alert("验证码正确！")
        if (checkElem('name') && checkElem('password')) {
            var id = $("#name")[0].value;
            var psw = $('#password')[0].value;
            //check("user@qq.com", "user88888888", json)
            check(id, psw, json)
        } else alert("ID和密码都要填写！")
    }
}