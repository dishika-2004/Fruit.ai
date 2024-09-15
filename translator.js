document.getElementById('translatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const textInput = document.getElementById('textInput').value.trim();
    const language = document.getElementById('languageSelect').value;
    const translatedTextElement = document.getElementById('translatedText');

    // Dummy translations (for demo purposes)
    const translations = {
        "es": {
            "hello": "Hola",
            "thank you": "Gracias",
            "goodbye": "Adiós"
        },
        "fr": {
            "hello": "Bonjour",
            "thank you": "Merci",
            "goodbye": "Au revoir"
        },
        "de": {
            "hello": "Hallo",
            "thank you": "Danke",
            "goodbye": "Auf Wiedersehen"
        },
        "it": {
            "hello": "Ciao",
            "thank you": "Grazie",
            "goodbye": "Addio"
        }
    };

    if (textInput) {
        // Convert input to lowercase for case-insensitive matching
        const lowerCaseText = textInput.toLowerCase();
        
        // Retrieve the translation for the selected language
        const translatedText = translations[language][lowerCaseText];

        if (translatedText) {
            translatedTextElement.textContent = `Translated Text: ${translatedText}`;
        } else {
            // Reverse the text if no translation is found
            const reversedText = lowerCaseText.split('').reverse().join('');
            translatedTextElement.textContent = `Translated Text: ${reversedText}`;
        }
    } else {
        translatedTextElement.textContent = 'Please enter some text to translate.';
    }
});
