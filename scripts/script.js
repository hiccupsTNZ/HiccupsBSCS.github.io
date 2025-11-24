const menuRamen = ["Tantanmen Ramen", "Tonkotsu Ramen",  "Chashu Ramen","Shoyu Ramen", "Curry Ramen", "Seafood Ramen"];
const priceRamen = [410,410,420,400,410,420];

const menuRicemeals = ["Omurice", "Chashudon", "Gyudon Original" , "Gyudon Spicy", "Gyudon Cheese","Chahan","Tonkatsu"]
const priceRicemeals = [350,300,320,330,340,300,400];

const menuSushi = ["California Maki", "Spicy Tuna Maki", "Salmon Nigiri", "Ebi Nigiri", "Unagi Nigiri", "Tamagoyaki"];
const priceSushi = [250,270,300,280,320,200];

const menuSalmonSeries = ["Salmon Tartare", "Salmon Roll", "Spicy Salmon Roll", "Salmon Kani Roll"];
const priceSalmonSeries = [450,500,450,375];

const menuAppetizers = ["Okonomiyaki","Yakisoba", "Miso Soup","Cheese Gyoza", "Korokke Balls(6pcs)","Criss-cut Fries","Fries and Nuggets","Cold Ramen Salad","Kani Mango Salad"];
const priceAppetizers = [210,220,50,240,300,150,150,230,240];

const cartItems = [];
const cartItemslist = document.getElementById("cart-items");


let cartTotal = 0;

document.getElementById("ramen-list").innerHTML = menuRamen.map((item, i) => `<tr><td><a href="#" onclick="addItem('${item}'); addPrice(${priceRamen[i]}); return false;">${item}</a></td><td>${priceRamen[i]}</td></tr>`).join("");
document.getElementById("ricemeals-list").innerHTML = menuRicemeals.map((item, i) => `<tr><td><a href="#" onclick="addItem('${item}'); addPrice(${priceRicemeals[i]}); return false;">${item}</a></td><td>${priceRicemeals[i]}</td></tr>`).join("");
document.getElementById("sushi-list").innerHTML = menuSushi.map((item, i) => `<tr><td><a href="#" onclick="addItem('${item}'); addPrice(${priceSushi[i]}); return false;">${item}</a></td><td>${priceSushi[i]}</td></tr>`).join("");
document.getElementById("salmonseries-list").innerHTML = menuSalmonSeries.map((item, i) => `<tr><td><a href="#" onclick="addItem('${item}'); addPrice(${priceSalmonSeries[i]}); return false;">${item}</a></td><td>${priceSalmonSeries[i]}</td></tr>`).join("");
document.getElementById("appetizers-list").innerHTML = menuAppetizers.map((item, i) => `<tr><td><a href="#" onclick="addItem('${item}'); addPrice(${priceAppetizers[i]}); return false;">${item}</a></td><td>${priceAppetizers[i]}</td></tr>`).join("");

function updateCart() {
document.getElementById('cart-list').innerHTML = cartItems.map((item) => `<tr><td>${item}</td><tr>`).join('');
}

function hamburgerMenu() {
	var x = document.getElementById("links");
	if(x.style.display === "block") {
		x.style.display = "none";
	}
	else {
		x.style.display = "block";
	}
}

function checkout() {
	alert("Thank you for your order!");
}

function addItem(itemName) {
	cartItems.push(String(itemName));
	updateCart();
}

function addPrice(price) {
	cartTotal += price;
	const totalEl = document.getElementById('cart-total');
	if (totalEl) totalEl.innerText = cartTotal;
	return cartTotal;
}