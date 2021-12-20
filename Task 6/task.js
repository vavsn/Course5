'use script'	
let a, b, op

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

function mathOperation(arg1, arg2, operation)
{
	switch(operation)
	{
		case 'плюс':
		case '+':
			return("Сумма = " + sum(a, b))    
			break;
		case 'минус':
		case '-':
			return("Разница = " + minus(a, b))    
			break;
		case 'умножить':
		case '*':
			return("Произведение = " + mult(a, b))    
			break;
		case 'делить':
		case '/':
			return("Деление = " + div(a, b))    
			break;
		default:
			return "Нераспознанная операция";
	}	
			
			
	
}


a =parseInt(prompt("Введите значение а: "))
b =parseInt(prompt("Введите значение b: "))
op =prompt("Введите операцию (плюс, минус, умножить, делить): ")

alert(mathOperation(a,b,op))