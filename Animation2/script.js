const next= document.querySelector('.next');
const prev = document.querySelector('.prev');
const bar = document.querySelector('.bar');
const circle= document.querySelectorAll('.page');

let currentActive = 1;
next.addEventListener('click', ()=>{
    currentActive++;

    if(currentActive >circle.length){
        currentActive = circle.length;
       
    }
    console.log(currentActive);
    update();
})

prev.addEventListener('click', ()=>{
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
       
    }

    update();
    console.log(currentActive);
})

function update(){
    circle.forEach((circle , index) =>{
        if( index < currentActive){
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active');
    progress_bar.style.width =( actives.length -1 / circle.length - 1) * 100 +" %" ;
    if(currentActive ===1){
        prev.disabled =false;
       
    }else if( currentActive === circle.length){
        next.disabled = true ;
    } else{
        prev.disabled =false;
        next.disabled =false ;
    }
        
    }