'use strict';

//get the links
let mainNav = document.getElementById('js-menu');

//get hamgurger icon
let navBarToggle = document.getElementById('js-navbar-toggle');

//set links to be active when hamburger is clicked on
navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

/*
$(document).ready(function() {

    $('body').css('display', 'none');
    
    $('body').fadeIn(1000);
    
    
    $('.link').click(function(event) {
    
    event.preventDefault();
    
    newLocation = "stories.html";
    
    $('body').fadeOut(1000, newpage);
    
    });
    
    function newpage() {
    
    window.location = newLocation;
    
    }
    
    });
    */
    