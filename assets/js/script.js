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

const accordionContainer = document.querySelector(".questions__content");

accordionContainer.addEventListener("click", event => {
    if (event.target.classList.contains("accordion")) {
        const button = event.target;
        const accordionText = button.nextElementSibling;

        // Check if the button is currently active
        const isActive = button.classList.contains("active");

        closeAllAccordions();

        // Toggle the active class and visibility of accordionText
        button.classList.toggle("active", !isActive);
        accordionText.classList.toggle("active", !isActive);
    }
});

function closeAllAccordions() {
    const activeButtons = accordionContainer.querySelectorAll(".accordion.active");

    activeButtons.forEach(button => {
        button.classList.remove("active");
        const accordionText = button.nextElementSibling;
        accordionText.classList.remove("active");
    });
}

function showMap(event) {
    event.preventDefault();
    var links = document.querySelectorAll('.departament_address a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.classList.contains('none')) {
            link.classList.remove('none');
        }
    }

    this.closest('.departament_address a').classList.add('none')
    var mapSrc = this.parentNode.getAttribute("data-mup");
    var mapContainer = document.querySelector(".department_content__block_mup");
    mapContainer.innerHTML = mapSrc;
}

var links = document.querySelectorAll(".departament_address a");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showMap);
}


var links_offer = document.querySelectorAll('.offers_content__block a');
const popup_offer = document.querySelector('.popup_offer');
const popup_offerTxt = document.querySelector('.popup_offer__title strong');

for (var e = 0; e < links_offer.length; e++) {
    links_offer[e].addEventListener('click', function (event) {
        event.preventDefault();
        var dataOffer = this.parentNode.querySelector('span').getAttribute('data-offer');
        popup_offer.classList.add('active');
        body.classList.add('block');
        popup_offerTxt.innerText = dataOffer;
    });
}

const popup_offerClose = document.querySelector('.popup_offer__close');
const popup_thanksClose = document.querySelectorAll('.popup_thanks__close');
const button_offer = document.querySelector('.button_offer');
const popup_thanks = document.querySelector('.popup_thanks.offer');
const popup_fastThanks = document.querySelector('.popup_thanks.fast');
const popup_questionThanks = document.querySelector('.popup_thanks.question');
popup_thanksClose.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        if (popup_thanks.classList.contains('active')) {
            popup_thanks.classList.remove('active');
        }

        if (popup_fastThanks.classList.contains('active')) {
            popup_fastThanks.classList.remove('active');
        }
        if (popup_questionThanks.classList.contains('active')) {
            popup_questionThanks.classList.remove('active');
        }

        document.body.classList.remove('block');
    });
});


popup_offerClose.addEventListener('click', function (e) {
    e.preventDefault();
    popup_offer.classList.remove('active');
    body.classList.remove('block');
});


document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('.numberInput input');
    var arrows = document.querySelectorAll('.numberInput .arrow');

    arrows.forEach(function (arrow) {
        arrow.addEventListener('click', function () {
            var input = this.parentNode.querySelector('input');
            var value = parseInt(input.value, 10);

            if (this.classList.contains('up')) {
                if (input.id === 'hours' && value < 24) {
                    input.value = value + 1;
                } else if (input.id === 'minutes' && value < 60) {
                    input.value = value + 1;
                }
            } else if (this.classList.contains('down')) {
                if (value > 0) {
                    input.value = value - 1;
                }
            }

            if (input.value.length === 1) {
                input.value = '0' + input.value;
            }
        });
    });
});

const popup_fastClose = document.querySelector('.popup_fast__close');
const popup_fast = document.querySelector('.popup_fast')
const popup_fastBtn = document.querySelector('.popup_fast .button_offer__fast')

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        popup_fast.classList.add('active');
    }, 15000);
});

popup_fastClose.addEventListener('click', function (e) {
    e.preventDefault();
    popup_fast.classList.remove('active');
});


const popup_questionClose = document.querySelector('.popup_question__close');
const popup_question = document.querySelector('.popup_question')
const questionBtn = document.querySelector('.questions_button')
const popup_questionBtn = document.querySelector('.button_offer__question')

questionBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup_question.classList.add('active');
    body.classList.add('block');
});
popup_questionClose.addEventListener('click', function (e) {
    e.preventDefault();
    popup_question.classList.remove('active');
    body.classList.remove('block');
});


