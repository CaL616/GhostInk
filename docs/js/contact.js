(function () {

    document.forms.contactForm.noValidate = true;

    $('#contactForm').on('submit', function (e) {

        var elements = this.elements;
        var valid = {};
        var isFormValid = true;

        for (var i = 0; i < elements.length; i++) {

            var el = elements[i];

            if (el.type === 'submit' || el.type === 'button') continue;

            var isValid = validateRequired(el);

            if (!isValid) {
                showErrorMessage(el);
            } else {
                removeErrorMessage(el);
            }

            if (el.id) {
                valid[el.id] = isValid;
            }
        }

        if (!validateEmail(document.getElementById('email'))) {
            showErrorMessage(document.getElementById('email'));
            valid.email = false;
        }

        for (var field in valid) {
            if (!valid[field]) {
                isFormValid = false;
                break;
            }
        }

        if (!isFormValid) {
            e.preventDefault();
        }

    });

    function validateRequired(el) {

        if (el.hasAttribute('required')) {

            var valid = !isEmpty(el);

            if (!valid) {
                setErrorMessage(el, 'This field is required');
            }

            return valid;
        }

        return true;
    }

    function isEmpty(el) {
        return !el.value;
    }

    function validateEmail(el) {

        var value = el.value.trim();
        if (!value) return false;

        var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        if (!valid) {
            setErrorMessage(el, 'Enter a valid email address');
        }

        return valid;
    }

    function setErrorMessage(el, message) {
        $(el).data('errorMessage', message);
    }

    function showErrorMessage(el) {

        var $el = $(el);
        var $errorContainer = $el.siblings('.text-danger');

        if (!$errorContainer.length) {
            $errorContainer = $('<span class="text-danger small"></span>')
                .insertAfter($el);
        }

        $errorContainer.text($el.data('errorMessage'));
    }

    function removeErrorMessage(el) {
        $(el).siblings('.text-danger').text('');
    }

})();