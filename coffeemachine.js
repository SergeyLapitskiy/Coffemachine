products = [//создает массив всех продуктов
	{
		name: "Cappuchino",
		id: "cappuchino",
		price: 100
	},
	{
		name: "Americano",
		id: "americano",
		price: 110
	},
	{
		name: "Espresso",
		id: "espresso",
		price: 120
	},
	{
		name: "Latte",
		id: "latte",
		price: 130
	},
	{
		name: "Mochachino",
		id: "mochachino",
		price: 140
	},
	{
		name: "Macchiato",
		id: "macchiato",
		price: 150
	},
	{
		name: "Mokko",
		id: "moka",
		price: 160
	},
	{
		name: "Hotchocolate",
		id: "hot-chocolate",
		price: 170
	}
];

for(var i = 0; i < products.length; i++){
    var product = products[i];// переменная product - это один элемент массива products
    drinkTable.innerHTML += ` 
	<tr><td>${product['name']}</td> <td>${product['price']}р</td> <td><input type="checkbox" class="mCheckbox"
		
	></td></tr><br>
    `

};

var mCofemachine = new Cofemachine(0, 0);
/*var mCheckbox = document.getElementsByClassName('mCheckbox');
console.log(mCheckbox);
window.onclick = function() {
    for(var i=0; i<mCheckbox.length; i++){
        if (mCheckbox[i].checked) {
      		console.log(products[i].price);
    	}
	}
}*/

var money = document.getElementById('money');
money.addEventListener("change", function(e){
	mCofemachine.addCashe(money.value);
});
var mButton = document.getElementById('mButton');
mButton.addEventListener("click", function(e){
	itog.innerHTML = `Итого = ${mCofemachine.cPrice()}`
	
});

document.getElementById('sugar').onclick = function() {
	console.log(mCofemachine.addSugar(this.checked));

}


function Cofemachine(cofePrice, clientCashe){
	this.clientCasshe = clientCashe;
	this.cofePrice = cofePrice;

	this.addSugar = function(IsChecked){
		if(IsChecked){
			cofePrice += 10;
			return cofePrice; 
		} 
		return cofePrice -=10;
	}
	this.cPrice = function(){
		return cofePrice; 
	}
	this.addCashe = function(cashe){
		console.log(cashe);
		clientCasshe = cashe;
	}

}