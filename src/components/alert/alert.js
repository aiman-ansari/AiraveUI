const cancel=document.querySelector('#close');
const alertDiv = document.querySelector('#alert-block')
cancel.addEventListener('click',()=>{
    alertDiv.style.display="none"
})