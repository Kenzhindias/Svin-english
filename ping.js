function toPorcyLatin(text) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    var words = text.split(" ");
    var translatedText = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            var firstLetter = words[i].charAt(0);
            if (vowels.includes(firstLetter)) {
                translatedText += words[i] + 'yay';
            } else {
                translatedText += words[i].substring(1) + firstLetter + 'ay';
            }
        }
        if (i < words.length - 1) {
            translatedText += " ";
        }
    }
    return translatedText;
}

function translateToPigLatin() {
    var inputText = document.getElementById("inputText").value;
    var pigLatinText = toPorcyLatin(inputText);
    document.getElementById("output").innerText = pigLatinText;
}