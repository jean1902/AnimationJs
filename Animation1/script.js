const child = document.querySelectorAll('.child');
console.log(child);

// utiliser foreach parceque on pourra  selectionner au click l'un des elements de la boucles
// au click supprimer tous ceux qui ont auront la classe 
// au click afficher maintenant tout ceux qui auront  la classe


child.forEach( child => {
    child.addEventListener('click', ()=>{
        Remove();
        child.classList.add('afficheBlock');
    })
})

function Remove(){
    child.forEach(child => {
        child.classList.remove('afficheBlock');
    })
}