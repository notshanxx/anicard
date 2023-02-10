let dots = document.getElementById("dots");
let moreText = document.getElementById("more");
// hide the text next to the ellipsis or SHORTEN THE DESCRIPTION
function hideWholeText() {
    
    console.log("hide");
    // MAKE DOTS REAPPEAR AND SHORTEN TEXT
    dots.style.display = "inline";
    moreText.style.display = "none";
  }
  // show all the full description and HIDE THE ELLIPSIS
  
  function showWholeText() {
    console.log("show");
    // MAKE THE DOT HIDE AND THE FULL TEXT APPEAR
    dots.style.display = "none";
    moreText.style.display = "inline";
  }