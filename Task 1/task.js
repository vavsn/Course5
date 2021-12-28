'use script'	
let num = 10;
let s1 = "";

for (let i = 0; i <= num; i++) {
	if (i == 0) {
		s1 = "0 - это ноль";
	}
	else
	{
		s1 = i + " - нечетное число";
		if(i % 2 == 0)
		{
			s1 = i + " - четное число";
		}
	}
	console.log(s1);
}