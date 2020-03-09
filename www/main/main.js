window.onload = function(){
var UserID = localStorage.getItem('UserID');
if (UserID === null){$(function(){$.magnificPopup.open({items:{src:'<div class="inline-popup">有難うございます</div>'}, type:'inline'});})} else{alert('Boy');}};





