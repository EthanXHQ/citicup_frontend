$('#username, #password').on('input', function() {
    if ($('#username').val() && $('#password').val()) {
        $('.login').addClass('buttonafter');
    } else {
        $('.login').removeClass('buttonafter');
    }
});
$(".signup").click(function(){
    alert("注册成功")
    window.open("../html/select.html",'_self');
})
$(".login").click(function(){
    alert("登录成功")
    window.open("../html/select.html",'_self');
})