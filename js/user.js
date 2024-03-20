//检查cookie登录
window.onload = function () {
    if ($.cookie("user") == null) {
        alert("登录信息失效，请登录");
        $(location).attr('href', 'login.html');
    } else {

    }
}

//页面所需函数声明
function logout(){
    $.removeCookie('user');
    alert("注销成功");
}


$(document).ready(function (){

    var userData;

    $.ajax({
        url: 'http://localhost:8080/qube/user/info/'+$.cookie("user"), // 请求的 URL
        type: 'post', // 请求的方法（GET、POST、PUT、DELETE 等）
        dataType: 'json', // 期望的响应数据类型
        data: "",
        success: function(response) {
            userData=response;
            $(".layui-nav-img").attr("src",userData.avatar);
            $("#userI").html(function() {
                var avatarHtml = $("<img>").attr("src", userData.avatar).addClass("layui-nav-img");
                var nickNameHtml = $("<span>").text(userData.nickName);
                return avatarHtml.add(nickNameHtml);
            });

        },
        error: function(xhr, status, error) {
            alert("网络错误");
        }
    });
})


