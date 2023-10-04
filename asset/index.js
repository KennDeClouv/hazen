const toggle = document.querySelector('.burger input')
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
})
document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('slide');
    }
})

//Search

const searchButton = document.querySelector('.fa-solid.fa-search')
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-box')

searchButton.addEventListener('click', function () {
    searchForm.classList.toggle('active');
    searchBox.focus();
})

document.addEventListener('click', function (e) {
    if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})


//todo == Cart ==


const cartButton = document.querySelector('.cart-button')
const cartBox = document.querySelector('.shopping-cart')

cartButton.addEventListener('click',function(){
    cartBox.classList.toggle('activee')
})

document.addEventListener('click', function (e) {
    if (!cartBox.contains(e.target) && !cartButton.contains(e.target)) {
        cartBox.classList.remove('activee');
    }
})


//todo == Trash ==

const trashButton = document.querySelectorAll('.trash-button');
const trashItem = document.querySelector('.cart-item');

trashButton.forEach((btn) => {
    btn.addEventListener('click',function(){
        trashItem.style.display = "none";
    })
});

// trashButton.forEach((btn) => {
//     btn.addEventListener('click',function(){
//         trashItem.forEach((btn) =>{
//             trashItem.style.display = "none";
//         })
//     })
// });

//todo == Modal ==

const modall = document.querySelector('#myModal');
const btnn = document.querySelectorAll('.modal-button');
const spann = document.querySelector('.closeee');

btnn.forEach((btnn) => {
    btnn.addEventListener('click',function(e){
        modall.style.display = "block";
        modall.style.transform = "translateY(0%)";
        modall.style.opacity = "1";
        e.preventDefault();
    })
});

spann.addEventListener('click',function(e){
    // modall.style.display = "none";
    modall.style.transform = "translateY(100%)";
    modall.style.opacity = "0";
    
})