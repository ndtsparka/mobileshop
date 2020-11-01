let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

document.getElementById('product-name').innerHTML = product.name;
document.getElementById('product-price').innerHTML = changeprice(product);
document.getElementById('product-img').src = product.img;
document.getElementById('product-des').innerHTML = product.description;
document.getElementById('product-brand').innerHTML= product.brand;
document.getElementById('product-screen').innerHTML = product.screen;
document.getElementById('product-os').innerHTML = product.OS;
document.getElementById('product-camera').innerHTML = product.Camera;
document.getElementById('product-ram').innerHTML=product.RAM;
document.getElementById('product-rom').innerHTML=product.ROM;
document.getElementById('buynow').innerHTML = `<div class="buynow" onclick="viewDetail('${product.name}')"><i class="fas fa-shopping-cart" ></i> Mua ngay</div>`;

function viewDetail(name){
    localStorage.setItem('selected', name);
    localStorage.setItem('products', JSON.stringify(products));
    window.location.href = 'cart.html';
}

function getRelative() {
    let relative = document.getElementById('rela');
    relative.innerHTML = '';
    let phoneDisplayed = [];
    for (let i = 0; i < 26; i+=7) {

        let r = getRndInteger(0, products.length);
        while(phoneDisplayed.includes(r)){
            r = getRndInteger(0, products.length);
        }
        phoneDisplayed.push(r);
        let p = products[r];
        let html = `
            <div onclick="viewDetailsub('${p.name}')" class="rela-phone">
                <img id="rela-img" src="${p.img}" alt="" >
                <p id="rela-name">${p.name}</p>
            </div>
        `;
        relative.innerHTML += html;
    }
}
getRelative();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function viewDetailsub(name){
    localStorage.setItem('selected',name);
    window.location.href='detail.html'
}


function changeprice(v){

 return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v.price);
}
