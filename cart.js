
let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

document.getElementById('image-preview').src=product.img;
document.getElementById('phone-price').innerHTML=product.price;
document.getElementById('phone-name').innerHTML=product.name;

