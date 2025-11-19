document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-carousel', {
		perPage    : 2,
		breakpoints: {
			640: {
				perPage: 1,
			},
		},
  } ).mount();
} );

const menuRamen = ["Tantanmen Ramen", "Tonkotsu Ramen",  "Chashu Ramen","Shoyu Ramen", "Curry Ramen", "Seafood Ramen"];
const priceRamen = ["410","410","420","400","410","420"];
document.getElementById("ramen-list").innerHTML = menuRamen.map((item, i) => `<tr><td>${item}</td><td>${priceRamen[i]}</td></tr>`).join("");
