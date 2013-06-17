/* using haversine formula to calculate the great-circle distance between two points – that is, the shortest distance over the earth’s surface */


function dis(p1,p2) {

	var R = 6371; // kms
	var dLat = (p2.lat-p1.lat).toRad();
	var dLon = (p2.lng-p1.lng).toRad();
	var lat1 = p1.lat.toRad();
	var lat2 = p2.lat.toRad();
	
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	return R * c;
}

// example points
var p1 = { 
			"lat":-33.5,
			"lon":-71
		}

var p2 = { 
			"lat":-33,
			"lon":-72
		}

// calculation		
var distance = dis(p1,p2);