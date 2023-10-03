const toggle = document.querySelector('.burger input')
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
})
document.addEventListener('click', function(e){
    if(!nav.contains(e.target) && !toggle.contains(e.target)){
        nav.classList.remove('slide');
    }
    
})