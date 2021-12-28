'use script'	

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

products.forEach(function(products)
{
	console.log(products.id + " " + products.price);
});

products.forEach(function(products)
{
	products.price *= 1.15;
});

products.forEach(function(products)
{
	console.log(products.id + " " + products.price);
});

