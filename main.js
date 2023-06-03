let scroller=document.querySelector(".scroller");
let heg= document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",function(){
    let des =document.documentElement.scrollTop;
    scroller.style.width=`${(des /heg  )*100}%`
})