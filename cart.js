let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

document.getElementById('image-preview').src=product.img;
document.getElementById('phone-price').innerHTML=changeprice(product);
document.getElementById('phone-name').innerHTML=product.name;
document.getElementById('total-price').innerHTML=changeprice(product);
document.getElementById('order-value').innerHTML=changeprice(product);
document.getElementById('desc').innerHTML = `<span>${product.description}</span>`;

function success(e){
	e.preventDefault();
	document.getElementById('cart-success').style.display='block';
}

function comehome(){
    window.location.href = 'index.html';
}

//Tăng giảm số lượng sản phẩm
//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "");

//taking value to increment decrement input value
var valueCount 

//Lấy giá của sản phẩm
var price = product.price;

//Tính tổng giá
function priceTotal(){
	var total = valueCount * price;
	document.getElementById('total-price').innerHTML =totalprice(total);
	document.getElementById('order-value').innerHTML= totalprice(total);
}
// console.log(total);
//plus button
document.querySelector(".plus-btn").addEventListener("click", function() {
	//getting value of input
	valueCount = document.getElementById("quantity").value;

	//input value increment by 1
	valueCount++;

	//setting increment input value
	document.getElementById("quantity").value = valueCount;

	if (valueCount > 1) {
		document.querySelector(".minus-btn").removeAttribute("disabled");
	}
	
	//Tính giá
	priceTotal();
})

//minus button
document.querySelector(".minus-btn").addEventListener("click", function() {
	//getting value of input
	valueCount = document.getElementById("quantity").value;

	//input value increment by 1
	valueCount--;

	//setting increment input value
	document.getElementById("quantity").value = valueCount

	if (valueCount == 1) {
		document.querySelector(".minus-btn").setAttribute("disabled", "")
	}

	//Tính giá
	priceTotal();
})


function changeprice(v){

	return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v.price);
   }
function totalprice(v){
	return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);
}