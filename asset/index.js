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


//Cart


const cartButton = document.querySelector('.cart-button')
const cartBox =document.querySelector('.shopping-cart')

cartButton.addEventListener('click',function(){
    cartBox.classList.toggle('activee')
})
document.addEventListener('click', function (e) {
    if (!cartBox.contains(e.target) && !cartButton.contains(e.target)) {
        cartBox.classList.remove('activee');
    }
})


//Trash

const trashButton = document.querySelector('.trash-button');
const trashItem = document.querySelector('.cart-item');

trashButton.addEventListener('click',function(){
    trashItem.classList.toggle('remove')
})