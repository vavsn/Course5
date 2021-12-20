'use script'	
let a, b

function sum(num1, num2)
{
	return num1 + num2
}

function minus(num1, num2)
{
	return num1 - num2
}

function mult(num1, num2)
{
	return num1 * num2
}

function div(num1, num2)
{
	if (num2 == 0)
	{
		return NaN    
	}
	return num1 / num2
}
a =parseInt(prompt("Введите значение а: "))
b =parseInt(prompt("Введите значение b: "))

alert("Сумма = " + sum(a, b))    
alert("Разница = " + minus(a, b))    
alert("Произведение = " + mult(a, b))    
alert("Деление = " + div(a, b))    
