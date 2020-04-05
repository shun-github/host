
$('#slideL').on('click',function(){
  if($(this).hasClass('off')){
    $(this).removeClass('off');
    $('#slideL').animate({'marginLeft':'-400px'},100).addClass('on');
  }else{
    $(this).addClass('off');
    $('body').animate({'marginLeft':'-100%'},100);
  }
});

$(document).ready(function(){
  fit();
  $(window).resize(function(){
    fit();
  })
  function fit(){
    var h = $(window).height();
    $('.slide-inner').css("height",h);
  }
});