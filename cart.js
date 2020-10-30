
let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

document.getElementById('image-preview').src=product.img;
document.getElementById('tongtien').innerHTML=product.price;


function success(){
    document.getElementById('cart-success').style.display='block';
}

function comehome(){
    window.location.href = 'home.html';
}