//工具函数
function getFromString(path) {
    return "<iframe src=\"" + path + "\" width=\"100%\" height= \"100%\" name=\"topFrame\"\n  " +
        " scrolling=\"No\" noresize=\"noresize\" frameborder=\"0\" id=\"topFrame\"></iframe>"
}

function getScrollableIframe(path) {
    return (
        '<iframe src="' +
        path +
        '" width="100%" height="100%" name="topFrame" ' +
        'scrolling="auto" frameborder="0" id="topFrame"></iframe>'
    );
}


//页面所需函数声明
function getUpLoadData() {
    $(".layui-body").html(
        getFromString("iform/for_data/upload.html")
    )
}

function getHaveData() {
    $(".layui-body").html(
        getFromString("iform/for_data/user_data.html")
    )
}

function getClean() {

    $(".layui-body").html(
        getFromString("iform/for_clean/user_clean.html")
    )
}

function getCleaning() {

    $(".layui-body").html(
        getFromString("iform/for_clean/cleaning.html")
    )
}

function getCulPage(page) {
    $(".layui-body").html(
        getFromString("iform/for_calculate/" + page + ".html")
    )
}

function getCulPageLong(page) {
    $(".layui-body").html(
        getScrollableIframe("iform/for_calculate/" + page + ".html")
    )
}


function getProfile(){
    $(".layui-body").html(
        getFromString("iform/for_user/user_profile.html")
    )
}

function getPassword(){
    $(".layui-body").html(
        getFromString("iform/for_user/user_password.html")
    )
}
