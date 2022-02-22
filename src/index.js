const menu = document.querySelector('.menu-icon');
const icon = document.querySelector('.fa-bars');
const leftSidebar =  document.querySelector('.left-sidebar');
const theme = document.querySelector('.toggle-theme');
const darkTheme = document.querySelector('.fa-moon-o');
let darkMode = localStorage.getItem('dark-mode');
const changeToDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode','enabled')
}
const changeToLightMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode',null)
}

darkMode = localStorage.getItem('darkMode')
if(darkMode === 'enabled'){
    darkTheme.classList.replace('fa-moon-o','fa-sun-o')
    changeToDarkMode()
}
theme.addEventListener('click',()=>{
     darkMode = localStorage.getItem('darkMode')
    if(darkMode !== 'enabled'){
        console.log('enabled');
        darkTheme.classList.replace('fa-moon-o','fa-sun-o')
        changeToDarkMode()
    }
    else{
        console.log('disabled')
        changeToLightMode();
        darkTheme.classList.replace('fa-sun-o','fa-moon-o')
    }    
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
        leftSidebar.style.zIndex= '1'
    }
    else{
        icon.classList.replace('fa-times','fa-bars');
        leftSidebar.style.left = '-100%'
    }
})