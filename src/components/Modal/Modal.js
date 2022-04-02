const modal = document.querySelector('.modal')
const close = document.querySelector('#close');
const modalBtn = document.querySelector('#modalBtn')
close.addEventListener('click',()=>{
    modal.style.display = "none"
})

modalBtn.addEventListener('click', ()=>{
    modal.style.display = "block"
})