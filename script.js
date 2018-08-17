

$(document).ready(function () {

    //navbar
    var topnavContainer = document.getElementById("topnav");
    var btns = topnavContainer.getElementsByClassName("topnav-btn");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
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
        $grid.isotope({ sortBy: sortValue, sortAscending: { name: true, experience: false } });
    });

    $('.skill-item').mouseout(function () {
        // $(this).children('img').css('filter', 'none');
        $('.active-skill').removeClass('active-skill');
    });

    $('.skill-item').mouseover(function () {
        $(this).children('img').addClass('active-skill');
    });

    //PADI module
    var padiPopup = document.getElementById('padiPopup');
    document.getElementById("padi-button").onclick = function () {
        padiPopup.style.display = "block";
    }

    //SUS module
    var susPopup = document.getElementById('susPopup');
    document.getElementById("sus-button").onclick = function () {
        susPopup.style.display = "block";
    }

   //Insideout module
   var ioePopup = document.getElementById('ioePopup');
   document.getElementById("ioe-button").onclick = function () {
       ioePopup.style.display = "block";
   }

    // When the user clicks on (x), close the module
    var closePadi = document.getElementById('closePadi');
    closePadi.onclick = function () {
        padiPopup.style.display = "none";
    }
    var closeSus = document.getElementById('closeSus');
    closeSus.onclick = function () {
        susPopup.style.display = "none";
    }
    var closeIoe = document.getElementById('closeIoe');
    closeIoe.onclick = function () {
        ioePopup.style.display = "none";
    }

    // close module by clicking anywhere
    window.onclick = function (event) {
        if (event.target == susPopup) {
            susPopup.style.display = "none";
        }
        else if (event.target == padiPopup) {
            padiPopup.style.display = "none";
        }
        else if (event.target == ioePopup) {
            ioePopup.style.display = "none";
        }
    }

}) //end


function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
