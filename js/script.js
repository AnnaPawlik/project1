'use strict';

function toggleMenu(visible) {
    document.querySelector('.navbar').classList.toggle('hide', visible)
}

document.querySelector('.navbar-menu').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});

// Chart
var ctx = document.getElementById('myChart').getContext('2d');

var Chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
                // 4
                label: "Signups",
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
                // 7
                hidden: true,
            }
        ]
    },
});


// Modal

(function () {
    var showModal = function (event) {
        event.preventDefault();

        var overlay = event.currentTarget.getAttribute('data-modal');

        console.log(overlay);

        for (var i = 0; i < document.querySelectorAll(".show-modal").length; i++) {
            document.querySelectorAll(".modal")[i].classList.remove("show");
        };
        document.querySelector(overlay).classList.add('show');
        document.querySelector(overlay + ' .modal').classList.add('show');
    };

    var modalLinks = document.querySelectorAll('.show-modal');
    var overlays = document.querySelectorAll('.overlay');

    for (var i = 0; i < modalLinks.length; i++) {
        modalLinks[i].addEventListener('click', showModal);
    }

    var hideModal = function (event) {
        event.preventDefault();

        for (var i = 0; i < overlays.length; i++) {
            overlays[i].classList.remove('show');
        }
    };

    var closeButtons = document.querySelectorAll('.modal .js--close-modal');

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', hideModal);
    }

    for (var i = 0; i < overlays.length; i++) {
        overlays[i].addEventListener('click', hideModal);
    }

    var modals = document.querySelectorAll('.modal');

    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }
})();


// Validate email
document.querySelector('form').addEventListener('submit', function (event) {
    var isFormValidate = true;

    var emailAddressInput = event.target.querySelector('input[name="email_address"]')
    if (emailAddressInput.value.indexOf('@') < 0) {
        isFormValidate = false;
        emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Błędny adres e-mail';
    }

    return !isFormValidate ? event.preventDefault() : true;
})