(function () {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
})();

var phonevalidate = document.querySelector('.phone_validate_question');
var phonevalidateInputfast = document.querySelector('.phone_validate_fast');
var phonevalidateInputoffer = document.querySelector('.phone_validate_offer');
var regex = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/;
var phoneNumberInput = document.getElementById("question_phone");
var fastNumberInput = document.getElementById("phone_fast");
var uphoneNumberInput = document.getElementById("uphone");

function validatePhoneNumber1() {
    var phoneNumber = phoneNumberInput.value.trim().replace(/[() ]/g, '');


    if (regex.test(phoneNumber)) {
        console.log("Номер телефона действителен.");
        phonevalidate.classList.remove('active');

        function onClick(token) {
            var count = 0;
            $(".g-recaptcha").each(function () {
                grecaptcha.reset(count);
                count++;
            });
        }

// Определение onloadCallback1 глобально
        function onloadCallback1() {
            grecaptcha.render('button_offer__question', {
                'sitekey': '6LdWhksmAAAAAMJnf3tydbO6ykp2Zwu-3SHjoxUj',
                'callback': onClick
            });
        }

        popup_questionThanks.classList.add('active');
        popup_question.classList.remove('active');
        body.classList.add('block');

    } else {
        console.log("Номер телефона недействителен.");
        phonevalidate.classList.add('active');
    }
}

function validatePhoneNumber2() {
    var phoneNumber = uphoneNumberInput.value.trim().replace(/[() ]/g, '');


    if (regex.test(phoneNumber)) {
        console.log("Номер телефона действителен.");
        phonevalidateInputoffer.classList.remove('active');


        function offer(token) {
            var count = 0;
            $(".g-recaptcha").each(function () {
                grecaptcha.reset(count);
                count++;
            });
        }


        var onloadCallback3 = function () {
            grecaptcha.render('button_offer__fast', {
                'sitekey': '6LdWhksmAAAAAMJnf3tydbO6ykp2Zwu-3SHjoxUj',
                'callback': offer
            });
        };

        popup_thanks.classList.add('active');
        popup_offer.classList.remove('active');
        body.classList.add('block');
    } else {
        console.log("Номер телефона недействителен.");
        phonevalidateInputoffer.classList.add('active');
    }
}

function validatePhoneNumber3() {
    var phoneNumber = fastNumberInput.value.trim().replace(/[() ]/g, '');


    if (regex.test(phoneNumber)) {
        console.log("Номер телефона действителен.");
        phonevalidateInputfast.classList.remove('active');


        function fast(token) {
            var count = 0;
            $(".g-recaptcha").each(function () {
                grecaptcha.reset(count);
                count++;
            });
        }


        var onloadCallback3 = function () {
            grecaptcha.render('button_offer__fast', {
                'sitekey': '6LdWhksmAAAAAMJnf3tydbO6ykp2Zwu-3SHjoxUj',
                'callback': fast
            });
        };

        popup_fastThanks.classList.add('active');
        popup_fast.classList.remove('active');
        body.classList.add('block');
    } else {
        console.log("Номер телефона недействителен.");
        phonevalidateInputfast.classList.add('active');
    }
}


$(document).ready(function () {
    $("#question_phone").inputmask("+380(99) 999 99 99", {
        placeholder: "_",
        clearMaskOnLostFocus: false
    });
    $("#phone_fast").inputmask("+380(99) 999 99 99", {
        placeholder: "_",
        clearMaskOnLostFocus: false
    });
    $("#uphone").inputmask("+380(99) 999 99 99", {
        placeholder: "_",
        clearMaskOnLostFocus: false
    });

    // Добавление слушателя события на кнопку "Замовити"
    var buttonQuestion = document.querySelector(".button_offer__question");
    var buttonOffer = document.querySelector(".button_offer");
    var buttonFast = document.querySelector(".button_offer__fast");
    buttonQuestion.addEventListener("click", function (event) {
        event.preventDefault(); // Отменяем отправку формы

        validatePhoneNumber1();
    });
    buttonOffer.addEventListener("click", function (event) {
        event.preventDefault(); // Отменяем отправку формы

        validatePhoneNumber2();
    });
    buttonFast.addEventListener("click", function (event) {
        event.preventDefault(); // Отменяем отправку формы

        validatePhoneNumber3();
    });
});

