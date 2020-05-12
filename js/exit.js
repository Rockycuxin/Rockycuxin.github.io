window.unload = function() {
alert('欢迎！');
} window.onbeforeunload = function(e) {
e.returnValue = "记得下次再来哦！";
}
