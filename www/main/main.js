window.onload = function(){
var UserID = localStorage.getItem('UserID');
if (UserID === null){$(function(){$.magnificPopup.open({items:{src:'<div class="inline-popup">有難うございます</div>'}, type:'inline'});})} else{alert('Boy');}};


var body = document.getElementsByTagName('body')[0];
 
function linkUrl() {
    location.href = 'entry/first.html'
};
 
var bt3 = document.getElementById('button3');
bt3.addEventListener('click', function(){
    body.classList.add('anime3');
    setTimeout(linkUrl, 1500);
});




