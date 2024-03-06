console.log("Success");
const x = document.getElementsByClassName("x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft");

for (let i = 0; i < x.length; i++) {
	if (x[i].innerHTML === "Poke Back") {
		x[i].click();
	}
}

setInterval(e => {
	location.reload();
}, 3000);