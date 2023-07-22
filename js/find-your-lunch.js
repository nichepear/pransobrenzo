/*
 * Javascript for: Find Your Lunch (find-your-lunch.html)
 * Information from data.js
 * 
*/

// Construct grids of checkbox's results (Handlebar.js function)
var resultInfo = document.getElementById("result-template-dishes").innerHTML;
var template = Handlebars.compile(resultInfo);
var resultsData = template(restaurantInfoData);
document.getElementById("resultsData").innerHTML = resultsData;

// Event for the checkboxes by categories
/*
* RESORCE:
* Ans.wiki,'How to make checkbox filters in JavaScript', 2021. [Online]. Available: https://en.ans.wiki/398/how-to-make-checkbox-filters-in-javascript/ [Accessed: 30- July- 2022].
* L. Xiansheng,<b>'Checkbox example', 2018. [Source code]. https://jsfiddle.net/xianshenglu/gzs3fr7n/. [Accessed: 10- Aug- 2022]. 
*/
document.getElementById("bolognese").onchange = function () {
  hideShow("bolognese", this.checked);
};
document.getElementById("aperitivo").onchange = function () {
    hideShow("aperitivo", this.checked);
};
document.getElementById("streetfood").onchange = function () {
    hideShow("streetfood", this.checked);
};
document.getElementById("seafood").onchange = function () {
  hideShow("seafood", this.checked);
};
document.getElementById("pizza").onchange = function () {
    hideShow("pizza", this.checked);
};

// Show or hide the element with class name (aka category names)
function hideShow(myClass, visible) {
  [].forEach.call(document.getElementsByClassName(myClass), function (el) {
    el.hidden = !visible;
  });
}