
$(document).ready(function(){
    PopUpHide();
});

function PopUpShow(){
    $("#popup1").show();
}

function PopUpHide(){
    $("#popup1").hide();
}

function counter () {
var results = 0;
	for(var i=1; i<=14; i++) {
		//перебор имен вопросов
		var nm = "op"+i;
		//получение массива объектов(вариантов ответов с значениями)
		var variants = document.getElementsByName(nm);
		//разбивка массива объектов на отдельные элементы
			for(var j=0, length = variants.length; j < length; j++) {
				//отделение отмеченных радио от неотмеченных
				if(variants[j].checked){
					var val = parseFloat(variants[j].value);
					console.log(val);
					results += val;
				}
				else {
				}
			}
	
	}
	prompt('summ = ' + results);
}