// All the countries that will be used for the API

var countries = [
    'spain',
    'portugal',
    'peru',
    'switzerland',
    'belgium',
    'france',
    'croatia',
    'japan',
    'taiwan',
    'brazil',
    'paraguay',
    'columbia',
 ];
 
 // To ensure the letters of the randomly selected country are all  Uppercase //
 var randomCountry = countries[Math.floor(Math.random() * countries.length)].toUpperCase();
 // To ensure the letters of the randomly selected country are all lower UpperCase/  //
 
 var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var answer = [];
 var blanks = [];
 
 var selectedCountry = randomCountry.split('').join('');
 // var something = selectedCountry.split(" ").join("");
 var chancesRemaining = 10;
 var incorrectAttempts = 0;
 var totalAttempts = 0;
 var incorrectGuesses = [];
 var correctGuesses = [];
 
 // Define what userGuess variable will be
 var userGuess;
//  console.log(selectedCountry);
 
 // to randomly select the country to be guessed
 function selectRandomCountry() {
 
     for (var i = 0; i < randomCountry.length; i++) {
         blanks.push('_'); 
     }
     var underscoreHTML =  document.getElementById("underscores");
     underscoreHTML.innerHTML = blanks.join(' ');
  }
 selectRandomCountry();
 
 function checkForGuess (userGuess) {
     for (var i = 0; i < selectedCountry.length; i++) {
         if (userGuess === selectedCountry[i].toUpperCase()) {
             blanks[i] = userGuess
             var underscoreHTML =  document.getElementById("underscores");
             underscoreHTML.innerHTML = blanks.join(' ');
         }
     }
 }

 
 var hangmanPieces = ['.postUp', '.postRight', '.rope', '.head', '.body', '.leftArm', '.rightArm', '.leftLeg', '.rightLeg', '.floor'];
 
 function checkLetters(letters) {
     var userGuess = letters  
     // Incorrect guess
     if ( selectedCountry.indexOf(userGuess) < 0 && incorrectGuesses.indexOf(userGuess) < 0 )  {
 
 
         // Incremnt incorrect guess
         var selector = hangmanPieces[incorrectAttempts];
         incorrectAttempts++;        
         var piece = document.querySelector(selector);
         piece.classList.add('active');
 
         // Decrement chances remaining
         chancesRemaining--;    
         // Push the userguess into the incorrectGuesses array
         incorrectGuesses.push(userGuess);
         totalAttempts++;
        //  console.log("You are incorrect!");
     }  
     if  ( selectedCountry.indexOf(userGuess) >= 0 && correctGuesses.indexOf(userGuess) < 0 ) {
         totalAttempts++;
         checkForGuess(userGuess);
         correctGuesses.push(userGuess);  
         
        //  $('#letterbtn').css('disabled aria-disabled="true"');
            } 
     gameStatistics();
     gameResults();
 }
 
 
 
 function alphabetButtons() {
     var seperatedLetters = document.getElementById("letters");
 
     for ( var i = 0; i < alphabet.length; i++ ) {
         
         var letters = document.createElement("button");
         letters.innerHTML = alphabet[i];
         
         
         // Add id to each individual button
         letters.setAttribute("id", "letterbtn");
         // Adds value attribute to each button
         letters.setAttribute("value", alphabet[i]);
         // Add onclick attribute to each button
         letters.setAttribute("onclick", "checkLetters('" + alphabet[i] + "')");
         seperatedLetters.appendChild(letters);
     }
      //  document.getElementById("letters").innerHTML = alphabet;
      // This is to split the array "alphabet" into individual strings
      
     }
     alphabetButtons();
 
 
 
 
 
 
 
 
 // To keep track of peformace during game
 function gameStatistics() {
 
 // To display "Chances Remaining" on webpage
 document.getElementById("chances").innerHTML = "Chances Remaining: " + chancesRemaining;
 
 
 
 // To display "incorrect Attempts" on webpage
 document.getElementById("incorrect").innerHTML = "Incorrect Attempt(s): " + incorrectAttempts;
 
 // To display "total attempts" on webpage
 document.getElementById("attempts").innerHTML = "Total Recorded Attempts: " + totalAttempts;
 }
 gameStatistics();
     
     
 
 // The  individual letters of the randomly selected countries
 function countryChoices() {
     var underscores = document.getElementById('underscores');
     var selectedLetter = document.getElementById('letters');
     for ( var i = 0; i < selectedCountry.length; i++) {
         if ( randomCountry.indexOf(selectedCountry) === alphabet ) {
             selectedLetter.addEventListener('click', function() {
                  underscores.replaceWith(selectedCountry[i]);
             });
         }
     }
 }
 
 

 function initMap(latitude,longitude) {
    var uluru = { lat: latitude, lng: longitude };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: uluru
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }



