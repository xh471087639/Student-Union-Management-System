
function check_mail(form_name, ID) {
    var x = $("input[name=" + form_name + "]").val();
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (x == "") {
        clear_span(ID);
    }
    else {
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            clear_span(ID);
            document.getElementById(ID).innerHTML = "邮箱错误";
            $("#regist_mail_check_end").css('color', 'red');
        }
        else {
            clear_span(ID);
            $("#" + ID).addClass("glyphicon glyphicon-ok");
            $("#regist_mail_check_end").css('color', 'green');
        }
    }
}

//————————-————————检测邮箱

function check_second_account(form_name, ID, aim_name) {
    if ($("input[name=" + form_name + "]").val() == "") {
        clear_span(ID);
    }
    else {
        if ($("input[name=" + form_name + "]").val() == $("input[name=" + aim_name + "]").val()) {
            if ($("input[name=" + form_name + "]").val() == "") {
                clear_span(ID);
                document.getElementById(ID).innerHTML = "密码不一致";
                $("#regist_account_second_key_end").css("color", "red");
            }
            else {
                clear_span(ID);
                $("#" + ID).addClass("glyphicon glyphicon-ok");
                $("#regist_account_second_key_end").css("color", "green");
            }
        }
        else {
            clear_span(ID);
            document.getElementById(ID).innerHTML = "密码不一致";
            $("#regist_account_second_key_end").css("color", "red");
        }
    }
}
//————————————检测密码一致
function turn_off_more_info() {
    $("#moreinfo").collapse('hide');
    $("#toregist").val("立即注册");
    // document.getElementById("toregist").value = "立即注册";
}
function turn_on_more_info() {
    $("#moreinfo").collapse('show');
    document.getElementById("toregist").value = "立即申请";
}
//————————————输出文档详情
function loadFile(file) {
    $("#Documentdetails").val(file.name);
}
//————————————输出文档详情

//————————————注册交互
function regist() {


    $.ajax({
        type: 'post',
        url: Path + '/user',
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        async: true,
        data: {
            userName:document.getElementById('regist_account').value,
            userPassword:document.getElementById('regist_account_frist_key').value,
            userEmail:document.getElementById('regist_mail').value
        },
        success: function (result) {
            if(result.code=='200'){
                alert('注册成功');
                window.location='index.html'
            }
            else alert(result.msg);
        },
        error: function () {
            alert('注册失败');
        }
    })

}
//————————————注册交互
$(document).ready(function () {

    $('#toregist').click(regist);

})