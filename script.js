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

});