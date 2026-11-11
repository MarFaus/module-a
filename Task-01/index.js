function checkPalindrome(string) {
    if (!string) return false;
    const cleanStr = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calc');
    const wordInput = document.getElementById('word');
    const messageEl = document.getElementById('message');

    if (calcBtn && wordInput && messageEl) {
        calcBtn.addEventListener('click', () => {
            const word = wordInput.value.trim();
            if (!word) {
                messageEl.innerHTML = 'Please enter a word.';
                return;
            }

            const isPal = checkPalindrome(word);
            if (isPal) {
                messageEl.innerHTML = `The word <i class="font-bold">${word}</i> is a palindrome.`;
            } else {
                messageEl.innerHTML = `The word <i class="font-bold">${word}</i> is not a palindrome.`;
            }
        });
    }
});
