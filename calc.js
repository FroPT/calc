/*
 * Implement all your JavaScript in this file!
 */

var currentValue = [];
var recolhaPrimeiroOperando = true;
var recolhaSegundoOperando = false;
var primeiroOperando = [];
var operador = '';
var segundoOperando = [];
var display = document.getElementById('display').innerHTML;


$('.button').on('click', function(e){
	var btn = e.target.value; // get the value
	console.log(btn);
	if (btn >= '0' && btn <= '9') { // see if it's a number. if so, call handleNumber();
		//console.log('number', e.target.innerHTML);
		if (recolhaPrimeiroOperando) {
			primeiroOperando.push(btn);
			display = primeiroOperando.join("");
			$('input[name="display"]').val(primeiroOperando.join(""));
		} else if (!recolhaPrimeiroOperando && recolhaSegundoOperando) {
			segundoOperando.push(btn);
			display = segundoOperando.join("");
			$('input[name="display"]').val(segundoOperando.join(""));
		} else if (!recolhaPrimeiroOperando && !recolhaSegundoOperando) {
			console.log('clearing');
			currentValue = [];
			primeiroOperando = [];
			recolhaPrimeiroOperando = true;
			primeiroOperando.push(btn);
			display = primeiroOperando.join("");
			$('input[name="display"]').val(primeiroOperando.join(""));
			recolhaSegundoOperando = false;
			segundoOperando = [];
			operador = '';
		}
		
	} 
	else if(btn == '=' && recolhaSegundoOperando && segundoOperando.length > 0) { // if not, than it must be an operator
		recolhaSegundoOperando = false;
		var operando_A = Number(primeiroOperando.join(""));
		var operando_B = Number(segundoOperando.join(""));
		var x = eval(operando_A + operador + operando_B);
		$("#display").val(x);
		
		console.log(operando_A + operador + operando_B);
		console.log(x);
		console.log('primeiroOperando ' + operando_A + ' segundoOperando ' + operando_B);
		console.log('operador ' + operador);

		currentValue = x;
		primeiroOperando = [];
		primeiroOperando.push(currentValue);
		recolhaPrimeiroOperando = false;
		segundoOperando = [];
		recolhaSegundoOperando = true;
		operador = '';
		
	} else if (btn != '=' && btn != 'cls' && isNaN(btn) && segundoOperando.length > 0 ) { 
		recolhaSegundoOperando = false;
		var operando_A = Number(primeiroOperando.join(""));
		var operando_B = Number(segundoOperando.join(""));
		var x = eval(operando_A + operador + operando_B);
		$("#display").val(x);
		currentValue = x;
		primeiroOperando = [];
		primeiroOperando.push(currentValue);
		recolhaPrimeiroOperando = false;

		operador = btn;
		segundoOperando = [];
		recolhaSegundoOperando = true;
	} else if (btn == 'cls') {
		$("#display").val('');
		currentValue = [];
		primeiroOperando = [];
		segundoOperando = [];
		operador = '';
		recolhaPrimeiroOperando = true;
		recolhaSegundoOperando = false;
	} else if (btn.innerHTML == '&#247;' && segundoOperando == 0) {
		$("#display").val('INFINITY');
	} else {
		operador = btn;
		recolhaPrimeiroOperando = false;
		recolhaSegundoOperando = true;
	}
});