var openMap = function(country) {
    console.log(country)
    geocode(null, country)
  // Clears the map div
//   $("#map").empty();
    var apiKey = "AIzaSyDN6CnR706rEeElDTnrix6MC";// plug in key
    var queryURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${country}&key=AIzaSyDN6CnR706rEeElDTnrix6MC_Qjmq6o1z4`;
//   // Calls the Geocoding API to retrieve the Lat. and Lon. of searched city
fetch(queryURL).then(function (response) {
    if (response.status !== 200) {
        console.log('there was an error querying that location')
    }

    response.json().then(function (data) {
        var latitude = data.results[0].geometry.location.lat;
        var longitude = data.results[0].geometry.location.lng;

        initMap(latitude, longitude);
    })
})
// $.get(queryURL).then(function(response) {
//     console.log({response})
//      var latitude = response.results[0].geometry.location.lat; console.log(latitude);
//      var longitude = response.results[0].geometry.location.lng;
//      console.log(longitude);

// // Function that takes the converted lat and lon and places a marker on that spot with a map around it
    

//      initMap(latitude, longitude);
//    });
};


   //  display the country selected, whether or not it was guessed correctly
 
 console.log(blanks.join("").toUpperCase())
 console.log(randomCountry.toUpperCase())
     // conditions for when the user wins
 
 var gameOver = "Thanks for playing";
 var modal = $('#result-modal');
 var gameResult = $('#game-result');

 function gameResults() {
 
     if (chancesRemaining <= 0) {
         gameResult.html('Sorry, it looks like you were unable to successfully guess the correct country.');
         modal.modal('show');
     }
     
     if (blanks.join("").toUpperCase() === randomCountry.toUpperCase()) {
         $('#victory-modal').show()
         gameResult.html('Congratulations, you guessed the randomly selected country!!');
         modal.modal('show');
         console.log({randomCountry: randomCountry});
         openMap(randomCountry);
     }
 }

 function gameRestart () {
    var restart = document.getElementById('restart');
    restart.addEventListener('click', function() {
        location.reload();
    })
 }
 gameRestart()
 
 
 
 
//   // Call Geocode
//      // geocode();
 
     // Get location form
     var locationForm = document.getElementById('location-form');
 
 // Listen for submit
 locationForm.addEventListener('submit', geocode);
 
 function geocode(event, country){
   // Prevent actual submit
   if (event) event.preventDefault();
 
   var location = document.getElementById('location-input').value || country;
 
   axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
     params:{
       address:location,
       key:'AIzaSyDN6CnR706rEeElDTnrix6MC_Qjmq6o1z4'
     }
   })
   .then(function(response){
     // Log full response
     console.log({response});
 
     // Formatted Address
     var formattedAddress = response.data.results[0].formatted_address;
     var formattedAddressOutput = `
       <ul class="list-group">
         <li class="list-group-item">${formattedAddress}</li>
       </ul>
     `;
 
     // Address Components
     var addressComponents = response.data.results[0].address_components;
     var addressComponentsOutput = '<ul class="list-group">';
     for(var i = 0; i < addressComponents.length;i++){
       addressComponentsOutput += `
         <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
       `;
     }
     addressComponentsOutput += '</ul>';
 
     // Geometry
     var lat = response.data.results[0].geometry.location.lat;
     var lng = response.data.results[0].geometry.location.lng;

     initMap(lat, lng);

     var geometryOutput = `
       <ul class="list-group">
         <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
         <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
       </ul>
     `;
 
     // Output to app
     document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
     document.getElementById('address-components').innerHTML = addressComponentsOutput;
     document.getElementById('geometry').innerHTML = geometryOutput;
   })
   .catch(function(error){
     console.log(error);
   });
 }
 
 
 
 
 
//  // var openMap = function() {
//  //   // Clears the map div
//  //   $("#map").empty();
//  //   var apiKey = "AIzaSyDN6CnR706rEeElDTnrix6MC";// plug in key
//  //   var queryURL =
//  //     "https://maps.googleapis.com/maps/api/geocode/json?address=" +
//  //     city +
//  //     "," +
//  //     state +
//  //     "&key=AIzaSyDN6CnR706rEeElDTnrix6MC_Qjmq6o1z4";
//  //   // Calls the Geocoding API to retrieve the Lat. and Lon. of searched city
//  //   $.ajax({
//  //     url: queryURL,
//  //     method: "GET"
//  //   }).then(function(response) {
//  //     var latitude = response.results[0].geometry.location.lat;
//  //     // console.log(latitude);
//  //     var longitude = response.results[0].geometry.location.lng;
//  //     // console.log(longitude)
 
//  //     // Function that takes the converted lat and lon and places a marker on that spot with a map around it
//  //     function initMap() {
//  //       var uluru = { lat: latitude, lng: longitude };
//  //       var map = new google.maps.Map(document.getElementById("map"), {
//  //         zoom: 13,
//  //         center: uluru
//  //       });
 
//  //       var marker = new google.maps.Marker({
//  //         position: uluru,
//  //         map: map
//  //       });
//  //     }
 
//  //     initMap();
//  //   });
//  // };

 
 
 
 
//  // Countries to use for the real project:
 
//  // var countries = [
//  //     'Afghanistan',
//  //     'Albania',
//  //     'Algeria',
//  //     'Andorra',
//  //     'Angola',
//  //     'Anguilla',
//  //     'Antigua & Barbuda',
//  //     'Argentina',
//  //     'Armenia',
//  //     'Australia',
//  //     'Austria',
//  //     'Azerbaijan',
//  //     'Bahamas',
//  //     'Bahrain',
//  //     'Bangladesh',
//  //     'Barbados',
//  //     'Belarus',
//  //     'Belgium',
//  //     'Belize',
//  //     'Benin',
//  //     'Bermuda',
//  //     'Bhutan',
//  //     'Bolivia',
//  //     'Bosnia & Herzegovina',
//  //     'Botswana',
//  //     'Brazil',
//  //     'Brunei Darussalam',
//  //     'Bulgaria',
//  //     'Burkina Faso',
//  //     'Myanmar/Burma',
//  //     'Burundi',
//  //     'Cambodia',
//  //     'Cameroon',
//  //     'Canada',
//  //     'Cape Verde',
//  //     'Cayman Islands',
//  //     'Central African Republic',
//  //     'Chad',
//  //     'Chile',
//  //     'China',
//  //     'Colombia',
//  //     'Comoros',
//  //     'Congo',
//  //     'Costa Rica',
//  //     'Croatia',
//  //     'Cuba',
//  //     'Cyprus',
//  //     'Czech Republic',
//  //     'Democratic Republic of the Congo',
//  //     'Denmark',
//  //     'Djibouti',
//  //     'Dominica',
//  //     'Dominican Republic',
//  //     'Ecuador',
//  //     'Egypt',
//  //     'El Salvador',
//  //     'Equatorial Guinea',
//  //     'Eritrea',
//  //     'Estonia',
//  //     'Ethiopia',
//  //     'Fiji',
//  //     'Finland',
//  //     'France',
//  //     'French Guiana',
//  //     'Gabon',
//  //     'Gambia',
//  //     'Georgia',
//  //     'Germany',
//  //     'Ghana',
//  //     'Great Britain',
//  //     'Greece',
//  //     'Grenada',
//  //     'Guadeloupe',
//  //     'Guatemala',
//  //     'Guinea',
//  //     'Guinea-Bissau',
//  //     'Guyana',
//  //     'Haiti',
//  //     'Honduras',
//  //     'Hungary',
//  //     'Iceland',
//  //     'India',
//  //     'Indonesia',
//  //     'Iran',
//  //     'Iraq',
//  //     'Israel and the Occupied Territories',
//  //     'Italy',
//  //     "Ivory Coast (Cote d'Ivoire)",
//  //     'Jamaica',
//  //     'Japan',
//  //     'Jordan',
//  //     'Kazakhstan',
//  //     'Kenya',
//  //     'Kosovo',
//  //     'Kuwait',
//  //     'Kyrgyz Republic (Kyrgyzstan)',
//  //     'Laos',
//  //     'Latvia',
//  //     'Lebanon',
//  //     'Lesotho',
//  //     'Liberia',
//  //     'Libya',
//  //     'Liechtenstein',
//  //     'Lithuania',
//  //     'Luxembourg',
//  //     'Republic of Macedonia',
//  //     'Madagascar',
//  //     'Malawi',
//  //     'Malaysia',
//  //     'Maldives',
//  //     'Mali',
//  //     'Malta',
//  //     'Martinique',
//  //     'Mauritania',
//  //     'Mauritius',
//  //     'Mayotte',
//  //     'Mexico',
//  //     'Moldova, Republic of Monaco',
//  //     'Mongolia',
//  //     'Montenegro',
//  //     'Montserrat',
//  //     'Morocco',
//  //     'Mozambique',
//  //     'Namibia',
//  //     'Nepal',
//  //     'Netherlands',
//  //     'New Zealand',
//  //     'Nicaragua',
//  //     'Niger',
//  //     'Nigeria',
//  //     'North Korea',
//  //     'Norway',
//  //     'Oman',
//  //     'Pacific Islands',
//  //     'Pakistan',
//  //     'Panama',
//  //     'Papua New Guinea',
//  //     'Paraguay',
//  //     'Peru',
//  //     'Philippines',
//  //     'Poland',
//  //     'Portugal',
//  //     'Puerto Rico',
//  //     'Qatar',
//  //     'Reunion',
//  //     'Romania',
//  //     'Russian Federation',
//  //     'Rwanda',
//  //     'Saint Kitts and Nevis',
//  //     'Saint Lucia',
//  //     "Saint Vincent's & Grenadines",
//  //     'Samoa',
//  //     'Sao Tome and Principe',
//  //     'Saudi Arabia',
//  //     'Senegal',
//  //     'Serbia',
//  //     'Seychelles',
//  //     'Sierra Leone',
//  //     'Singapore',
//  //     'Slovak Republic (Slovakia)',
//  //     'Slovenia',
//  //     'Solomon Islands',
//  //     'Somalia',
//  //     'South Africa',
//  //     'South Korea',
//  //     'South Sudan',
//  //     'Spain',
//  //     'Sri Lanka',
//  //     'Sudan',
//  //     'Suriname',
//  //     'Swaziland',
//  //     'Sweden',
//  //     'Switzerland',
//  //     'Syria',
//  //     'Tajikistan',
//  //     'Tanzania',
//  //     'Thailand',
//  //     'Timor Leste',
//  //     'Togo',
//  //     'Trinidad & Tobago',
//  //     'Tunisia',
//  //     'Turkey',
//  //     'Turkmenistan',
//  //     'Turks & Caicos Islands',
//  //     'Uganda',
//  //     'Ukraine',
//  //     'United Arab Emirates',
//  //     'United States of America (USA)',
//  //     'Uruguay',
//  //     'Uzbekistan',
//  //     'Venezuela',
//  //     'Vietnam',
//  //     'Virgin Islands (UK)',
//  //     'Virgin Islands (US)',
//  //     'Yemen',
//  //     'Zambia',
//  //     'Zimbabwe'];
 
 
 
 
 
 