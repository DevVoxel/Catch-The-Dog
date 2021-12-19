// Global variable that determines the base size of the images
let extra = 15;
$( function() {
    // set slider handle to handle variable
    let handle = $( "#custom-handle" );
    // Select slider
    $( "#slider" ).slider({
        // Starting value of 15 (Similar to the extra variable only this correlates to positioning as well)
        value: 15,
        // Minimum value the slider can go to
        min: 5,
        // Maximum value the slider can go to
        max: 15,
        create: function() {
            // Grabs a value from the slider (if the slider is on 8 it will grab 8, 2 it will grab 2, etc.)
            handle.text( $( this ).slider( "value" ) );
        },
        // Function to carry out when slider is moved
        slide: function( event, ui ) {
            // Update the text on the handle of the slider to correlate with positioning
            handle.text( ui.value );
            // Select the #adj image (the showcase image) and update its width value based on the slider value given
            $('#adj').css('width',ui.value +'%');
            // Update extra to the value of the slider (this is used to update all the images within the gamespace)
            extra = ui.value;
        }
    });
} );