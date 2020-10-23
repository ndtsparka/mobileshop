//ảnh minh họa
let imagePreviewDOM = document.getElementById('image-preview');
//Tên sản phẩm và gía tiền
let phoneNamePriceDOM = document.getElementById('phone-name-price');
//Thông tin sản phẩm
let phoneDescriptionDOM = document.getElementById('desc');



imagePreviewDOM.innerHTML = `<a href='#'><img src='${products[0].img}'></a>`;

phoneNamePriceDOM.innerHTML = `
	<a href='#'>${products[0].name}</a>
	<span>${products[0].price}</span>
`;

phoneDescriptionDOM.innerHTML = `
	<ul>
		<li>${products[0].description}</li>
	</ul>
`;

//Tính tổng giá tiền

