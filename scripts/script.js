const menuRamen = ["Tantanmen Ramen", "Tonkotsu Ramen",  "Chashu Ramen","Shoyu Ramen", "Curry Ramen", "Seafood Ramen"];
const priceRamen = ["410","410","420","400","410","420"];

const menuRicemeals = ["Omurice", "Chashudon", "Gyudon Original" , "Gyudon Spicy", "Gyudon Cheese","Chahan","Tonkatsu"]
const priceRicemeals = ["350","300","320","330","340","300","400"];
document.getElementById("ramen-list").innerHTML = menuRamen.map((item, i) => `<tr><td>${item}</td><td>${priceRamen[i]}</td></tr>`).join("");
document.getElementById("ricemeals-list").innerHTML = menuRicemeals.map((item, i) => `<tr><td>${item}</td><td>${priceRicemeals[i]}</td></tr>`).join("");
