const Input = document.querySelector('.email');
const arrow= document.querySelector('#arrowIcon');
const errorIcon= document.querySelector('#errorIcon');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


errorIcon.style.display ='none';

arrow.addEventListener('click',()=>{
    if(Input.value==='' || !emailRegex.test(Input.value)){
    errorIcon.style.display='block';
    arrow.style.display='none';
    }
});