let kichthuoc = document.getElementsByClassName('slide')[0].clientWidth;
let chuyenslide = document.getElementsByClassName('chuyen-slider')[0];
let chuyen = 0;
let img = chuyenslide.getElementsByTagName('img');
var max = kichthuoc*img.length;
max -=kichthuoc;
function next(){
    if(chuyen<max) chuyen += kichthuoc;
    else chuyen = 0;
  //chuyenslide.style.marginLeft = '-' + chuyen +'px';
}
function pre(){
    if(chuyen === 0) chuyen = max;
    else
    chuyen -= kichthuoc;
    //chuyenslide.style.marginLeft = '-' + chuyen +'px';

}


setInterval(function(){
    next();
},3000);