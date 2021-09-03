let container=document.querySelector(".image-item");

let index=8
window.addEventListener("scroll",function(){
    const {scrollTop,scrollHeight,clientHeight}=document.documentElement;


let scrolltotal=scrollTop+clientHeight;
if (scrolltotal>=scrollHeight-15) {
   ajout(4)
   
}
function ajout(compte) {
for (let i = 0; i < compte; i++) {
    index++
    let image= document.createElement('img');
    image.src=`https://picsum.photos/200/250?random=${index}`
    container.appendChild(image)
    
}
    
}
});