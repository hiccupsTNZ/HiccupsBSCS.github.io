const menuRamen = ["Tantanmen Ramen", "Tonkotsu Ramen",  "Chashu Ramen","Shoyu Ramen", "Curry Ramen", "Seafood Ramen"];
const priceRamen = ["410","410","420","400","410","420"];

const menuRicemeals = ["Omurice", "Chashudon", "Gyudon Original" , "Gyudon Spicy", "Gyudon Cheese","Chahan","Tonkatsu"]
const priceRicemeals = ["350","300","320","330","340","300","400"];

const menuSushi = ["California Maki", "Spicy Tuna Maki", "Salmon Nigiri", "Ebi Nigiri", "Unagi Nigiri", "Tamagoyaki"];
const priceSushi = ["250","270","300","280","320","200"];

const menuSalmonSeries = ["Salmon Tartare", "Salmon Roll", "Salmon Kani Roll"];
const priceSalmonSeries = ["450","500","375"];

const menuAppetizers = ["Okonomiyaki","Yakisoba", "Miso Soup","Cheese Gyoza", "Korokke Balls(6pcs)"];
const priceAppetizers = ["210","220","50","240","300"];
document.getElementById("ramen-list").innerHTML = menuRamen.map((item, i) => `<tr><td>${item}</td><td>${priceRamen[i]}</td></tr>`).join("");
document.getElementById("ricemeals-list").innerHTML = menuRicemeals.map((item, i) => `<tr><td>${item}</td><td>${priceRicemeals[i]}</td></tr>`).join("");
document.getElementById("sushi-list").innerHTML = menuSushi.map((item, i) => `<tr><td>${item}</td><td>${priceSushi[i]}</td></tr>`).join("");
document.getElementById("salmonseries-list").innerHTML = menuSalmonSeries.map((item, i) => `<tr><td>${item}</td><td>${priceSalmonSeries[i]}</td></tr>`).join("");
document.getElementById("appetizers-list").innerHTML = menuAppetizers.map((item, i) => `<tr><td>${item}</td><td>${priceAppetizers[i]}</td></tr>`).join("");	

function hamburgerMenu() {
	var x = document.getElementById("links");
	if(x.style.display === "block") {
		x.style.display = "none";
	}
	else {
		x.style.display = "block";
	}
}
