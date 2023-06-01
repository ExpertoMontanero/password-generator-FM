// slider filling percantege color
$("#mySlider").on('input', function () {
    // current value
    const val = $(this).val() - 1;
    // max value
    const maxValue = $(this).attr('max') - 1;
    // percentage of completion
    let valPercent = (val / maxValue) * 100;
    //left to right linear gradient of two colors in proper ratio, you can change colors by editing hsl values
    $(this).css('background', 'linear-gradient(to right,hsl(127, 100%, 82%) ' + valPercent + '%,hsl(248, 15%, 11%) ' + valPercent + '%)');
    $('#character-number').text(val + 1);
});

// generate password main function on button click
$('#generate-btn').on('click', function () {
    $('#copied-text').hide();
    $('#password-text').css('color', 'white').text('');
    var number = generatorIngredientsPicker();
    var passwordLength = $('#character-number').text();
    passwordLength = Number(passwordLength);
    for (let i = 0; i < passwordLength; i++) {
        if (number != 0) {
            let expr = Math.floor(Math.random() * number + 1);
            switch (expr) {
                case 1:
                    codingSwitchingFunction(1);
                    break;
                case 2:
                    codingSwitchingFunction(2);
                    break;
                case 3:
                    codingSwitchingFunction(3);
                    break;
                case 4:
                    codingSwitchingFunction(4);
                    break;
                default:
                    break;
            }
        }
    }
})

// Which Rand function will be generated depend on checkboxes checked
function codingSwitchingFunction(number) {
    if ($('#uppercase-cb').attr('identifier') == number) {
        $('#password-text').text($('#password-text').text() + RandomUppercase());
    }
    if ($('#lowercase-cb').attr('identifier') == number) {
        $('#password-text').text($('#password-text').text() + RandomLowercase());
    }
    if ($('#symbols-cb').attr('identifier') == number) {
        $('#password-text').text($('#password-text').text() + RandomSymbol());
    }
    if ($('#numbers-cb').attr('identifier') == number) {
        $('#password-text').text($('#password-text').text() + RandomNumber());
    }
}

// numering identifiers from 1-4
function generatorIngredientsPicker() {
    var generationNumber = 1;
    if ($('#uppercase-cb').prop('checked')) {
        $('#uppercase-cb').attr('identifier', generationNumber);
        generationNumber++;
    }
    if ($('#lowercase-cb').prop('checked')) {
        $('#lowercase-cb').attr('identifier', generationNumber);
        generationNumber++;
    }
    if ($('#numbers-cb').prop('checked')) {
        $('#numbers-cb').attr('identifier', generationNumber);
        generationNumber++;
    }
    if ($('#symbols-cb').prop('checked')) {
        $('#symbols-cb').attr('identifier', generationNumber);
        generationNumber++;
    }
    // identifier 0 if not checked
    $('.checkbox').each(function () {
        if (!$(this).prop('checked')) {
            $(this).attr('identifier', 0);
        }
    });
    return generationNumber - 1;
}

// Function returning random uppercase letter
function RandomUppercase() {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var randomIndex = Math.floor(Math.random() * letters.length);
    return letters.charAt(randomIndex);
};

// Function returning random lowercase letter
function RandomLowercase() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var randomIndex = Math.floor(Math.random() * letters.length);
    return letters.charAt(randomIndex);
};

// Function returning random symbol
function RandomSymbol() {
    var symbols = "!@#$%^&*()-_=+[]{}|;:,<>.?/~";
    var randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols.charAt(randomIndex);
}

// Function returning random number
function RandomNumber() {
    return Math.floor(Math.random() * 10);
}

// STRENGHT INDICATOR SCRIPT

$('#generate-btn').on('click', function () {
    var strength = strengthIndicatorValue();
    if (strength <= 15) {
        $('#first-bar').css('background-color', 'var(--pale-red)');
        $('#first-bar').css('border-color', 'var(--pale-red)');
        $('#second-bar').css('background-color', 'transparent');
        $('#second-bar').css('border-color', 'var(--light-text)');
        $('#third-bar').css('background-color', 'transparent');
        $('#third-bar').css('border-color', 'var(--light-text)');
        $('#fourth-bar').css('background-color', 'transparent');
        $('#fourth-bar').css('border-color', 'var(--light-text)');
        $('#strength-indicator-text').text('TOO WEAK!');
    }
    if (strength > 15 && strength <= 32) {
        $('#first-bar').css('background-color', 'var(--pale-orange)');
        $('#first-bar').css('border-color', 'var(--pale-orange)');
        $('#second-bar').css('background-color', 'var(--pale-orange)');
        $('#second-bar').css('border-color', 'var(--pale-orange)');
        $('#third-bar').css('background-color', 'transparent');
        $('#third-bar').css('border-color', 'var(--light-text)');
        $('#fourth-bar').css('background-color', 'transparent');
        $('#fourth-bar').css('border-color', 'var(--light-text)');
        $('#strength-indicator-text').text('WEAK');
    }
    if (strength > 32 && strength <= 46) {
        $('#first-bar').css('background-color', 'var(--pale-yellow)');
        $('#first-bar').css('border-color', 'var(--pale-yellow)');
        $('#second-bar').css('background-color', 'var(--pale-yellow)');
        $('#second-bar').css('border-color', 'var(--pale-yellow)');
        $('#third-bar').css('background-color', 'var(--pale-yellow)');
        $('#third-bar').css('border-color', 'var(--pale-yellow)');
        $('#fourth-bar').css('background-color', 'transparent');
        $('#fourth-bar').css('border-color', 'var(--light-text)');
        $('#strength-indicator-text').text('MEDIUM');
    }
    if (strength > 46) {
        $('.strength-bar').css('background-color', 'var(--lime-green)');
        $('.strength-bar').css('border-color', 'var(--lime-green)');
        $('#strength-indicator-text').text('STRONG');
    }
})

//calculating strength of a password 
function strengthIndicatorValue() {
    var strengthMultipier = 0;
    if ($('#uppercase-cb').prop('checked')) {
        strengthMultipier++;
    }
    if ($('#lowercase-cb').prop('checked')) {
        strengthMultipier++;
    }
    if ($('#numbers-cb').prop('checked')) {
        strengthMultipier++;
    }
    if ($('#symbols-cb').prop('checked')) {
        strengthMultipier++;
    }
    return strength = Number($('#character-number').text()) * strengthMultipier;
}

// COPY TO CLIPPBORD
$('#copied-text').hide();
$('#copy-icon').on('click', function () {
    navigator.clipboard.writeText($('#password-text').text());
    $('#copied-text').show();
});
