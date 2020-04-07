
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

$('form').submit(function( event ) {
    event.preventDefault();{
var fruitsValue = $("input[name='fruits']:checked").val();
$.post( 'https://google.co.jp', fruitsValue)
 
//.done(function( data ) {
// console.log( data.form );
//})

.done( function(data) {alert('ccc');console.log( data.form );} )
 
//通信エラーの場合
.fail( function(data) {alert('aaa');} )
 
//通信が終了した場合
.always ( function(data) {alert('bbb');console.log('こんにちは');} )

}});


 //   var form = document.createElement('form');
 //   var request = document.createElement('input');
 
 //   form.method = 'POST';
 //   form.action = 'https://httpbin.org/post';
 
 //   request.type = 'hidden'; //入力フォームが表示されないように
 //   request.name = 'value';
 //   request.value = $("input[name='fruits']:checked").val();
 
 //   form.appendChild(request);
 //   document.body.appendChild(form);
 //   form.submit();

//$('#toriaezu').on('click',function(){
//alert($("input[name='fruits']:checked").val());
//});