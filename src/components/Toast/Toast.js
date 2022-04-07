
// Toast
const toastTopBtn = document.querySelector('#toast-top-btn');
const toastTop= document.querySelector('.toast-container-top');
const toastBottom= document.querySelector('.toast-container-bottom');
const toastDismiss = document.querySelector('.toast-dismiss');
const toastBottomBtn = document.querySelector('#toast-bottom-btn');
const toastDismissBtn = document.querySelector('#toast-dismiss-btn');
const dismissBtn = document.querySelector('#dismiss');

// Modal 
const modal = document.querySelector('.modal')
const close = document.querySelector('#close');
const modalBtn = document.querySelector('#modalBtn')



toastTopBtn.addEventListener('click',()=>{
    toastTop.style.display = "flex";
    toastTop.style.top = "5rem";
    setTimeout(()=>{
        toastTop.style.display ="none"
    },3000)
})
toastBottomBtn.addEventListener('click',()=>{
    toastBottom.style.display = "flex";
    toastBottom.style.bottom = "1rem";
    setTimeout(()=>{
        toastBottom.style.display ="none"
    },3000)
})
toastDismissBtn.addEventListener('click',()=>{
    toastDismiss.style.display = "flex";
})
dismissBtn.addEventListener('click',()=>{
    toastDismiss.style.display = "none";

}) 


// Modal 
close.addEventListener('click',()=>{
    modal.style.display = "none"
})

modalBtn.addEventListener('click', ()=>{
    modal.style.display = "flex"
})
