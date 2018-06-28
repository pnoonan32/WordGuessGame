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
    'Zimbabwe' ]



    // to randomly select the country to be guessed

    function selectRandomCountry () {
        for (var i = 0; i < countries.length; i++) {
            Math.random(i)
        }
    }




    // functions to keep track of game statistics
    function gameStatistics (chances, correct, incorrect) {
        this.chances = chances;
        this.correct = correct;
        this.incorrect = incorrect;
    }

    var gameResults = new gameStatistics(10, 8, 2); 

    
    //to display gameResults once game is attempted
    document.getElementById("chances").innerHTML = "Chances Remaining: " + gameResults.chances;
    document.getElementById("correct").innerHTML = "Letters guessed correctly so far: " + gameResults.correct;
    document.getElementById("incorrect").innerHTML = "Recorded attempt(s): " + gameResults.incorrect;





    // On click events for the letters to display on page

    function hangmanletters() {
        var letters;
       letters.addEventListener('click', function() {
        document.getElementsByClassName("letters").innerHTML = letters; 
       });   
    }        
 




    // display the country selected, whether or not it was guessed correctly


    // conditions for when the user wins


    // conditions for when the user loses