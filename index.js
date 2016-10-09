var flagMap = {};
flagMap['there'] = 'dxt1';
flagMap['There'] = 'Dxt1';
flagMap['their'] = 'dxt2';
flagMap['Their'] = 'Dxt2';
flagMap['they\'re'] = 'dxt3';
flagMap['They\'re'] = 'Dxt3';
flagMap['your'] = 'dxt4';
flagMap['Your'] = 'Dxt4';
flagMap['you\'re'] = 'dxt5';
flagMap['You\'re'] = 'Dxt5';

var finalReplaceMap = {};
finalReplaceMap['dxt1'] = 'their';
finalReplaceMap['Dxt1'] = 'Their';
finalReplaceMap['dxt2'] = 'they\'re';
finalReplaceMap['Dxt2'] = 'They\'re';
finalReplaceMap['dxt3'] = 'there';
finalReplaceMap['Dxt3'] = 'There';
finalReplaceMap['dxt4'] = 'you\'re';
finalReplaceMap['Dxt4'] = 'You\'re';
finalReplaceMap['dxt5'] = 'your';
finalReplaceMap['Dxt5'] = 'Your';

var pageBody = document.body.innerHTML;

function replaceAllText() {
    
    for (var key in flagMap) {
        replaceText(key, flagMap[key]);
    }
    
    for (var key in finalReplaceMap) {
        replaceText(key, finalReplaceMap[key]);
    }
    
    document.body.innerHTML = pageBody;
}

function replaceText(text, replacement) {
	var regex = new RegExp(text, 'g');
	pageBody = pageBody.replace(regex, replacement);
}

replaceAllText();