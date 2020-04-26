
$('#slideL').on('click',function(){
  if($(this).hasClass('off')){
    $(this).removeClass('off');
    $('#slideL').animate({'marginLeft':'-400px'},100).addClass('on');
  }else{
    $(this).addClass('off');
    $('body').animate({'marginLeft':'-100%'},500);
  }
});




$('form').submit(function( event ) {
    event.preventDefault();{
$.post( 'http://ec2-13-114-80-100.ap-northeast-1.compute.amazonaws.com/Ricomen/server.py', $('form').serialize())
 
//通信が成功した場合
.done( function(data) {alert('登録を完了しました');localStorage.setItem('UserID', data); location.href = "../main.html";} )
 
//通信エラーの場合
.fail( function(data) {alert('通信エラーです');} )
 
}});