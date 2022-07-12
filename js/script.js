// 스크롤 함수 (내가 만든거 아님, 분석하려고 가져옴)
    // 스크롤 위치 세팅을 잡는 함수인거같음
function scrollSet(){
    // 변수 앞에 $을 붙이는 이유는 제이쿼리에서 사용하는 내장 함수를 사용하기 위함
    $scrPoint = $(window).height() / 2                    // 윈도우 창 크기 / 2
    $scrPoint2 = $scrPoint / 2                           // 변수 1 / 2
    $scrPoint3 = $scrPoint + $scrPoint2                 // 변수 1 + 변수 2
    $eftStart = $(window).scrollTop() + $scrPoint3     // 현재 스크롤 위치 + 변수 3
}

    // 스크롤 이펙트를 위한 함수인거같음
function scrEffect(){
    scrollSet()                                      // 스크롤 위치 관련 함수 실행
    $('.ssg').each(function(){                      // ssg 를 가진 클래스를 찾아 반복문
        objTop = $(this).offset().top              // 선택한 요소의 좌표값(offset) Y축(top)을 가져옴
        if ($eftStart >= objTop) {                // 만약에 변수 3이 objTop보다 높거나 같을 경우
            $(this).removeClass('ssg')           // ssg 클래스 삭제
        }
    });
}
    // fadeIn 관련 함수
    // 해당 시간 후 클래스 off 를 제거한다.
function fadeIn(sec){
	setTimeout(function(){
		$('.intro').removeClass('off')
	}, sec)
}

    // 홈페이지 진입 시 초기 세팅을 위한 함수
function main(){
    fadeIn(500)
	scrEffect()
}

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

    // 스크롤 행위가 이루어질때마다
    $(window).scroll(function(){
		scrEffect()
	})
})