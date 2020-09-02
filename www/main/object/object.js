$('#backbutton').on('click',function(){
$('body').animate({'marginLeft':'100%'},100);
function linkUrlback() {location.href = '../main.html'};
setTimeout(linkUrlback, 400);});

//折り畳み
var fold = function(id) {
    if (typeof(id) === 'object') {
        for (var i = 0, len = id.length; i < len; i++) {
            fe(id[i]);
        }
    } else {
        fe(id);
    }
};
 
var fe = function(id) {
    var target = document.getElementById(id);
    if (target.style.display === 'none') {
        target.style.display    = 'block';
        target.style.visibility = 'visible';
    } else {
        target.style.display    = 'none';
        target.style.visibility = 'hidden';
    }
};
 
var sampleFold1 = document.getElementById('sample-fold1');
var sampleFold2 = document.getElementById('sample-fold2');
 
if (sampleFold1) {
    sampleFold1.onclick = function(event) {
        fold(['a01','a02','a03','a04','a05','a06','a07','a08','a09','a10']);
    };
}
 
if (sampleFold2) {
    sampleFold2.onclick = function(event) {
        fold(['b01','b02','b03','b04','b05','b06','b07','b08','b09','b10']);
    };
}
 
fold(['a01','a02','a03','a04','a05','a06','a07','a08','a09','a10','b01','b02','b03','b04','b05','b06','b07','b08','b09','b10']);


//リンク先遷移用
var object1A = localStorage.getItem('Object1-1');

function openMonaca() {
window.open('https://www.google.co.jp/search?q='+object1A, '_system');
return false;
};

//選択矢印
var arrow1 = document.getElementById('ARW');
$('#sample-fold1').on('click', function () {
   $(arrow1).toggleClass('rotate');
});