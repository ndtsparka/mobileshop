
let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (p) {
    return p.name === selectedName;
});
document.getElementById('phone-name-price')
document.getElementById('image-preview').src=product.img;
document.getElementById('phone-price').innerHTML=product.price;
document.getElementById('phone-name').innerHTML=product.name;


function success(e){
	e.preventDefault();
	document.getElementById('cart-success').style.display='block';
}

function comehome(){
    window.location.href = 'home.html';
}

//Tăng giảm số lượng sản phẩm
//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var valueCount

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
		document.querySelector(".minus-btn").classList.remove("disabled")
	}
	total(price, valueCount);
})

function total(price, count){
	document.getElementById('').innerHTML = price * count;
}
//minus button
document.querySelector(".minus-btn").addEventListener("click", function() {
	//getting value of input
	valueCount = document.getElementById("quantity").value;

	//input value increment by 1
	valueCount--;

	//setting increment input value
	document.getElementById("quantity").value = valueCount

	if (valueCount == 1) {
		document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
	}
	total(price, valueCount);

})