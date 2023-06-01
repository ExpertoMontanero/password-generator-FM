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
    $('#password-text').css('color', 'white').text('');
    var number = generatorIngredientsPicker();
    var passwordLength = $('#character-number').text();
    passwordLength = Number(passwordLength);
    for (let i = 0; i < passwordLength; i++) {
        if (number != 0) {
            let expr = Math.floor(Math.random() * number + 1);
            console.log(expr);
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
