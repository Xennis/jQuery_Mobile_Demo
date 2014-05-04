	var MapDisplay;

	/**
	 * MapDisplay
	 * 
	 * @constructor
	 * @param {HTMLElement|String} elementID Div element or its ID for the map
	 * @return {void}
	 */
	function MapDisplay(elementID) {
		
		var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/ad132e106cd246ec961bbdfbe0228fe8/{styleId}/256/{z}/{x}/{y}.png';
		var cloudmadeAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://cloudmade.com">CloudMade</a>';

		var baseLayer = L.tileLayer(cloudmadeUrl, {
			maxZoom: 18,
			styleId: 997,
			attribution: cloudmadeAttribution
		});
	
		this.map = L.map(elementID, {
			center: [47, 20],
			zoom: 4,
			layers: [baseLayer],
			attributionControl: false
		});

		L.control.attribution({position: 'bottomright', prefix: false}).addTo(this.map);
	};

	MapDisplay.prototype.resize = function() {
		this.map._onResize(); 		
	};