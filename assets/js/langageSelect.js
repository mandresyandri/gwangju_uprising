document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        if (selectedLanguage === 'en') {
            window.location.href = '/en/index.html';
        } else if (selectedLanguage === 'fr') {
            window.location.href = '/index.html';
        } else if (selectedLanguage === 'kr') {
            window.location.href = '/kr/index.html';
        }
    });
});