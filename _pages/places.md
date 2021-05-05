---
layout: places
title: Make client-side API calls from your browser using JavaScript
permalink: /places.html
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: assets/images/javascript.jpg
excerpt: Without succumbing to the dreaded CORS!
---

## Long story...short

If you've ever tried to connect to a REST API using client-side code (as in code that runs in your browser), it's highly likely you have run into a [CORS (cross-origin resource sharing)](https://youtu.be/4KHiSt0oLJ0) issue.

## How to get around this (client-side, not server-side)?

Two options:

- Use the system's SDK/library. With SDKs, there is no standard like Open API to follow, so you are often at the mercy of the system's providers to both generate and document a series of commands that will do what you want. 
- If the system doesn't have an SDK or library, use JavaScript's [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) request to access their REST API.

Using a system's provided SDK is almost always preferred to accesing an API with [CRUD](https://blogs.mulesoft.com/dev-guides/api-design/api-best-practices-nouns-crud-etc/) commands since it will:

- Have any deployment issues (such as CORS) sorted out
- Be faster and more conservative with use of resources
- Have more commands
- Be free of any constraints inmposed by a standard API specification.

However, if there is no SDK for your preferred development platform, _fetch_ may be your best option.

### Use UrlSearchParams to keep code readable

One of the benefits of using _fetch_ to access a REST API is the standardisation of approach. To show off that standardisation, JavaScript's [UrlSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) function lets you compose API calls that would be recognisable as a set of [Postman](https://www.postman.com/) key/value parameters. For example:

#### In Postman

![In Postman](postman.png)

#### In JavaScript 

{% highlight javascript %}
const query = new URLSearchParams({
    client_id: "SOMETHINGNOTVERYSECRET",
    client_secret: "ASECRETTHING",
    v: "20210201", // All Foursquare API calls need a version. See https://developer.foursquare.com/docs/places-api/versioning/
    ll: position.coords.latitude + "," + position.coords.longitude, // User's latitude and longitude
    intent: "browse", // Find all venues with the defined 'radius' of 'll'
    radius: "10000", // Distance from starting point to search (metres)
    limit: "10", // Maximum number of values to return (up to 50)
    categoryId: "4d4b7105d754a06374d81259" // Search the 'Food' category. See the list of categories at https://developer.foursquare.com/docs/build-with-foursquare/categories/
  });
  fetch(API_URL + ENDPOINT + query, getOptions);
{% endhighlight %}

### Something similar in an SDK (Google Places Library)

With a REST API, a degree of clarity comes from the standardisation of approach (whether that be Open API, a Postman collection or some other standard). With SDKs, you rely a little more on the documentation being clear.

{% highlight javascript %}
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
{% endhighlight %}
 

## The two APIs combined: "Popular places for food (according to Foursquare)"

<div id="map"></div>