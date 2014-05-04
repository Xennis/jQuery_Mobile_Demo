var mapDisplay = new MapDisplay('map');
var map = mapDisplay.map;
var mapFirstTimeResize = true;

$(document).on("pageinit", function () {
    
    $.mobile.defaultPageTransition = 'slidefade';
    
    $( "body>[data-role='panel']" ).panel();
    $("[data-role='navbar']").navbar();
    $("[data-role='header'], [data-role='footer']").toolbar();
    $("[data-role='listview']").listview().listview('refresh');  
});
/*
// Update the contents of the toolbars
$(document).on("pageshow", "[data-role='page']", function () {
	
    // Each of the four pages in this demo has a data-title attribute
    // which value is equal to the text of the nav button
    // For example, on first page: <div data-role="page" data-title="Info">
    var current = $(this).jqmData("title");
    // Change the heading
    $("[data-role='header'] h1").text(current);
    // Remove active class from nav buttons
    $("[data-role='navbar'] a.ui-btn-active").removeClass("ui-btn-active");
    // Add active class to current nav button
    $("[data-role='navbar'] a").each(function () {
        if ($(this).text() === current) {
            $(this).addClass("ui-btn-active");
        }
    });	
});
*/

$("#mapView").on("pageshow", function() {
	if (mapFirstTimeResize) {
		mapFirstTimeResize = false;
		map._onResize(); 
	}
});