'use script'	
let val, pow
val = parseInt(prompt("Введите число: "))
pow = parseInt(prompt("Введите степень: "))

function power(val, pow)
{
	if (pow == 0)
	{
		return 1;
	}
	return val * power(val, --pow) 
alert("pow = " +pow)    
}

alert(power(val, pow))    