const languageButtons = document.querySelectorAll('.menu-social__lang-button');
const languagePopup = document.querySelector('.menu-social__lang');
const languages = document.querySelectorAll('.menu-social__lang-drop a');
const body = document.querySelector('body');

languageButtons.forEach(function (languageButton) {
    languageButton.addEventListener('click', function (e) {
        languagePopup.classList.toggle('active');

    });
});
languageButtons.forEach(function (languageButton) {
    document.addEventListener('click', function (e) {
        if (e.target !== languageButton && e.target !== document.querySelector('.menu-social__lang-button span a') && e.target !== document.querySelector('.menu-social__lang-button img')) {
            languagePopup.classList.remove('active');
        }
    })
});


languages.forEach(function (language) {
    language.addEventListener('click', function (e) {
        if (language.classList.contains('ua')) {
            document.querySelector('.menu-social__lang-button span').textContent = 'UA';
            language.textContent = 'RU';
            language.classList.remove('ua');
            language.classList.add('en');
        } else {
            document.querySelector('.menu-social__lang-button span').textContent = 'RU';
            language.textContent = 'UA';
            language.classList.remove('en');
            language.classList.add('ua');
        }
    });
});