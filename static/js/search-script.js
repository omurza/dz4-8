/* -----------------------------------------------
/* search script
/* ----------------------------------------------- */
jQuery(document).ready(function($) {
  var wHeight = window.innerHeight;
  //search bar middle alignment
  $('#search-from2').css('top', wHeight / 2);
  //reform search bar
  jQuery(window).resize(function() {
    wHeight = window.innerHeight;
    $('#search-from2').css('top', wHeight / 2);
  });
  // Search
  $('#search-button').click(function() {
    console.log("Open Search, Search Centered");
    $("div.search-overlay").addClass("search-overlay-show");
  });
  $(".close-btn").click(function() {
    console.log("Closed Search");
    $("div.search-overlay").removeClass("search-overlay-show");
  });
});





