const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const  secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransitions(){
    //btn click active class
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace ('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //sections active class
    for(let s = 0; s < allSections.length; s++){
        allSections[s].addEventListener('click', (e) =>{
            const id = e.target.dataset.id;
            if (id){
                secBtns.forEach((btn) =>{
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')
                sections.forEach((section)=>{
                    section.classList.remove('active')
                })
                const element = document.getElementById (id);
                element.classList.add('active');
            }
        })
    }
    //toggle

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle ('light-mode')
    })
  
}

PageTransitions();
