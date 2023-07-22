/*
 * Javascript for: Home (index.html)
 * Handlebar.js functions
 * Information from data.js
*/

//restaurants in Now Opening
var restaurantInfo = document.getElementById("restaurant-template").innerHTML;
var template = Handlebars.compile(restaurantInfo);
var restaurantData = template(restaurantInfoData);
document.getElementById("restaurantData").innerHTML = restaurantData;

//4 menus in Suggestion grid
var suggestionInfo = document.getElementById("suggestion-template").innerHTML;
var template = Handlebars.compile(suggestionInfo);
var suggestionData = template(restaurantInfoData);
document.getElementById("suggestionData").innerHTML = suggestionData;

//3 tasting event selections
var tastingInfo = document.getElementById("tasting-template").innerHTML;
var template = Handlebars.compile(tastingInfo);
var tastingData = template(restaurantInfoData);
document.getElementById("tastingData").innerHTML = tastingData;
