'use script'	
let a

const products = [
	{
	id: 3,
	price: 127,
	photos: [
		"1.jpg",
		"2.jpg",
		]
	},
	{
	id: 5,
	price: 499,
	photos: []
	},
	{
	id: 10,
	price: 26,
	photos: [
		"3.jpg"
		]
	},
	{
	id: 8,
	price: 78,
	},
];

const photos = products.filter(function(prod) {
	return "photos" in prod && prod.photos.length > 0
});

console.log(photos);

const sorted = products.sort(function(it1, it2) {
	return it1.price - it2.price;
});

console.log(sorted);

