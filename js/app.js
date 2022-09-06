const menuBox = document.querySelector('.menu-box'), menu = document.querySelector('.res-menu'), 
box = document.querySelectorAll('.menu-box div')
let menuOpen = false
function open(){
        menu.classList.add('activated')
        menuOpen=true
}
function close(){
        menu.classList.remove('activated')
        menuOpen=false
}
menuBox.addEventListener('click', ()=>{
        if(!menuOpen){
                open();
                box[0].classList.add('box1')
                box[1].style.opacity = '0'  
                box[2].classList.add('box3')    
        }else{
                close();
                box[0].classList.remove('box1')
                box[1].style.opacity = '1'
                box[2].classList.remove('box3')
        }
})
// if(window.innerWidth > 992){
//         close();
// }

// if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
//         document.querySelector('.nav-part nav').classList.add('scrolling')
// }