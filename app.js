const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-bar');
hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle("active");
});

// readmore sellection

const readmore = document.querySelector('.read')
const moreAboutMe = document.querySelector('.more-about-me')

readmore.addEventListener('click',()=>{
    if(moreAboutMe.style.display='none'){
        moreAboutMe.style.display='block';
    }else{
        moreAboutMe.style.display= 'none';
    }
});