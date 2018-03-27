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
    $('main .about>div:eq('+$(this).index()+')').show().siblings().hide();
  });
});

//常見問題
$(document).ready(function(){
  $('.q').click(function(){
    $(this).addClass('activeq').next().slideDown().parent().siblings().children('.q').removeClass('activeq').next().slideUp();
    $(this).children('.qb').addClass('activeqb').parent().parent().siblings().children('.q').children('.qb').removeClass('activeqb')
  });
});

