const dark = document.querySelector('#dark');
const menu = document.querySelector('.menu-icon');
const icon = document.querySelector('.fa-bars');
const leftSidebar =  document.querySelector('.left-sidebar');
const theme = document.querySelector('.toggle-theme');
const darkTheme = document.querySelector('.fa-moon-o');
var element = document.body;
theme.addEventListener('click',()=>{
   if(darkTheme.classList.contains('fa-moon-o')){
        darkTheme.classList.replace('fa-moon-o','fa-sun-o');
        element.classList.toggle("dark-mode");
   }
   else{darkTheme.classList.replace('fa-sun-o','fa-moon-o');
   element.classList.toggle("dark-mode");}
    
})
menu.addEventListener('click',()=>{
    if(icon.classList.contains('fa-bars')){
        icon.classList.replace('fa-bars','fa-times');
        leftSidebar.style.left = '0px';
        leftSidebar.style.width = '100vw';
        leftSidebar.style.height = '100vh';
        leftSidebar.style.position = 'fixed';
    leftSidebar.style.background ="white";
    leftSidebar.style.display ="flex";
    leftSidebar.style.flexDirection = 'column';
    leftSidebar.style.alignItems = 'center';
    }
    else{
        icon.classList.replace('fa-times','fa-bars');
        leftSidebar.style.left = '-100%'
    }
})