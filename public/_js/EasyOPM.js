(function ( $ ) {

    $.fn.EasyOPM = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            selector: "map"
        }, options );

        debug("object "+ this , "f");

    };


    function debug(msg , type){

        if ( window.console && window.console.log ) {

             switch (type) {
               case "f":
               window.console.info(msg);
                 break;
              case "e":
              window.console.error(msg);
              break;
              case "l":
              window.console.log(msg);
              break;
               default:
               window.console.log(msg);
               break ;

             }
        }

    }

}( jQuery ));
