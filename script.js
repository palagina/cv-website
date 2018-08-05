$(document).ready(function() {

//navbar
var topnavContainer = document.getElementById("topnav");
var btns = topnavContainer.getElementsByClassName("topnav-btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

//isotope grip
var $grid = $('.grid').isotope({
    itemSelector: '.skill-item',
    layoutMode: 'fitRows',
    getSortData: {
        name: '.name',
        experience: '.experience'
    }
});

$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

$('.sort-button-group').on('click', 'button', function () {
    var sortValue = $(this).attr('data-sort-value');
    $grid.isotope({ sortBy: sortValue, sortAscending: {name:true, experience:false}});
});

$('.skill-item').mouseout(function () {
   // $(this).children('img').css('filter', 'none');
   $('.active-skill').removeClass('active-skill');
});

$('.skill-item').mouseover(function () {
   $(this).children('img').addClass('active-skill');
});

//popup window
var popup = document.getElementById('workPopup');

// Get the button that opens the modal
var btn = document.getElementById("work-popup-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}


}) //end