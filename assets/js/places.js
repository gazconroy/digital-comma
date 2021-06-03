// -----------------------------
// Variables and constants 
// -----------------------------

// Foursquare API
const API_URL = 'https://api.foursquare.com/v2';
const ENDPOINT = '/venues/search?'
var getOptions = {
    method: 'GET',
    redirect: 'follow'
  };

// Google Places
let map = null;

// -----------------------------
// Functions
// -----------------------------

// Main function. Return a list of up to 10 popular(according to Foursquare) food places, within 10Km of the user's current location and display them on a Google map
function fourSquare() {

  // Get user's current location from browser
  navigator.geolocation.getCurrentPosition((position) => {
    // Build a query string from key/value pairs for the Foursquare REST API
    const query = new URLSearchParams({
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET,
      v: "20210201", // All Foursquare API calls need a version. See https://developer.foursquare.com/docs/places-api/versioning/
      ll: position.coords.latitude + "," + position.coords.longitude, // User's latitude and longitude
      intent: "browse", // Find all venues with the defined 'radius' of 'll'
      radius: "10000", // Distance from starting point to search (metres)
      limit: "10", // Maximum number of values to return (up to 50)
      categoryId: "4d4b7105d754a06374d81259" // Search the 'Food' category. See the list of categories at https://developer.foursquare.com/docs/build-with-foursquare/categories/
    });
    fetch(API_URL + ENDPOINT + query, getOptions)
    .then(response => response.json()) // Convert response to JSON when promise resolves
    .then(result => initMap(result.response.venues)) // Create Google map when JSON returned
    .catch(error => console.log('error', error));
  });
}

// Create Google map, centred on first result from Foursquare
function initMap(venues){
  map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: venues[0].location.lat, lng: venues[0].location.lng },
      zoom: 12
  });
  // Find each food venue in the Google Places API
  for (var i =0; i < venues.length; i++) {
    let location = new Object ();
    location.lat = venues[i].location.lat;
    location.lng = venues[i].location.lng;
    findRestaurant(location, venues[i].name );
  }
}

// Find a food venue
function findRestaurant(location, name) {
  let restaurant_location = new Object ();
  restaurant_location.lat = location.lat;
  restaurant_location.lng =location.lng;
  var request = {
    location: restaurant_location,
    radius: '500',
    name: name
    };
  // Add food venue marker to Google map
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, addMarker);
}

// Add marker for food venue
function addMarker(results, status) {
  // If the place exists on Google's database...
  if (status == google.maps.places.PlacesServiceStatus.OK) {

              var place = results[0];
              // Add marker to map (in the correct location)
              var marker = new google.maps.Marker({
                  position: place.geometry.location,
                  map: map,
                  title: place.name
              });
              // Change price numeric to string value (£, ££, £££)
              let price = createPrice(place.price_level);
              // Collect basic details about the venue from the API
              let content = "<h3>" + place.name + "</h3><h4>" + place.vicinity + "</h4><p>Price: " + price + "<br/>Rating: " + place.rating + "</p>";
              // Create listener that displays popup (InfoWindow) with venue details when marker is clicked
              var infowindow = new google.maps.InfoWindow({
                  content: content
              });
              bindInfoWindow(marker,map,infowindow,content);
              marker.setMap(map);
  }
}

// Display popup window at marker location when marker is clicked
function bindInfoWindow(marker,map, infowindow, html) {
  marker.addListener('click', function() {
      infowindow.setContent(html);
      infowindow.open(map, this);
  });
}

// Turn price digits into string
function createPrice(level) {
  if(level != "" && level !=null ){
      let out = "";
      for (var x = 0; x < level; x++){
          out += "£";
      }
      return out;
  } else {
      return "?";
  }
}