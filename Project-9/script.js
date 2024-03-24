let names = [];
let prices = [];
let imgs = [];

let animeData = [];

let input = document.getElementById('inputField');
let overlayField = document.getElementById('overlayField');
let searchField = document.getElementById('searchField');

let name = document.getElementsByClassName('name');
let price = document.getElementsByClassName('price');
let img = document.getElementsByClassName('img');

input.addEventListener('focus', function () {
    overlayField.style.display = 'block'; // will make that black overly visible
    document.body.style.overflow = 'hidden'; // to prevent scrolling
});
input.addEventListener('blur', function () {
    overlayField.style.display = 'none'; // back to normal state
    document.body.style.overflow = ''; // to enable scrolling
});

document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://mangaworld.onrender.com/';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(obj => {
                names.push(obj.name);
                prices.push(obj.price);
                imgs.push(obj.img);
            });
            for (let i = 0; i < names.length; i++) {
                animeData.push({ name: names[i], price: prices[i], img: imgs[i] });
            }
            addAnime(animeData);

        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        });
    addToCart();
});

input.addEventListener('input', function () {
    let inputValue = input.value.trim(); // it will remove the lending and trailing whitespace
    if (inputValue === '') {
        searchField.style.display = 'none';
        return;
    }
    overlayField.style.display = 'block';
    document.body.style.overflow = 'hidden';

    //created a new array with input field
    let newNames = names.filter(value => value.toLowerCase().startsWith(inputValue.toLowerCase()));
    let temp = '';
    newNames.forEach(function (val) {
        temp += `<div class="searchText"><i class="fa-solid fa-magnifying-glass"></i> <span class="text">${val}</span> </div>`;
    });
    if (newNames.length === 0) {
        searchField.style.display = 'none';
        return;
    }
    searchField.style.display = 'block';
    searchField.innerHTML = temp;
});

function addAnime(animeData) {
    let animeHTML = ""; // Initialize animeHTML
    animeData.forEach(function (anime, index) {
        animeHTML += `<div class="main-suggestion">
            <div data-index=${index} class="img-suggestion img"><img src="${anime.img}" style="width: 100%;"></div>
            <div class="text-suggestion">
                <h4 data-index=${index} class="name-suggestion name">${anime.name}</h4>
                <div class="price-addBtn">
                    <h5 class="price-suggestion price">${anime.price}</h5>
                    <i data-index=${index} class="fa-solid fa-plus add-to-cart"></i>
                </div>
            </div>
        </div>`;
    });
    document.querySelector('.suggestions').innerHTML = animeHTML; // Assign animeHTML to innerHTML
}

let cart = [];

let total = 0;
function addToCart() {
    document.querySelector('.suggestions').addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            cart.push(animeData[event.target.dataset.index]);
            updateCart();
            total += animeData[event.target.dataset.index].price;
            document.querySelector('.total').innerHTML = `<h2>Total: ${total}</h2>`;
        }
    });
};
function updateCart() {
    let cartItems = "";
    cart.forEach(function (items, index) {
        cartItems += `<div class="main-suggestion">
            <div data-index=${index} class="img-suggestion img"><img src="${items.img}" style="width: 100%;"></div>
            <div class="text-suggestion">
                <h4 data-index=${index} class="name-suggestion name">${items.name}</h4>
                <div class="price-addBtn">
                    <h5 class="price-suggestion price">${items.price}</h5>
                </div>
            </div>
        </div>`;
    });
    document.querySelector('.cart-items').innerHTML = cartItems;
};

document.querySelector('#shoppingcart').addEventListener('click', function () {
    cartField.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
document.querySelector('#cut').addEventListener('click', function () {
    cartField.style.display = 'none';
    document.body.style.overflow = 'visible';
});