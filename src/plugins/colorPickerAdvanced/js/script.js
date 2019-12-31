/**
 *
 * HTML5 Color Picker
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Script Tutorials
 * http://www.script-tutorials.com/
 */

$(function(){
    var bCanPreview = true; // can preview

    // create canvas and context objects
    var canvas = document.getElementById('picker');
    var ctx = canvas.getContext('2d');

    // drawing active image
    var image = new Image();
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 195, 220); // draw the image on the canvas
    }

    // select desired colorwheel
    var imageSrc = 'public/plugins/colorPickerAdvanced/images/colorwheel1.png';
    switch ($(canvas).attr('var')) {
        case '2':
            imageSrc = 'public/plugins/colorPickerAdvanced/images/colorwheel2.png';
            break;
        case '3':
            imageSrc = 'public/plugins/colorPickerAdvanced/images/colorwheel3.png';
            break;
        case '4':
            imageSrc = 'public/plugins/colorPickerAdvanced/images/colorwheel4.png';
            break;
        case '5':
            imageSrc = 'public/plugins/colorPickerAdvanced/images/colorwheel5.png';
            break;
    }
    image.src = imageSrc;

    bCanPreview = true;
    var clickCounter = 0;
    var clickPreview = 0;
    var clickCounterToggle = 0;
    $('#picker').click(function(e) { // click event handler
        if (clickCounter%2 == 0) {
            bCanPreview = false;
            clickCounter++;
        } else {
            bCanPreview = true;
            clickCounter = 0;
        }
    });

    $('.preview').click(function(e) { // preview click
        if (clickCounterToggle%2 == 0) {
            bCanPreview = true;
            $('.colorpicker').fadeIn("slow", "linear");
            clickCounterToggle++;
        } else {
            bCanPreview = false;
            $('.colorpicker').fadeOut("slow", "linear");
            clickCounterToggle = 0;
        }
    });

    $('#picker').mousemove(function(e) { // mouse move handler
        if (bCanPreview == true) {
            // get coordinates of current position
            var canvasOffset = $(canvas).offset();
            var canvasX = Math.floor(e.pageX - canvasOffset.left);
            var canvasY = Math.floor(e.pageY - canvasOffset.top);

            // get current pixel
            var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
            var pixel = imageData.data;

            // update preview color
            var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
            $('.preview').css('backgroundColor', pixelColor);

            // update controls
            $('#rVal').val(pixel[0]);
            $('#gVal').val(pixel[1]);
            $('#bVal').val(pixel[2]);
            $('#rgbVal').val(pixel[0]+','+pixel[1]+','+pixel[2]);

            var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
            $('#hexVal').val('#' + ('0000' + dColor.toString(16)).substr(-6));
        }
    });
});