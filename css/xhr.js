var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.foursquare.com/v2/venues/search?client_id=YQLM2QOQW0TQFQNABM12GSIY4SAKS4CSL5DHN2IDTVL4LCX2&client_secret=DY5Q04VF4CJ3GEQ50XNFKWXQTDRX3N4RFKNJ3MY3TNXE2ZOV&v=20210201&near=st%20peter%20port&intent=browse&radius=10000&limit=10&categoryId=4d4b7105d754a06374d81259");

xhr.send();