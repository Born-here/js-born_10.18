$(function () {
  // 실행할 코드

  // loading 되면 bg-color를 plum로 변경
  $('body').css({
    'background-color': 'plum',
    'font-size': '20px',
  });
  // .btn1을 클릭했을 때
  // .box1를 없애기
  $('.btn1').on({
    mouseenter: function () {
      $('.box1').hide();
    },
    click: function () {
      $('.box1').show();
    },
  });

  $('.btn1').on('mouseleave', function () {
    $('.box1').show();
  });
  // .btn2를 클릭했을 때
  // .box2를 없애기
  $('.btn2').mouseleave(function () {
    $('.box2').hide();
    $('.box2').stop().slideToggle(3000);
  });
  $('.btn2').click(function () {
    $('.box2').show();
    $('.box2').stop().slideToggle(3000);
  });

  // animate
  // .btn3을 클릭했을 때
  // .box3가 1초동안 왼쪽으로 100px 이동
  $('.btn3').click(function () {
    $('.box3').animate({ left: '100px' }, 1000);
  });
});
