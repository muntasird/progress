
var progress = document.querySelector(`.progress`)

function progressBar(){
 

 let height = document.documentElement.scrollHeight;
 let top = document.documentElement.scrollTop;
 let per = (top/(height - (window.innerHeight/2))) * 100;
 progress.style.width =`${per}%`;

 console.log(per)
}


window.addEventListener('scroll', progressBar)