$(document).ready(function(){

  // $('a').attr() : HTML 속성을 제어함
  //버튼1클릭시 이미지변경

  $('.btn1').click(function(){
   $('.inner > img').attr({'src':'img.jpg', 'alt':'개'});
  });

//버튼2클릭시 이미지변경
  $('.btn2').click(function(){
   $('.inner > img').attr({'src':'img2.jpg', 'alt':'고양이'});
  });

  //전체버튼 클릭시 위치변경
  $('.btn1, .btn2, .btn3').click(function(){
   $(this).animate({'position':'absolute', 'top': '30px'}, 300, function(){
     $(this).animate({'position': 'absolute', 'top': '52px'}, 800)
   });
  });


 //모달팝업 닫기
$('#popup .popup_btn').click(function() {
  $('#popup').hide();
});

//모달팝업 열기
$('.btn3').click(function() {
  $('#popup').show();
});

});
