const navbar = document.querySelector('.navbar');
const containerBox = document.querySelector('.containerBox');
const container= document.querySelector('.leftSideBar');
const sms= document.querySelector('.sms');

// window.addEventListener('scroll' ,fixNav);
window.addEventListener('scroll' ,display);

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
// Sélectionnez l'élément sur lequel vous souhaitez détecter la fin du défilement
 // Pour la fenêtre principale
// var element = document.getElementById('votre-element'); // Pour un élément spécifique

// Ajoutez un écouteur d'événement "scroll" à l'élément

function display() {
  // Vérifiez si l'utilisateur a atteint le bas de la page
  if (window.scrollY >= 19232.80078125) {
    console.log(window.scrollY,'scroll y')
    console.log(window.scroll,'hauteur max nav')
    // L'utilisateur a atteint la fin du défilement
    console.log("Fin du défilement atteinte !");
    // Votre code pour traiter la fin du défilement ici
    sms.classList.add('active');
  } else{
    sms.classList.remove('active');
  }
}