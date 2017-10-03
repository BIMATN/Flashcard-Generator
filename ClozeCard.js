//This File is my clozer logic
function clozeCard (text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = function(){
		let charNum = text.indexOf(cloze);
		if (charNum != -1){
			let partial = text.replace(cloze, '...');
			return partial;
		}
		else{
			console.log('The cloze does not appear in the text');
		}
	};
}
module.exports = clozeCard;