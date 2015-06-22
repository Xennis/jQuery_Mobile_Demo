	var MapDisplay;

	/**
	 * MapDisplay
	 * 
	 * @constructor
	 * @param {HTMLElement|String} elementID Div element or its ID for the map
	 * @return {void}
	 */
	function MapDisplay(elementID) {
		
		var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
		var osmAttribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

		var baseLayer = L.tileLayer(osmUrl, {
			maxZoom: 18,
			attribution: osmAttribution
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