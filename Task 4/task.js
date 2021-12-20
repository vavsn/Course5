'use script'	
let a
let s = "Введено число "
a =parseInt(prompt("Введите значение от 0 до 15: "))
switch(a)
{
	case 0:
		s +="ноль";
		break;
	case 1:
		s +="один";
		break;
	case 2:
		s +="два";
		break;
	case 3:
		s +="три";
		break;
	case 4:
		s +="четыре";
		break;
	case 5:
		s +="пять";
		break;
	case 6:
		s +="шесть";
		break;
	case 7:
		s +="семь";
		break;
	case 8:
		s +="восемь";
		break;
	case 9:
		s +="девять";
		break;
	case 10:
		s +="десять";
		break;
	case 11:
		s +="одиннадцать";
		break;
	case 12:
		s +="двенадцать";
		break;
	case 13:
		s +="тринадцать";
		break;
	case 14:
		s +="четырнадцать";
		break;
	case 15:
		s +="пятнадцать";
		break;
	default:
		s +="за пределами разрешенного диапазона";
}	
alert(s)    