const navbar = document.querySelector('.navbar');
const containerBox = document.querySelector('.containerBox');
const container= document.querySelector('.leftSideBar');

window.addEventListener('scroll' ,fixNav);

function fixNav(){
    if(window.scrollY > navbar.offsetHeight +500){
        navbar.classList.add('active');  //animation de la navbar
    } else{
        navbar.classList.remove('active');
    }
}

navbar.addEventListener('click',()=>{
    
container.classList.toggle('active')

})