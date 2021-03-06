const price = document.querySelector("#price");
const qty = document.querySelector("#qty");
const total = document.querySelector("#total");

function changeTotal(price, qty) {
	total.value = Number(price) * Number(qty);
	total.value = (Math.round(total.value * 100) / 100).toFixed(2);
}

price.addEventListener("keyup", (e) => {
	changeTotal(price.value, qty.value);
});

qty.addEventListener("keyup", () => {
	changeTotal(price.value, qty.value);
});
