products = [//создает массив всех продуктов
	{
		name: "Cappuchino",
		price: 100
	},
	{
		name: "Americano",
		price: 110
	},
	{
		name: "Espresso",
		price: 120
	},
	{
		name: "Latte",
		price: 130
	},
	{
		name: "Mochachino",
		id: "mochachino",
		price: 140
	},
	{
		name: "Macchiato",
		price: 150
	},
	{
		name: "Mokko",
		price: 160
	},
	{
		name: "Hotchocolate",
		price: 170
	}
];

for(var i = 0; i < products.length; i++){
    var product = products[i];// переменная product - это один элемент массива products
    drinkTable.innerHTML += `
	<tr><td>${product['name']}</td> <td>${product['price']}р</td>
		<td><input type="checkbox" class="mCheckbox" value=${product['price']}></td></tr><br>`

};

var mCofemachine = new Cofemachine(0, 0);
var mCheckbox = document.getElementsByClassName('mCheckbox');
for(var i=0; i<mCheckbox.length;i++){
	mCheckbox[i].onchange = function(event){
			if(event.target.checked){
				mCofemachine.addCofe(parseInt(event.target.value));
			}else{
				mCofemachine.addCofe(parseInt(-event.target.value));
			}
		}
}

var money = document.getElementById('money');
money.addEventListener("change", function(e){
	mCofemachine.setCashe(money.value);
});
var mButton = document.getElementById('mButton');
mButton.addEventListener("click", function(e){
	if(mCofemachine.CofePrice()>mCofemachine.getCashe()){
		itog.innerHTML = `Недостаточно средств`;
	}else{
		itog.innerHTML = `Итого = ${mCofemachine.CofePrice()}`
		sdacha.innerHTML = `Сдача = ${mCofemachine.getBackMoney()}`
	}

});

document.getElementById('sugar').onclick = function() {
	mCofemachine.addSugar(this.checked);
}


function Cofemachine(cofePrice, clientCashe){
	this.clientCashe = clientCashe;
	this.cofePrice = cofePrice;

	this.addSugar = function(IsChecked){
		if(IsChecked){
			cofePrice += 10;
		}else{
			cofePrice -=10;
		}
	}
	this.addCofe = function(cofeP){
		console.log(cofeP);
		cofePrice += cofeP;
	}
	this.CofePrice = function(){
		return cofePrice;
	}
	this.setCashe = function(cashe){
		clientCashe = cashe;
	}
	this.getCashe = function(){
		return clientCashe
	}
	this.getBackMoney = function(){
		return (clientCashe-cofePrice);
	}

}
