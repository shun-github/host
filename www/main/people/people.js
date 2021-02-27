$('#backbutton').on('click',function(){
$('body').animate({'marginLeft':'100%'},100);
function linkUrlback() {location.href = '../main.html'};
setTimeout(linkUrlback, 400);});

$('#slideL').on('click',function(){
    $('body').animate({'marginLeft':'-100%'},100);
    $('header').animate({'marginLeft':'0.01%'},100);}); //0だと動かない