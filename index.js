var words = ["there", "they're"];
var replacements = ["their", "there"];

function replaceAllText() {
	for (var i = 0; i < words.length; i++)
		replaceText(words[i], replacements[i]);

	//var paragraphs = document.getElementsByTagName("p");
	//for (var i = 0; i < words.length; i++)
	//	replaceText(words[i], replacements[i]);
}

function replaceText(text, replacement) {
	var regex = new RegExp(text, 'gi');
	document.body.innerHTML = document.body.innerHTML.replace(regex, replacement);
}

replaceAllText();