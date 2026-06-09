$(document).ready(function () {

	document.forms.register.noValidate = true;
    $('#contactForm').on('submit', function (e) {

        let valid = true;
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === '') {
            $('#nameError').text('Name is required');
            valid = false;
        }

        if (email === '') {
            $('#emailError').text('Email is required');
            valid = false;
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('Enter a valid email address');
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        }
    });
});