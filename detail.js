let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

document.getElementById('product-name').innerHTML = product.name;
document.getElementById('product-price').innerHTML = product.price + " đ";
document.getElementById('product-img').src = product.img;
document.getElementById('product-des').innerHTML = product.description;
document.getElementById('product-brand').innerHTML= product.brand;
document.getElementById('product-screen').innerHTML = product.screen;
document.getElementById('product-os').innerHTML = product.OS;
document.getElementById('product-camera').innerHTML = product.Camera;
document.getElementById('product-ram').innerHTML=product.RAM;
document.getElementById('product-rom').innerHTML=product.ROM