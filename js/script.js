$(document).ready(function(){
// 헤더 시작
    // 초기 스크롤 위치에 따른 클래스 부여
    if($(window).scrollTop() == 0) {
        $("header > .top-wrap.pc-ver").addClass("top")
    } else {
        $("header > .top-wrap.pc-ver").removeClass("top")
    }

    // 스크롤 최상단 위치에 따른 클래스 부여
    $(window).scroll(function(){
        if($(window).scrollTop()) {
            $("header > .top-wrap.pc-ver").removeClass("top")
        } else {
            $("header > .top-wrap.pc-ver").addClass("top")
        }
    })
})