//This file is my basic card logic
function basicCard (front, back){
	if(!(this instanceof basicCard)){
		return new basicCard(front, back);
	}
	this.front = front;
	this.back = back;
}
module.exports = basicCard;
let card1 = basicCard('front', 'back');
console.log(card1);