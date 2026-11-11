function LongestWord(text) {
    if (!text) return '';
    const words = text.match(/[a-zA-Z0-9а-яА-Я]+/g) || [];
    if (words.length === 0) return '';
    return words.reduce((longest, current) => 
        current.length > longest.length ? current : longest, '');
}

document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calc');
    const textInput = document.getElementById('text');
    const messageEl = document.getElementById('message');

    if (calcBtn && textInput && messageEl) {
        calcBtn.addEventListener('click', () => {
            const text = textInput.value.trim();
            if (!text) {
                messageEl.innerHTML = 'Please enter a text.';
                return;
            }

            const longest = LongestWord(text);
            messageEl.innerHTML = `The longest word is <i class="font-bold">${longest}</i>.`;
        });
    }
});
