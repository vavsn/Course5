'use script'	
let a, b, r
a =parseInt(prompt("Введите значение а: "))
b =parseInt(prompt("Введите значение b: "))
if (a > 0 & b > 0)
{
	r = a - b
}
else
	if (a < 0 & b < 0)
	{
		r = a * b
	}
		else
		{
			r = a + b
		}

alert(r)    