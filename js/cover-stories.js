/*
 * Javascript for: Cover Stories (cover-stories.html)
 * Informations are inside html page itself
*/

// Open on image card when click on the thumbnail
function gallery(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }