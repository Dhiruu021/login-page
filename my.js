const wrapper = document.querySelector('.wrapper');
const wrapper1 = document.querySelector('.login-link');
const wrapper2 = document.querySelector('.register-link');

register-link.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

login-link.addEventListener('click',()=>{
    wrapper.classList.add('active');
});