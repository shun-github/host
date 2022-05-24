$('#slideL').on('click',function(){
    $('body').animate({'marginLeft':'-100%'},100);
    $('header').animate({'marginLeft':'0.01%'},100);}); //0だと動かない

$('#toriaezu').on('click', function validateForm() {
  var radios = document.getElementsByName("fruits");
  var formValid = false;
  var i = 0;
  while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }
    if (!formValid) alert("必須入力項目です");
    return formValid;
  });

$('form').submit(function( event ) {
    event.preventDefault();{$.post( 'http://ec2-54-250-212-211.ap-northeast-1.compute.amazonaws.com/Ricomen/server.py', $('form').serializeArray())
 
//通信が成功した場合
.done( function(data) {alert('登録を完了しました');localStorage.setItem('UserID', data); location.href = "../main.html";} )
 
//通信エラーの場合
.fail( function(data) {alert('通信エラーですよ');} )
}});


//戻る処理1
$('#backbutton').on('click',function(){
    $('body').animate({'marginLeft':'100%'},100);
    function linkUrlback() {location.href = '../main.html'};
    setTimeout(linkUrlback, 400);});

//戻る処理2

$('#backbutton2').on('click',function(){
    $('body').animate({'marginLeft':'0%'},100);
    $('header').animate({'marginLeft':'0%'},100);});

