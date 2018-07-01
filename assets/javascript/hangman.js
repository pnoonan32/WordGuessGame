// All the countries that will be used for the API
var countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua & Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia & Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Myanmar/Burma',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Democratic Republic of the Congo',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Great Britain',
    'Greece',
    'Grenada',
    'Guadeloupe',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Israel and the Occupied Territories',
    'Italy',
    "Ivory Coast (Cote d'Ivoire)",
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kosovo',
    'Kuwait',
    'Kyrgyz Republic (Kyrgyzstan)',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Republic of Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Moldova, Republic of Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'Norway',
    'Oman',
    'Pacific Islands',
    'Pakistan',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    "Saint Vincent's & Grenadines",
    'Samoa',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovak Republic (Slovakia)',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor Leste',
    'Togo',
    'Trinidad & Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks & Caicos Islands',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United States of America (USA)',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (UK)',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe'];

// To ensure the letters of the randomly selected country are all lower case //
var randomCountry = countries[Math.floor(Math.random() * countries.length)].toLowerCase();
// To ensure the letters of the randomly selected country are all lower case/  //

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var answer = [];
var blanks = [];
var selectedCountry = randomCountry.split('').join('');
var chancesRemaining = 10;
var incorrectAttempts = 0;
var totalAttempts = 0;
var incorrectGuesses = [];
console.log(selectedCountry);

// to randomly select the country to be guessed
function selectRandomCountry() {

    for (var i = 0; i < randomCountry.length; i++) {
        blanks.push('_'); 
    }
// arrarray.push(singleCharacter)
    // "_"
    // var blanks = ["_","_","_"]

    var underscores =  document.getElementById("underscores");
    underscores.innerHTML = blanks.join(' ');
    // document.getElementById("underscores").innerHTML = blanks.join(' ');

 }

selectRandomCountry();


function checkLetters(letters) {
var userGuess = letters;    
    
    if ( selectedCountry.indexOf(userGuess) < 0 ) {
        // Incremnt incorrect guess
        incorrectAttempts++;        
        // Decrement chances remaining
        chancesRemaining--;    
        // Push the userguess into the incorrectGuesses array
        incorrectGuesses.push(userGuess);

        console.log("You are incorrect!");
    }  

}
checkLetters();


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








// functions to keep track of game statistics
function gameStatistics() {

// To display "Chances Remaining" on webpage
document.getElementById("chances").innerHTML = "Chances Remaining: " + chancesRemaining--;
document.getElementById("letters").addEventListener('click', function() {

});


// To display "incorrect Attempts" on webpage
document.getElementById("incorrect").innerHTML = "Incorrect Attempt(s): " + incorrectAttempts++;

// To display "total attempts" on webpage
document.getElementById("attempts").innerHTML = "Total Recorded Attempts: " + totalAttempts++;
}
gameStatistics();
    
    

function userInput() {
    
}
                    







    // display the country selected, whether or not it was guessed correctly


    // conditions for when the user wins
    function gameResults () {
        var gameOver = "Thanks for playing"

        if ( chancesRemaining === 0 ) {
            gameOver = " ";
        }
    }


    // conditions for when the user loses

    // Create a results report

    // Add option/button to play the game again