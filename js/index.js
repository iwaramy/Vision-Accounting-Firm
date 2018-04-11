//gotop
$(function(){
  $('#gotop').click(function(){
    $('html,body').animate({scrollTop: 0}, 500);
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
      $('#gotop').fadeIn('fast');
    }
    else{
      $('#gotop').stop().fadeOut('fast');
    }
  });
})

$(document).ready(function(){
  //service tab
  $('.service_btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('main .service>div:eq('+$(this).index()+')').show().siblings().hide();
  });
  //about tab
  $('.service_btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('main .about>div:eq('+$(this).index()+')').stop().show().siblings().stop().hide();
    $('.slideshow>img:eq('+$(this).index()+')').stop().fadeIn().siblings().stop().fadeOut();
  });
  var imgh = $('.slideshow>img').height();
  $('.slideshow').css('height',imgh);
  $(window).resize(function(){
    var imgh = $('.slideshow>img').height();
    $('.slideshow').css('height',imgh);
  })

});

$(window).load(function(){
  //about 自動高度
  var imgh = $('.slideshow>img').height();
  $('.slideshow').css('height',imgh);
  $(window).resize(function(){
    var imgh = $('.slideshow>img').height();
    $('.slideshow').css('height',imgh);
  })
});

//常見問題
/*
$(document).ready(function(){
  $('.q').click(function(){
    $(this).addClass('activeq').next().slideDown().parent().siblings().children('.q').removeClass('activeq').next().slideUp();
    $(this).children('.qb').addClass('activeqb').parent().parent().siblings().children('.q').children('.qb').removeClass('activeqb')
  });
});
*/

$(function() {
  if($(window).width()<768){
    $('.map').addClass('video-container');
    //$('.form').removeClass('text-right').addClass('text-left');
  }
});
