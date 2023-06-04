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


var dropdowns = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function () {
        if (window.innerWidth < 788) {
            return; // Если ширина окна меньше 788px, выходим из функции
        }
        this.classList.toggle("active");
    });
}

var dropdownContent = document.querySelector('.dropdown-content');
var phoneNumbers = dropdownContent.querySelectorAll('.dropdown-content .phone_number');
var dropdownLink = document.querySelector('.btn_phone__dropdown .phone_number');
var dropdownText = document.querySelector('.btn_phone__dropdown .phone_number');

phoneNumbers.forEach(function (number) {
    number.addEventListener('click', function (e) {
        if (window.innerWidth < 788) {
            return; // Если ширина окна меньше 788px, выходим из функции
        }

          const phoneNumberDropdown = dropdownText.innerText;
        dropdownText.textContent = number.textContent;
        number.textContent = phoneNumberDropdown;

        // Заменяем href атрибут в btn_phone__dropdown
        dropdownLink.href = number.href
    });
});

const menu_burger = document.querySelector('.burger');
const menu_burgerBtn = document.querySelector('.header_burger__button');

menu_burgerBtn.addEventListener('click', function (e){
    menu_burger.classList.toggle('open');
    body.classList.toggle('block');
    menu_burgerBtn.classList.toggle('active')
});

