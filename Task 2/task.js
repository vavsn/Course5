'use script'	

const post = {
	author: "John", //вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
};

const pst = post.comments.filter(function(p) {
	return p.userId == 10
});

console.log("post.author = " + post.author);

console.log("post.comments.rating.dislikes = " + pst[0].rating.dislikes);

const pst1 = post.comments.filter(function(p) {
	return p.userId == 5
});

console.log("post.comments.userId = " + pst1[0].userId);

console.log("post.comments.text = " + pst1[0].text);
