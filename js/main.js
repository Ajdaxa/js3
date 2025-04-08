// function count() {
// 	for (let i = 1; i < 3; i++) {
// 		alert('итерация: ' + i)
// 	}
// }

// let btn = document.getElementById('color')
// let colors = ['#ff0000', '#000000', '#787878']
// let arrayIndex = 0

// function bodyColor() {
// 	arrayIndex = (arrayIndex + 1) % colors.length
// 	document.body.style.backgroundColor = colors[arrayIndex]
// }

// btn.addEventListener('click', bodyColor)



// window.addEventListener('keydown', event => {
// 	switch (event.key.toLocaleLowerCase()) {
// 		case 'y':
// 			document.body.style.backgroundColor = 'yellow'
// 			break
// 		case 'b':
// 			document.body.style.backgroundColor = 'blue'
// 			break
// 		case 'b':
// 			document.body.style.backgroundColor = '#0000ff'
// 			break
// 		default:
// 			return
// 	}
// })

// document.body.onclick = function (event) {
// 	alert(event.type + ' на ' + event.currentTarget)
// 	alert("Координаты: " + event.clientX + ":" + event.clientY)
// }

let btnChangeText = document.querySelector('.changeText');function change() {
    btnChangeText.textContent = "Вы нажали на меня!";
}
btnChangeText.addEventListener("click", change);
let kvadrat = document.getElementById('square')
document.addEventListener("mousemove", event => {
	kvadrat.style.left = event.clientX + "px"
	kvadrat.style.top = event.clientY + "px"
})